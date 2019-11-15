import {CommonTokenStream, ANTLRErrorListener, ANTLRInputStream } from 'antlr4ts';

class BaseErrorListener implements ANTLRErrorListener<any> {
    syntaxError: any;
}

export function LexerWrapper(lexerFactory) {
    this._lexerFactory = lexerFactory;
    this._cachedLexer = null;
}

LexerWrapper.prototype.tokenizeNonDefaultChannel = function (input) {
    const result = this._tokenize(input);
    result.tokens = result.tokens.filter((token) => token.channel === 0);
    return result;
};

LexerWrapper.prototype.getEmptyTokenStream = function() {
    return new CommonTokenStream(this._getCachedLexer());
};

LexerWrapper.prototype._tokenize = function (input) {
    const lexer = this._createLexer(input);
    lexer.removeErrorListeners();
    const result: any = {untokenizedText: ''};
    const newErrorListener = new BaseErrorListener();
    newErrorListener.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
        debugger;
        result.untokenizedText = input.substring(column);
    };
    lexer.addErrorListener(newErrorListener);
    result.tokens = lexer.getAllTokens();
    return result;
};

LexerWrapper.prototype.findStateByRuleNumber = function (ruleNumber) {
    return this._getCachedLexer().atn.ruleToStartState.slice(ruleNumber, ruleNumber + 1)[0];
};

LexerWrapper.prototype._getCachedLexer = function () {
    if (this._cachedLexer === null) {
        this._cachedLexer = this._createEmptyLexer();
    }
    return this._cachedLexer;
};

LexerWrapper.prototype._createEmptyLexer = function (lexerInput) {
    return this._createLexer('');
};

LexerWrapper.prototype._createLexer = function (lexerInput) {
    const inputStream = new ANTLRInputStream(lexerInput);
    const lexer = this._lexerFactory.createLexer(inputStream);
    return lexer;
};

