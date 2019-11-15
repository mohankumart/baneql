// Generated from ./src/antlr/BaneQL.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { BaneQLListener } from "./BaneQLListener";
import { BaneQLVisitor } from "./BaneQLVisitor";


export class BaneQLParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly PROPERTY = 18;
	public static readonly LITERAL_VALUE = 19;
	public static readonly EMAIL = 20;
	public static readonly DOMAINNAME_OR_IP = 21;
	public static readonly STRING = 22;
	public static readonly NUMBER = 23;
	public static readonly WS = 24;
	public static readonly RULE_query = 0;
	public static readonly RULE_union = 1;
	public static readonly RULE_expressionBegins = 2;
	public static readonly RULE_changeMode = 3;
	public static readonly RULE_expressionContinuation = 4;
	public static readonly RULE_filterFunction = 5;
	public static readonly RULE_selectProperties = 6;
	public static readonly RULE_inclusive = 7;
	public static readonly RULE_exclusive = 8;
	public static readonly RULE_matchers = 9;
	public static readonly RULE_valueSelection = 10;
	public static readonly RULE_methodCall = 11;
	public static readonly RULE_methodCallArguments = 12;
	public static readonly RULE_argument = 13;
	public static readonly RULE_equalitySelection = 14;
	public static readonly RULE_gteSelection = 15;
	public static readonly RULE_lteSelection = 16;
	public static readonly RULE_rawValue = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"query", "union", "expressionBegins", "changeMode", "expressionContinuation", 
		"filterFunction", "selectProperties", "inclusive", "exclusive", "matchers", 
		"valueSelection", "methodCall", "methodCallArguments", "argument", "equalitySelection", 
		"gteSelection", "lteSelection", "rawValue",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'>'", "'<'", "'fromasp'", "'('", "')'", "'toasp'", "'pivot'", 
		"'zonefam'", "'zone'", "'subs'", "'cols'", "'+'", "'-'", "','", "'='", 
		"'>='", "'<='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "PROPERTY", "LITERAL_VALUE", 
		"EMAIL", "DOMAINNAME_OR_IP", "STRING", "NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BaneQLParser._LITERAL_NAMES, BaneQLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BaneQLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "BaneQL.g4"; }

	// @Override
	public get ruleNames(): string[] { return BaneQLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return BaneQLParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(BaneQLParser._ATN, this);
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, BaneQLParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaneQLParser.T__0:
			case BaneQLParser.T__1:
				{
				this.state = 36;
				this.changeMode();
				}
				break;
			case BaneQLParser.PROPERTY:
			case BaneQLParser.LITERAL_VALUE:
			case BaneQLParser.EMAIL:
			case BaneQLParser.DOMAINNAME_OR_IP:
			case BaneQLParser.NUMBER:
				{
				this.state = 37;
				this.union();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaneQLParser.T__10) {
				{
				this.state = 40;
				this.selectProperties();
				}
			}

			this.state = 43;
			this.match(BaneQLParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public union(): UnionContext {
		let _localctx: UnionContext = new UnionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, BaneQLParser.RULE_union);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.expressionBegins();
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BaneQLParser.PROPERTY) | (1 << BaneQLParser.LITERAL_VALUE) | (1 << BaneQLParser.EMAIL) | (1 << BaneQLParser.DOMAINNAME_OR_IP) | (1 << BaneQLParser.NUMBER))) !== 0)) {
				{
				{
				this.state = 46;
				this.expressionBegins();
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionBegins(): ExpressionBeginsContext {
		let _localctx: ExpressionBeginsContext = new ExpressionBeginsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, BaneQLParser.RULE_expressionBegins);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.matchers();
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BaneQLParser.T__0) | (1 << BaneQLParser.T__1) | (1 << BaneQLParser.T__2) | (1 << BaneQLParser.T__5) | (1 << BaneQLParser.T__6) | (1 << BaneQLParser.T__7) | (1 << BaneQLParser.T__8) | (1 << BaneQLParser.T__9) | (1 << BaneQLParser.T__11) | (1 << BaneQLParser.T__12))) !== 0)) {
				{
				{
				this.state = 53;
				this.expressionContinuation();
				}
				}
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public changeMode(): ChangeModeContext {
		let _localctx: ChangeModeContext = new ChangeModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, BaneQLParser.RULE_changeMode);
		try {
			let _alt: number;
			this.state = 73;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaneQLParser.T__0:
				_localctx = new OutgoingContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 59;
				this.match(BaneQLParser.T__0);
				this.state = 63;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 60;
						this.expressionContinuation();
						}
						}
					}
					this.state = 65;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				}
				}
				break;
			case BaneQLParser.T__1:
				_localctx = new IncomingContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 66;
				this.match(BaneQLParser.T__1);
				this.state = 70;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 67;
						this.expressionContinuation();
						}
						}
					}
					this.state = 72;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionContinuation(): ExpressionContinuationContext {
		let _localctx: ExpressionContinuationContext = new ExpressionContinuationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, BaneQLParser.RULE_expressionContinuation);
		try {
			this.state = 79;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaneQLParser.T__11:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 75;
				this.inclusive();
				}
				break;
			case BaneQLParser.T__12:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 76;
				this.exclusive();
				}
				break;
			case BaneQLParser.T__2:
			case BaneQLParser.T__5:
			case BaneQLParser.T__6:
			case BaneQLParser.T__7:
			case BaneQLParser.T__8:
			case BaneQLParser.T__9:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 77;
				this.filterFunction();
				}
				break;
			case BaneQLParser.T__0:
			case BaneQLParser.T__1:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 78;
				this.changeMode();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filterFunction(): FilterFunctionContext {
		let _localctx: FilterFunctionContext = new FilterFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, BaneQLParser.RULE_filterFunction);
		try {
			this.state = 111;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaneQLParser.T__2:
				_localctx = new FromAspContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 81;
				this.match(BaneQLParser.T__2);
				this.state = 82;
				this.match(BaneQLParser.T__3);
				this.state = 83;
				this.methodCallArguments();
				this.state = 84;
				this.match(BaneQLParser.T__4);
				}
				break;
			case BaneQLParser.T__5:
				_localctx = new ToAspContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 86;
				this.match(BaneQLParser.T__5);
				this.state = 87;
				this.match(BaneQLParser.T__3);
				this.state = 88;
				this.methodCallArguments();
				this.state = 89;
				this.match(BaneQLParser.T__4);
				}
				break;
			case BaneQLParser.T__6:
				_localctx = new PivotContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 91;
				this.match(BaneQLParser.T__6);
				this.state = 92;
				this.match(BaneQLParser.T__3);
				this.state = 93;
				this.methodCallArguments();
				this.state = 94;
				this.match(BaneQLParser.T__4);
				}
				break;
			case BaneQLParser.T__7:
				_localctx = new ZoneFamContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 96;
				this.match(BaneQLParser.T__7);
				this.state = 97;
				this.match(BaneQLParser.T__3);
				this.state = 98;
				this.methodCallArguments();
				this.state = 99;
				this.match(BaneQLParser.T__4);
				}
				break;
			case BaneQLParser.T__8:
				_localctx = new ZoneContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 101;
				this.match(BaneQLParser.T__8);
				this.state = 102;
				this.match(BaneQLParser.T__3);
				this.state = 103;
				this.methodCallArguments();
				this.state = 104;
				this.match(BaneQLParser.T__4);
				}
				break;
			case BaneQLParser.T__9:
				_localctx = new SubsContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 106;
				this.match(BaneQLParser.T__9);
				this.state = 107;
				this.match(BaneQLParser.T__3);
				this.state = 108;
				this.methodCallArguments();
				this.state = 109;
				this.match(BaneQLParser.T__4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectProperties(): SelectPropertiesContext {
		let _localctx: SelectPropertiesContext = new SelectPropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, BaneQLParser.RULE_selectProperties);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(BaneQLParser.T__10);
			this.state = 114;
			this.match(BaneQLParser.T__3);
			this.state = 115;
			this.methodCallArguments();
			this.state = 116;
			this.match(BaneQLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inclusive(): InclusiveContext {
		let _localctx: InclusiveContext = new InclusiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, BaneQLParser.RULE_inclusive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.match(BaneQLParser.T__11);
			this.state = 119;
			this.matchers();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exclusive(): ExclusiveContext {
		let _localctx: ExclusiveContext = new ExclusiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, BaneQLParser.RULE_exclusive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(BaneQLParser.T__12);
			this.state = 122;
			this.matchers();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matchers(): MatchersContext {
		let _localctx: MatchersContext = new MatchersContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, BaneQLParser.RULE_matchers);
		try {
			this.state = 131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				_localctx = new MatchMethodCallContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 124;
				this.methodCall();
				}
				break;

			case 2:
				_localctx = new MatchValueSelectionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 125;
				this.valueSelection();
				}
				break;

			case 3:
				_localctx = new MatchEqualitySelectionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 126;
				this.equalitySelection();
				}
				break;

			case 4:
				_localctx = new MatchGteSelectionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 127;
				this.gteSelection();
				}
				break;

			case 5:
				_localctx = new MatchLteSelectionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 128;
				this.lteSelection();
				}
				break;

			case 6:
				_localctx = new MatchPropertyContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 129;
				this.match(BaneQLParser.PROPERTY);
				}
				break;

			case 7:
				_localctx = new MatchNumberContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 130;
				this.match(BaneQLParser.NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueSelection(): ValueSelectionContext {
		let _localctx: ValueSelectionContext = new ValueSelectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, BaneQLParser.RULE_valueSelection);
		try {
			this.state = 136;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaneQLParser.EMAIL:
				_localctx = new EmailContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 133;
				this.match(BaneQLParser.EMAIL);
				}
				break;
			case BaneQLParser.DOMAINNAME_OR_IP:
				_localctx = new DomainOrIPContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 134;
				this.match(BaneQLParser.DOMAINNAME_OR_IP);
				}
				break;
			case BaneQLParser.LITERAL_VALUE:
				_localctx = new LiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 135;
				this.match(BaneQLParser.LITERAL_VALUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodCall(): MethodCallContext {
		let _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, BaneQLParser.RULE_methodCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(BaneQLParser.PROPERTY);
			this.state = 139;
			this.match(BaneQLParser.T__3);
			this.state = 140;
			this.methodCallArguments();
			this.state = 141;
			this.match(BaneQLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodCallArguments(): MethodCallArgumentsContext {
		let _localctx: MethodCallArgumentsContext = new MethodCallArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, BaneQLParser.RULE_methodCallArguments);
		let _la: number;
		try {
			this.state = 152;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaneQLParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case BaneQLParser.PROPERTY:
			case BaneQLParser.STRING:
			case BaneQLParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 144;
				this.argument();
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === BaneQLParser.T__13) {
					{
					{
					this.state = 145;
					this.match(BaneQLParser.T__13);
					this.state = 146;
					this.argument();
					}
					}
					this.state = 151;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, BaneQLParser.RULE_argument);
		try {
			this.state = 158;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 154;
				this.equalitySelection();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 155;
				this.match(BaneQLParser.PROPERTY);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 156;
				this.match(BaneQLParser.STRING);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 157;
				this.match(BaneQLParser.NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equalitySelection(): EqualitySelectionContext {
		let _localctx: EqualitySelectionContext = new EqualitySelectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, BaneQLParser.RULE_equalitySelection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(BaneQLParser.PROPERTY);
			this.state = 161;
			this.match(BaneQLParser.T__14);
			this.state = 162;
			this.rawValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gteSelection(): GteSelectionContext {
		let _localctx: GteSelectionContext = new GteSelectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, BaneQLParser.RULE_gteSelection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(BaneQLParser.PROPERTY);
			this.state = 165;
			this.match(BaneQLParser.T__15);
			this.state = 166;
			this.match(BaneQLParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lteSelection(): LteSelectionContext {
		let _localctx: LteSelectionContext = new LteSelectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, BaneQLParser.RULE_lteSelection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.match(BaneQLParser.PROPERTY);
			this.state = 169;
			this.match(BaneQLParser.T__16);
			this.state = 170;
			this.match(BaneQLParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rawValue(): RawValueContext {
		let _localctx: RawValueContext = new RawValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, BaneQLParser.RULE_rawValue);
		try {
			this.state = 176;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaneQLParser.STRING:
				_localctx = new StringContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 172;
				this.match(BaneQLParser.STRING);
				}
				break;
			case BaneQLParser.NUMBER:
				_localctx = new NumberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 173;
				this.match(BaneQLParser.NUMBER);
				}
				break;
			case BaneQLParser.PROPERTY:
				_localctx = new PropertyLikeValueContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 174;
				this.match(BaneQLParser.PROPERTY);
				}
				break;
			case BaneQLParser.LITERAL_VALUE:
				_localctx = new LiteralValueContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 175;
				this.match(BaneQLParser.LITERAL_VALUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x1A\xB5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x03\x02\x05\x02)\n\x02\x03\x02\x05\x02,\n\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x07\x032\n\x03\f\x03\x0E\x035\v\x03\x03\x04\x03" +
		"\x04\x07\x049\n\x04\f\x04\x0E\x04<\v\x04\x03\x05\x03\x05\x07\x05@\n\x05" +
		"\f\x05\x0E\x05C\v\x05\x03\x05\x03\x05\x07\x05G\n\x05\f\x05\x0E\x05J\v" +
		"\x05\x05\x05L\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06R\n\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07r\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x05\v\x86\n\v\x03\f\x03\f\x03\f\x05\f\x8B\n\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\x96\n\x0E\f\x0E\x0E\x0E" +
		"\x99\v\x0E\x05\x0E\x9B\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xA1" +
		"\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13" +
		"\xB3\n\x13\x03\x13\x02\x02\x02\x14\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02\x02\x02\xC1\x02(\x03\x02\x02\x02\x04/\x03\x02" +
		"\x02\x02\x066\x03\x02\x02\x02\bK\x03\x02\x02\x02\nQ\x03\x02\x02\x02\f" +
		"q\x03\x02\x02\x02\x0Es\x03\x02\x02\x02\x10x\x03\x02\x02\x02\x12{\x03\x02" +
		"\x02\x02\x14\x85\x03\x02\x02\x02\x16\x8A\x03\x02\x02\x02\x18\x8C\x03\x02" +
		"\x02\x02\x1A\x9A\x03\x02\x02\x02\x1C\xA0\x03\x02\x02\x02\x1E\xA2\x03\x02" +
		"\x02\x02 \xA6\x03\x02\x02\x02\"\xAA\x03\x02\x02\x02$\xB2\x03\x02\x02\x02" +
		"&)\x05\b\x05\x02\')\x05\x04\x03\x02(&\x03\x02\x02\x02(\'\x03\x02\x02\x02" +
		")+\x03\x02\x02\x02*,\x05\x0E\b\x02+*\x03\x02\x02\x02+,\x03\x02\x02\x02" +
		",-\x03\x02\x02\x02-.\x07\x02\x02\x03.\x03\x03\x02\x02\x02/3\x05\x06\x04" +
		"\x0202\x05\x06\x04\x0210\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02" +
		"\x0234\x03\x02\x02\x024\x05\x03\x02\x02\x0253\x03\x02\x02\x026:\x05\x14" +
		"\v\x0279\x05\n\x06\x0287\x03\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02\x02" +
		"\x02:;\x03\x02\x02\x02;\x07\x03\x02\x02\x02<:\x03\x02\x02\x02=A\x07\x03" +
		"\x02\x02>@\x05\n\x06\x02?>\x03\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02" +
		"\x02\x02AB\x03\x02\x02\x02BL\x03\x02\x02\x02CA\x03\x02\x02\x02DH\x07\x04" +
		"\x02\x02EG\x05\n\x06\x02FE\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02" +
		"\x02\x02HI\x03\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02K=\x03\x02" +
		"\x02\x02KD\x03\x02\x02\x02L\t\x03\x02\x02\x02MR\x05\x10\t\x02NR\x05\x12" +
		"\n\x02OR\x05\f\x07\x02PR\x05\b\x05\x02QM\x03\x02\x02\x02QN\x03\x02\x02" +
		"\x02QO\x03\x02\x02\x02QP\x03\x02\x02\x02R\v\x03\x02\x02\x02ST\x07\x05" +
		"\x02\x02TU\x07\x06\x02\x02UV\x05\x1A\x0E\x02VW\x07\x07\x02\x02Wr\x03\x02" +
		"\x02\x02XY\x07\b\x02\x02YZ\x07\x06\x02\x02Z[\x05\x1A\x0E\x02[\\\x07\x07" +
		"\x02\x02\\r\x03\x02\x02\x02]^\x07\t\x02\x02^_\x07\x06\x02\x02_`\x05\x1A" +
		"\x0E\x02`a\x07\x07\x02\x02ar\x03\x02\x02\x02bc\x07\n\x02\x02cd\x07\x06" +
		"\x02\x02de\x05\x1A\x0E\x02ef\x07\x07\x02\x02fr\x03\x02\x02\x02gh\x07\v" +
		"\x02\x02hi\x07\x06\x02\x02ij\x05\x1A\x0E\x02jk\x07\x07\x02\x02kr\x03\x02" +
		"\x02\x02lm\x07\f\x02\x02mn\x07\x06\x02\x02no\x05\x1A\x0E\x02op\x07\x07" +
		"\x02\x02pr\x03\x02\x02\x02qS\x03\x02\x02\x02qX\x03\x02\x02\x02q]\x03\x02" +
		"\x02\x02qb\x03\x02\x02\x02qg\x03\x02\x02\x02ql\x03\x02\x02\x02r\r\x03" +
		"\x02\x02\x02st\x07\r\x02\x02tu\x07\x06\x02\x02uv\x05\x1A\x0E\x02vw\x07" +
		"\x07\x02\x02w\x0F\x03\x02\x02\x02xy\x07\x0E\x02\x02yz\x05\x14\v\x02z\x11" +
		"\x03\x02\x02\x02{|\x07\x0F\x02\x02|}\x05\x14\v\x02}\x13\x03\x02\x02\x02" +
		"~\x86\x05\x18\r\x02\x7F\x86\x05\x16\f\x02\x80\x86\x05\x1E\x10\x02\x81" +
		"\x86\x05 \x11\x02\x82\x86\x05\"\x12\x02\x83\x86\x07\x14\x02\x02\x84\x86" +
		"\x07\x19\x02\x02\x85~\x03\x02\x02\x02\x85\x7F\x03\x02\x02\x02\x85\x80" +
		"\x03\x02\x02\x02\x85\x81\x03\x02\x02\x02\x85\x82\x03\x02\x02\x02\x85\x83" +
		"\x03\x02\x02\x02\x85\x84\x03\x02\x02\x02\x86\x15\x03\x02\x02\x02\x87\x8B" +
		"\x07\x16\x02\x02\x88\x8B\x07\x17\x02\x02\x89\x8B\x07\x15\x02\x02\x8A\x87" +
		"\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8A\x89\x03\x02\x02\x02\x8B\x17" +
		"\x03\x02\x02\x02\x8C\x8D\x07\x14\x02\x02\x8D\x8E\x07\x06\x02\x02\x8E\x8F" +
		"\x05\x1A\x0E\x02\x8F\x90\x07\x07\x02\x02\x90\x19\x03\x02\x02\x02\x91\x9B" +
		"\x03\x02\x02\x02\x92\x97\x05\x1C\x0F\x02\x93\x94\x07\x10\x02\x02\x94\x96" +
		"\x05\x1C\x0F\x02\x95\x93\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97\x95" +
		"\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9B\x03\x02\x02\x02\x99\x97" +
		"\x03\x02\x02\x02\x9A\x91\x03\x02\x02\x02\x9A\x92\x03\x02\x02\x02\x9B\x1B" +
		"\x03\x02\x02\x02\x9C\xA1\x05\x1E\x10\x02\x9D\xA1\x07\x14\x02\x02\x9E\xA1" +
		"\x07\x18\x02\x02\x9F\xA1\x07\x19\x02\x02\xA0\x9C\x03\x02\x02\x02\xA0\x9D" +
		"\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1\x1D" +
		"\x03\x02\x02\x02\xA2\xA3\x07\x14\x02\x02\xA3\xA4\x07\x11\x02\x02\xA4\xA5" +
		"\x05$\x13\x02\xA5\x1F\x03\x02\x02\x02\xA6\xA7\x07\x14\x02\x02\xA7\xA8" +
		"\x07\x12\x02\x02\xA8\xA9\x07\x19\x02\x02\xA9!\x03\x02\x02\x02\xAA\xAB" +
		"\x07\x14\x02\x02\xAB\xAC\x07\x13\x02\x02\xAC\xAD\x07\x19\x02\x02\xAD#" +
		"\x03\x02\x02\x02\xAE\xB3\x07\x18\x02\x02\xAF\xB3\x07\x19\x02\x02\xB0\xB3" +
		"\x07\x14\x02\x02\xB1\xB3\x07\x15\x02\x02\xB2\xAE\x03\x02\x02\x02\xB2\xAF" +
		"\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB1\x03\x02\x02\x02\xB3%" +
		"\x03\x02\x02\x02\x11(+3:AHKQq\x85\x8A\x97\x9A\xA0\xB2";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BaneQLParser.__ATN) {
			BaneQLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BaneQLParser._serializedATN));
		}

		return BaneQLParser.__ATN;
	}

}

export class QueryContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(BaneQLParser.EOF, 0); }
	public changeMode(): ChangeModeContext | undefined {
		return this.tryGetRuleContext(0, ChangeModeContext);
	}
	public union(): UnionContext | undefined {
		return this.tryGetRuleContext(0, UnionContext);
	}
	public selectProperties(): SelectPropertiesContext | undefined {
		return this.tryGetRuleContext(0, SelectPropertiesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_query; }
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionContext extends ParserRuleContext {
	public expressionBegins(): ExpressionBeginsContext[];
	public expressionBegins(i: number): ExpressionBeginsContext;
	public expressionBegins(i?: number): ExpressionBeginsContext | ExpressionBeginsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionBeginsContext);
		} else {
			return this.getRuleContext(i, ExpressionBeginsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_union; }
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterUnion) {
			listener.enterUnion(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitUnion) {
			listener.exitUnion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitUnion) {
			return visitor.visitUnion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionBeginsContext extends ParserRuleContext {
	public matchers(): MatchersContext {
		return this.getRuleContext(0, MatchersContext);
	}
	public expressionContinuation(): ExpressionContinuationContext[];
	public expressionContinuation(i: number): ExpressionContinuationContext;
	public expressionContinuation(i?: number): ExpressionContinuationContext | ExpressionContinuationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContinuationContext);
		} else {
			return this.getRuleContext(i, ExpressionContinuationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_expressionBegins; }
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterExpressionBegins) {
			listener.enterExpressionBegins(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitExpressionBegins) {
			listener.exitExpressionBegins(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitExpressionBegins) {
			return visitor.visitExpressionBegins(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChangeModeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_changeMode; }
	public copyFrom(ctx: ChangeModeContext): void {
		super.copyFrom(ctx);
	}
}
export class IncomingContext extends ChangeModeContext {
	public expressionContinuation(): ExpressionContinuationContext[];
	public expressionContinuation(i: number): ExpressionContinuationContext;
	public expressionContinuation(i?: number): ExpressionContinuationContext | ExpressionContinuationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContinuationContext);
		} else {
			return this.getRuleContext(i, ExpressionContinuationContext);
		}
	}
	constructor(ctx: ChangeModeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterIncoming) {
			listener.enterIncoming(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitIncoming) {
			listener.exitIncoming(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitIncoming) {
			return visitor.visitIncoming(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OutgoingContext extends ChangeModeContext {
	public expressionContinuation(): ExpressionContinuationContext[];
	public expressionContinuation(i: number): ExpressionContinuationContext;
	public expressionContinuation(i?: number): ExpressionContinuationContext | ExpressionContinuationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContinuationContext);
		} else {
			return this.getRuleContext(i, ExpressionContinuationContext);
		}
	}
	constructor(ctx: ChangeModeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterOutgoing) {
			listener.enterOutgoing(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitOutgoing) {
			listener.exitOutgoing(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitOutgoing) {
			return visitor.visitOutgoing(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContinuationContext extends ParserRuleContext {
	public inclusive(): InclusiveContext | undefined {
		return this.tryGetRuleContext(0, InclusiveContext);
	}
	public exclusive(): ExclusiveContext | undefined {
		return this.tryGetRuleContext(0, ExclusiveContext);
	}
	public filterFunction(): FilterFunctionContext | undefined {
		return this.tryGetRuleContext(0, FilterFunctionContext);
	}
	public changeMode(): ChangeModeContext | undefined {
		return this.tryGetRuleContext(0, ChangeModeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_expressionContinuation; }
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterExpressionContinuation) {
			listener.enterExpressionContinuation(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitExpressionContinuation) {
			listener.exitExpressionContinuation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitExpressionContinuation) {
			return visitor.visitExpressionContinuation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilterFunctionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_filterFunction; }
	public copyFrom(ctx: FilterFunctionContext): void {
		super.copyFrom(ctx);
	}
}
export class ToAspContext extends FilterFunctionContext {
	public methodCallArguments(): MethodCallArgumentsContext {
		return this.getRuleContext(0, MethodCallArgumentsContext);
	}
	constructor(ctx: FilterFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterToAsp) {
			listener.enterToAsp(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitToAsp) {
			listener.exitToAsp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitToAsp) {
			return visitor.visitToAsp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ZoneFamContext extends FilterFunctionContext {
	public methodCallArguments(): MethodCallArgumentsContext {
		return this.getRuleContext(0, MethodCallArgumentsContext);
	}
	constructor(ctx: FilterFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterZoneFam) {
			listener.enterZoneFam(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitZoneFam) {
			listener.exitZoneFam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitZoneFam) {
			return visitor.visitZoneFam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubsContext extends FilterFunctionContext {
	public methodCallArguments(): MethodCallArgumentsContext {
		return this.getRuleContext(0, MethodCallArgumentsContext);
	}
	constructor(ctx: FilterFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterSubs) {
			listener.enterSubs(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitSubs) {
			listener.exitSubs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitSubs) {
			return visitor.visitSubs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ZoneContext extends FilterFunctionContext {
	public methodCallArguments(): MethodCallArgumentsContext {
		return this.getRuleContext(0, MethodCallArgumentsContext);
	}
	constructor(ctx: FilterFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterZone) {
			listener.enterZone(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitZone) {
			listener.exitZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitZone) {
			return visitor.visitZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PivotContext extends FilterFunctionContext {
	public methodCallArguments(): MethodCallArgumentsContext {
		return this.getRuleContext(0, MethodCallArgumentsContext);
	}
	constructor(ctx: FilterFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterPivot) {
			listener.enterPivot(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitPivot) {
			listener.exitPivot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitPivot) {
			return visitor.visitPivot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FromAspContext extends FilterFunctionContext {
	public methodCallArguments(): MethodCallArgumentsContext {
		return this.getRuleContext(0, MethodCallArgumentsContext);
	}
	constructor(ctx: FilterFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterFromAsp) {
			listener.enterFromAsp(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitFromAsp) {
			listener.exitFromAsp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitFromAsp) {
			return visitor.visitFromAsp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectPropertiesContext extends ParserRuleContext {
	public methodCallArguments(): MethodCallArgumentsContext {
		return this.getRuleContext(0, MethodCallArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_selectProperties; }
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterSelectProperties) {
			listener.enterSelectProperties(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitSelectProperties) {
			listener.exitSelectProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitSelectProperties) {
			return visitor.visitSelectProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InclusiveContext extends ParserRuleContext {
	public matchers(): MatchersContext {
		return this.getRuleContext(0, MatchersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_inclusive; }
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterInclusive) {
			listener.enterInclusive(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitInclusive) {
			listener.exitInclusive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitInclusive) {
			return visitor.visitInclusive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExclusiveContext extends ParserRuleContext {
	public matchers(): MatchersContext {
		return this.getRuleContext(0, MatchersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_exclusive; }
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterExclusive) {
			listener.enterExclusive(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitExclusive) {
			listener.exitExclusive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitExclusive) {
			return visitor.visitExclusive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchersContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_matchers; }
	public copyFrom(ctx: MatchersContext): void {
		super.copyFrom(ctx);
	}
}
export class MatchLteSelectionContext extends MatchersContext {
	public lteSelection(): LteSelectionContext {
		return this.getRuleContext(0, LteSelectionContext);
	}
	constructor(ctx: MatchersContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterMatchLteSelection) {
			listener.enterMatchLteSelection(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitMatchLteSelection) {
			listener.exitMatchLteSelection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitMatchLteSelection) {
			return visitor.visitMatchLteSelection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MatchMethodCallContext extends MatchersContext {
	public methodCall(): MethodCallContext {
		return this.getRuleContext(0, MethodCallContext);
	}
	constructor(ctx: MatchersContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterMatchMethodCall) {
			listener.enterMatchMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitMatchMethodCall) {
			listener.exitMatchMethodCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitMatchMethodCall) {
			return visitor.visitMatchMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MatchGteSelectionContext extends MatchersContext {
	public gteSelection(): GteSelectionContext {
		return this.getRuleContext(0, GteSelectionContext);
	}
	constructor(ctx: MatchersContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterMatchGteSelection) {
			listener.enterMatchGteSelection(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitMatchGteSelection) {
			listener.exitMatchGteSelection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitMatchGteSelection) {
			return visitor.visitMatchGteSelection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MatchValueSelectionContext extends MatchersContext {
	public valueSelection(): ValueSelectionContext {
		return this.getRuleContext(0, ValueSelectionContext);
	}
	constructor(ctx: MatchersContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterMatchValueSelection) {
			listener.enterMatchValueSelection(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitMatchValueSelection) {
			listener.exitMatchValueSelection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitMatchValueSelection) {
			return visitor.visitMatchValueSelection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MatchEqualitySelectionContext extends MatchersContext {
	public equalitySelection(): EqualitySelectionContext {
		return this.getRuleContext(0, EqualitySelectionContext);
	}
	constructor(ctx: MatchersContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterMatchEqualitySelection) {
			listener.enterMatchEqualitySelection(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitMatchEqualitySelection) {
			listener.exitMatchEqualitySelection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitMatchEqualitySelection) {
			return visitor.visitMatchEqualitySelection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MatchPropertyContext extends MatchersContext {
	public PROPERTY(): TerminalNode { return this.getToken(BaneQLParser.PROPERTY, 0); }
	constructor(ctx: MatchersContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterMatchProperty) {
			listener.enterMatchProperty(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitMatchProperty) {
			listener.exitMatchProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitMatchProperty) {
			return visitor.visitMatchProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MatchNumberContext extends MatchersContext {
	public NUMBER(): TerminalNode { return this.getToken(BaneQLParser.NUMBER, 0); }
	constructor(ctx: MatchersContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterMatchNumber) {
			listener.enterMatchNumber(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitMatchNumber) {
			listener.exitMatchNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitMatchNumber) {
			return visitor.visitMatchNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueSelectionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_valueSelection; }
	public copyFrom(ctx: ValueSelectionContext): void {
		super.copyFrom(ctx);
	}
}
export class EmailContext extends ValueSelectionContext {
	public EMAIL(): TerminalNode { return this.getToken(BaneQLParser.EMAIL, 0); }
	constructor(ctx: ValueSelectionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterEmail) {
			listener.enterEmail(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitEmail) {
			listener.exitEmail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitEmail) {
			return visitor.visitEmail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DomainOrIPContext extends ValueSelectionContext {
	public DOMAINNAME_OR_IP(): TerminalNode { return this.getToken(BaneQLParser.DOMAINNAME_OR_IP, 0); }
	constructor(ctx: ValueSelectionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterDomainOrIP) {
			listener.enterDomainOrIP(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitDomainOrIP) {
			listener.exitDomainOrIP(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitDomainOrIP) {
			return visitor.visitDomainOrIP(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralContext extends ValueSelectionContext {
	public LITERAL_VALUE(): TerminalNode { return this.getToken(BaneQLParser.LITERAL_VALUE, 0); }
	constructor(ctx: ValueSelectionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodCallContext extends ParserRuleContext {
	public PROPERTY(): TerminalNode { return this.getToken(BaneQLParser.PROPERTY, 0); }
	public methodCallArguments(): MethodCallArgumentsContext {
		return this.getRuleContext(0, MethodCallArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_methodCall; }
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterMethodCall) {
			listener.enterMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitMethodCall) {
			listener.exitMethodCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitMethodCall) {
			return visitor.visitMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodCallArgumentsContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_methodCallArguments; }
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterMethodCallArguments) {
			listener.enterMethodCallArguments(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitMethodCallArguments) {
			listener.exitMethodCallArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitMethodCallArguments) {
			return visitor.visitMethodCallArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public equalitySelection(): EqualitySelectionContext | undefined {
		return this.tryGetRuleContext(0, EqualitySelectionContext);
	}
	public PROPERTY(): TerminalNode | undefined { return this.tryGetToken(BaneQLParser.PROPERTY, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(BaneQLParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(BaneQLParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_argument; }
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualitySelectionContext extends ParserRuleContext {
	public PROPERTY(): TerminalNode { return this.getToken(BaneQLParser.PROPERTY, 0); }
	public rawValue(): RawValueContext {
		return this.getRuleContext(0, RawValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_equalitySelection; }
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterEqualitySelection) {
			listener.enterEqualitySelection(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitEqualitySelection) {
			listener.exitEqualitySelection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitEqualitySelection) {
			return visitor.visitEqualitySelection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GteSelectionContext extends ParserRuleContext {
	public PROPERTY(): TerminalNode { return this.getToken(BaneQLParser.PROPERTY, 0); }
	public NUMBER(): TerminalNode { return this.getToken(BaneQLParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_gteSelection; }
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterGteSelection) {
			listener.enterGteSelection(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitGteSelection) {
			listener.exitGteSelection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitGteSelection) {
			return visitor.visitGteSelection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LteSelectionContext extends ParserRuleContext {
	public PROPERTY(): TerminalNode { return this.getToken(BaneQLParser.PROPERTY, 0); }
	public NUMBER(): TerminalNode { return this.getToken(BaneQLParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_lteSelection; }
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterLteSelection) {
			listener.enterLteSelection(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitLteSelection) {
			listener.exitLteSelection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitLteSelection) {
			return visitor.visitLteSelection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RawValueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaneQLParser.RULE_rawValue; }
	public copyFrom(ctx: RawValueContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyLikeValueContext extends RawValueContext {
	public PROPERTY(): TerminalNode { return this.getToken(BaneQLParser.PROPERTY, 0); }
	constructor(ctx: RawValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterPropertyLikeValue) {
			listener.enterPropertyLikeValue(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitPropertyLikeValue) {
			listener.exitPropertyLikeValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitPropertyLikeValue) {
			return visitor.visitPropertyLikeValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberContext extends RawValueContext {
	public NUMBER(): TerminalNode { return this.getToken(BaneQLParser.NUMBER, 0); }
	constructor(ctx: RawValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralValueContext extends RawValueContext {
	public LITERAL_VALUE(): TerminalNode { return this.getToken(BaneQLParser.LITERAL_VALUE, 0); }
	constructor(ctx: RawValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterLiteralValue) {
			listener.enterLiteralValue(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitLiteralValue) {
			listener.exitLiteralValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitLiteralValue) {
			return visitor.visitLiteralValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringContext extends RawValueContext {
	public STRING(): TerminalNode { return this.getToken(BaneQLParser.STRING, 0); }
	constructor(ctx: RawValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BaneQLListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: BaneQLListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BaneQLVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


