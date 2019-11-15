import { TokenSuggester} from './tokensuggester';
import { LexerWrapper } from './lexerWrapper';
import {ATOM_TRANSITION, SET_TRANSITION} from './antlr4Constants';


function AutoSuggestionsGenerator(lexerAndParserFactory, input) : any  {
    this._lexerWrapper = new LexerWrapper(lexerAndParserFactory);
    this._lexerAndParserFactory = lexerAndParserFactory;
    this._input = input;
    this._inputTokens = [];
    this._untokenizedText = '';
    this._parserAtn = null;
    this._parserRuleNames = [];
    this._indent = '';
    this._collectedSuggestions = [];
    this._casePreference = 'BOTH';
    this._parserStateToTokenListIndexWhereLastVisited = new Map();

    return this;
}

const transToStr = function (trans) {
    return '' + trans.constructor.name + '->' + trans.target;
};

AutoSuggestionsGenerator.prototype.constructor = AutoSuggestionsGenerator;

AutoSuggestionsGenerator.prototype.suggest = function () {
    this._tokenizeInput();
    this._storeParserAtnAndRuleNames();
    this._runParserAtnAndCollectSuggestions();
    return this._collectedSuggestions;
};

AutoSuggestionsGenerator.prototype.setCasePreference = function(casePreference) {
    this._casePreference = casePreference;
};

AutoSuggestionsGenerator.prototype._tokenizeInput = function () {
    const tokenizationResult = this._lexerWrapper.tokenizeNonDefaultChannel(this._input);
    this._inputTokens = tokenizationResult.tokens;
    this._untokenizedText = tokenizationResult.untokenizedText;
    for (let token of this._inputTokens) {
    }
};

AutoSuggestionsGenerator.prototype._filterOutNonDefaultChannels = function (tokens) {
    return tokens.filter((token) => token.channel === 0);
};

AutoSuggestionsGenerator.prototype._storeParserAtnAndRuleNames = function () {
    const tokenStream = this._lexerWrapper.getEmptyTokenStream();
    const parser = this._lexerAndParserFactory.createParser(tokenStream);
    this._parserAtn = parser.atn;
    this._parserRuleNames = parser.ruleNames;
    
};

AutoSuggestionsGenerator.prototype._runParserAtnAndCollectSuggestions = function () {
    const initialState = this._parserAtn.states[0];
    this._parseAndCollectTokenSuggestions(initialState, 0);
};

AutoSuggestionsGenerator.prototype._parseAndCollectTokenSuggestions = function (parserState, tokenListIndex) {
    const prevIndent = this._indent;
    this._indent += '  ';
    if (this._didVisitParserStateOnThisTokenIndex(parserState, tokenListIndex)) {
        return;
    }
    const previousTokenListIndexForThisState = this._setParserStateLastVisitedOnThisTokenIndex(parserState, tokenListIndex);
    try {
        // debug(indent + 'State available transitions: ' + transitionsStr(parserState));

        if (!this._haveMoreTokens(tokenListIndex)) { // stop condition for recursion
            this._suggestNextTokensForParserState(parserState);
            return;
        }
        for (let trans of parserState.transitions) {
            if (trans.isEpsilon) {
                this._handleEpsilonTransition(trans, tokenListIndex);
            } else if (trans.serializationType === ATOM_TRANSITION) {
                this._handleAtomicTransition(trans, tokenListIndex);
            } else {
                this._handleSetTransition(trans, tokenListIndex);
            }
        }
    } finally {
        this._indent = prevIndent;
        this._setParserStateLastVisitedOnThisTokenIndex(parserState, previousTokenListIndexForThisState);
    }
};

AutoSuggestionsGenerator.prototype._didVisitParserStateOnThisTokenIndex = function(parserState, currentTokenListIndex) {
    const lastVisitedThisStateAtTokenListIndex = this._parserStateToTokenListIndexWhereLastVisited.get(parserState);
    return currentTokenListIndex === lastVisitedThisStateAtTokenListIndex;
};

AutoSuggestionsGenerator.prototype._setParserStateLastVisitedOnThisTokenIndex = function(parserState, tokenListIndex) {
    const previous = this._parserStateToTokenListIndexWhereLastVisited.get(parserState);
    if (typeof tokenListIndex === 'undefined') {
        this._parserStateToTokenListIndexWhereLastVisited.delete(parserState);
    } else {
        this._parserStateToTokenListIndexWhereLastVisited.set(parserState, tokenListIndex);
    }
    return previous;
};

AutoSuggestionsGenerator.prototype._haveMoreTokens = function (index) {
    return index < this._inputTokens.length;
};

AutoSuggestionsGenerator.prototype._handleEpsilonTransition = function (trans, tokenListIndex) {
    this._parseAndCollectTokenSuggestions(trans.target, tokenListIndex);
};

AutoSuggestionsGenerator.prototype._handleAtomicTransition = function (trans, tokenListIndex) {
    const nextToken = this._inputTokens.slice(tokenListIndex, tokenListIndex + 1)[0];
    const nextTokenType = nextToken.type;
    const nextTokenMatchesTransition = (trans.label.contains(nextTokenType));
    if (nextTokenMatchesTransition) {
        this._parseAndCollectTokenSuggestions(trans.target, tokenListIndex + 1);
    }
};

AutoSuggestionsGenerator.prototype._handleSetTransition = function (trans, tokenListIndex) {
    const nextToken = this._inputTokens.slice(tokenListIndex, tokenListIndex + 1)[0];
    const nextTokenType = nextToken.type;
    for (let interval of trans.label.intervals) {
        for (let transitionTokenType = interval.start; transitionTokenType <= interval.stop; ++transitionTokenType) {
            const nextTokenMatchesTransition = (transitionTokenType === nextTokenType);
            if (nextTokenMatchesTransition) {
                this._parseAndCollectTokenSuggestions(trans.target, tokenListIndex + 1);
            } else {
            }
        }
    }
};

AutoSuggestionsGenerator.prototype._suggestNextTokensForParserState = function (parserState) {
    const transitionLabels = new Set();
    this._fillParserTransitionLabels(parserState, transitionLabels, new Set());
    const tokenSuggester = new (TokenSuggester as any)(this._untokenizedText, this._lexerWrapper, this._casePreference);
    const suggestions = tokenSuggester.suggest(transitionLabels, this._untokenizedText);
    this._parseSuggestionsAndAddValidOnes(parserState, suggestions);
    // logger.debug(indent + 'WILL SUGGEST TOKENS FOR STATE: ' + parserState);
};

const toTransKey = function (src, trans) {
    return '' + src.stateNumber + '->(' + trans.serializationType + ') ' + trans.target.stateNumber;
};

AutoSuggestionsGenerator.prototype._fillParserTransitionLabels = function (parserState, result, visitedTransitions) {
    for (let trans of parserState.transitions) {
        const transKey = toTransKey(parserState, trans);
        if (visitedTransitions.has(transKey)) {
            return;
        }
        if (trans.isEpsilon) {
            visitedTransitions.add(transKey);
            try {
                this._fillParserTransitionLabels(trans.target, result, visitedTransitions);
            } finally {
                visitedTransitions.delete(transKey);
            }
        } else if (trans.serializationType === ATOM_TRANSITION) {
            result.add(trans._label);
        } else if (trans.serializationType === SET_TRANSITION) {
            for (let interval of trans.label.intervals) {
                for (let i = interval.start; i < interval.stop; ++i) {
                    result.add(i);
                }
            }
        }
    }
};

AutoSuggestionsGenerator.prototype._parseSuggestionsAndAddValidOnes = function (parserState, suggestions) {
    for (let suggestion of suggestions) {
        const addedToken = this._getAddedToken(suggestion);
        if (this._isParseableWithAddedToken(parserState, addedToken, new Set())) {

            if (!this._collectedSuggestions.includes(suggestion)) {
                this._collectedSuggestions.push(suggestion);
            }
        } else {
        }
    }
};

AutoSuggestionsGenerator.prototype._getAddedToken = function (suggestedCompletion) {
    const completedText = this._input + suggestedCompletion;
    const completedTextTokens = this._lexerWrapper.tokenizeNonDefaultChannel(completedText).tokens;
    if (completedTextTokens.length <= this._inputTokens.length) {
        return null; // Completion didn't yield whole token, could be just a token fragment
    }
    const newToken = completedTextTokens[completedTextTokens.length - 1];
    return newToken;
};

AutoSuggestionsGenerator.prototype._isParseableWithAddedToken = function (parserState, newToken, visitedTransitions) {
    if (newToken == null) {
        return false;
    }
    let parseable = false;
    for (let parserTransition of parserState.transitions) {
        if (parserTransition.isEpsilon) { // Recurse through any epsilon transitions
            const transKey = toTransKey(parserState, parserTransition);
            if (visitedTransitions.has(transKey)) {
                return;
            }
            visitedTransitions.add(transKey);
            try {
                if (this._isParseableWithAddedToken(parserTransition.target, newToken, visitedTransitions)) {
                    parseable = true;
                }
            } finally {
                visitedTransitions.delete(transKey);
            }
        } else if (parserTransition.serializationType === ATOM_TRANSITION) {
            const transitionTokenType = parserTransition._label;
            if (transitionTokenType === newToken._type) {
                parseable = true;
            }
        } else if (parserTransition.serializationType === SET_TRANSITION) {
            for (let interval of parserTransition.label.intervals) {
                for (let transitionTokenType = interval.start; transitionTokenType <= interval.stop; ++transitionTokenType) {
                    if (transitionTokenType === newToken._type) {
                        parseable = true;
                    }
                }
            }
        } else {
            throw 'Unexpected: ' + transToStr(parserTransition);
        }
    }
    return parseable;
};


export function AutoSuggester(lexerCtr, parserCtr, casePreference=null) {
    this._lexerCtr = lexerCtr;
    this._parserCtr = parserCtr;
    this._casePreference = casePreference;
    this._assertLexerHasAtn();
    return this;
}

AutoSuggester.prototype.constructor = AutoSuggester;

AutoSuggester.prototype.createLexer = function (input) {
    return new this._lexerCtr(input);
};
AutoSuggester.prototype.createParser = function (tokenStream) {
    return new this._parserCtr(tokenStream);
};
AutoSuggester.prototype.autosuggest = function(inputText) {
    const generator =  new (AutoSuggestionsGenerator as any)(this, inputText);
    if (this._casePreference) {
        generator.setCasePreference(this._casePreference);
    }
    return generator.suggest();
};

AutoSuggester.prototype._assertLexerHasAtn = function() {
    const lexer = new this._lexerCtr(null);
    if (typeof lexer.atn === 'undefined') {
        throw "Please use ANTLR4 version 4.7.1 or above.";
    }
    return lexer;
};




