// Generated from ./src/antlr/BaneQL.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { EmailContext } from "./BaneQLParser";
import { DomainOrIPContext } from "./BaneQLParser";
import { LiteralContext } from "./BaneQLParser";
import { MatchLteSelectionContext } from "./BaneQLParser";
import { MatchMethodCallContext } from "./BaneQLParser";
import { MatchGteSelectionContext } from "./BaneQLParser";
import { MatchValueSelectionContext } from "./BaneQLParser";
import { MatchEqualitySelectionContext } from "./BaneQLParser";
import { MatchPropertyContext } from "./BaneQLParser";
import { MatchNumberContext } from "./BaneQLParser";
import { PropertyLikeValueContext } from "./BaneQLParser";
import { NumberContext } from "./BaneQLParser";
import { LiteralValueContext } from "./BaneQLParser";
import { StringContext } from "./BaneQLParser";
import { IncomingContext } from "./BaneQLParser";
import { OutgoingContext } from "./BaneQLParser";
import { ToAspContext } from "./BaneQLParser";
import { ZoneFamContext } from "./BaneQLParser";
import { SubsContext } from "./BaneQLParser";
import { ZoneContext } from "./BaneQLParser";
import { PivotContext } from "./BaneQLParser";
import { FromAspContext } from "./BaneQLParser";
import { QueryContext } from "./BaneQLParser";
import { UnionContext } from "./BaneQLParser";
import { ExpressionBeginsContext } from "./BaneQLParser";
import { ChangeModeContext } from "./BaneQLParser";
import { ExpressionContinuationContext } from "./BaneQLParser";
import { FilterFunctionContext } from "./BaneQLParser";
import { SelectPropertiesContext } from "./BaneQLParser";
import { InclusiveContext } from "./BaneQLParser";
import { ExclusiveContext } from "./BaneQLParser";
import { MatchersContext } from "./BaneQLParser";
import { ValueSelectionContext } from "./BaneQLParser";
import { MethodCallContext } from "./BaneQLParser";
import { MethodCallArgumentsContext } from "./BaneQLParser";
import { ArgumentContext } from "./BaneQLParser";
import { EqualitySelectionContext } from "./BaneQLParser";
import { GteSelectionContext } from "./BaneQLParser";
import { LteSelectionContext } from "./BaneQLParser";
import { RawValueContext } from "./BaneQLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BaneQLParser`.
 */
export interface BaneQLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `Email`
	 * labeled alternative in `BaneQLParser.valueSelection`.
	 * @param ctx the parse tree
	 */
	enterEmail?: (ctx: EmailContext) => void;
	/**
	 * Exit a parse tree produced by the `Email`
	 * labeled alternative in `BaneQLParser.valueSelection`.
	 * @param ctx the parse tree
	 */
	exitEmail?: (ctx: EmailContext) => void;

	/**
	 * Enter a parse tree produced by the `DomainOrIP`
	 * labeled alternative in `BaneQLParser.valueSelection`.
	 * @param ctx the parse tree
	 */
	enterDomainOrIP?: (ctx: DomainOrIPContext) => void;
	/**
	 * Exit a parse tree produced by the `DomainOrIP`
	 * labeled alternative in `BaneQLParser.valueSelection`.
	 * @param ctx the parse tree
	 */
	exitDomainOrIP?: (ctx: DomainOrIPContext) => void;

	/**
	 * Enter a parse tree produced by the `Literal`
	 * labeled alternative in `BaneQLParser.valueSelection`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `Literal`
	 * labeled alternative in `BaneQLParser.valueSelection`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `matchLteSelection`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 */
	enterMatchLteSelection?: (ctx: MatchLteSelectionContext) => void;
	/**
	 * Exit a parse tree produced by the `matchLteSelection`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 */
	exitMatchLteSelection?: (ctx: MatchLteSelectionContext) => void;

	/**
	 * Enter a parse tree produced by the `matchMethodCall`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 */
	enterMatchMethodCall?: (ctx: MatchMethodCallContext) => void;
	/**
	 * Exit a parse tree produced by the `matchMethodCall`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 */
	exitMatchMethodCall?: (ctx: MatchMethodCallContext) => void;

	/**
	 * Enter a parse tree produced by the `matchGteSelection`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 */
	enterMatchGteSelection?: (ctx: MatchGteSelectionContext) => void;
	/**
	 * Exit a parse tree produced by the `matchGteSelection`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 */
	exitMatchGteSelection?: (ctx: MatchGteSelectionContext) => void;

	/**
	 * Enter a parse tree produced by the `matchValueSelection`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 */
	enterMatchValueSelection?: (ctx: MatchValueSelectionContext) => void;
	/**
	 * Exit a parse tree produced by the `matchValueSelection`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 */
	exitMatchValueSelection?: (ctx: MatchValueSelectionContext) => void;

	/**
	 * Enter a parse tree produced by the `matchEqualitySelection`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 */
	enterMatchEqualitySelection?: (ctx: MatchEqualitySelectionContext) => void;
	/**
	 * Exit a parse tree produced by the `matchEqualitySelection`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 */
	exitMatchEqualitySelection?: (ctx: MatchEqualitySelectionContext) => void;

	/**
	 * Enter a parse tree produced by the `matchProperty`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 */
	enterMatchProperty?: (ctx: MatchPropertyContext) => void;
	/**
	 * Exit a parse tree produced by the `matchProperty`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 */
	exitMatchProperty?: (ctx: MatchPropertyContext) => void;

	/**
	 * Enter a parse tree produced by the `matchNumber`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 */
	enterMatchNumber?: (ctx: MatchNumberContext) => void;
	/**
	 * Exit a parse tree produced by the `matchNumber`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 */
	exitMatchNumber?: (ctx: MatchNumberContext) => void;

	/**
	 * Enter a parse tree produced by the `PropertyLikeValue`
	 * labeled alternative in `BaneQLParser.rawValue`.
	 * @param ctx the parse tree
	 */
	enterPropertyLikeValue?: (ctx: PropertyLikeValueContext) => void;
	/**
	 * Exit a parse tree produced by the `PropertyLikeValue`
	 * labeled alternative in `BaneQLParser.rawValue`.
	 * @param ctx the parse tree
	 */
	exitPropertyLikeValue?: (ctx: PropertyLikeValueContext) => void;

	/**
	 * Enter a parse tree produced by the `Number`
	 * labeled alternative in `BaneQLParser.rawValue`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by the `Number`
	 * labeled alternative in `BaneQLParser.rawValue`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralValue`
	 * labeled alternative in `BaneQLParser.rawValue`.
	 * @param ctx the parse tree
	 */
	enterLiteralValue?: (ctx: LiteralValueContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralValue`
	 * labeled alternative in `BaneQLParser.rawValue`.
	 * @param ctx the parse tree
	 */
	exitLiteralValue?: (ctx: LiteralValueContext) => void;

	/**
	 * Enter a parse tree produced by the `String`
	 * labeled alternative in `BaneQLParser.rawValue`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by the `String`
	 * labeled alternative in `BaneQLParser.rawValue`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by the `Incoming`
	 * labeled alternative in `BaneQLParser.changeMode`.
	 * @param ctx the parse tree
	 */
	enterIncoming?: (ctx: IncomingContext) => void;
	/**
	 * Exit a parse tree produced by the `Incoming`
	 * labeled alternative in `BaneQLParser.changeMode`.
	 * @param ctx the parse tree
	 */
	exitIncoming?: (ctx: IncomingContext) => void;

	/**
	 * Enter a parse tree produced by the `Outgoing`
	 * labeled alternative in `BaneQLParser.changeMode`.
	 * @param ctx the parse tree
	 */
	enterOutgoing?: (ctx: OutgoingContext) => void;
	/**
	 * Exit a parse tree produced by the `Outgoing`
	 * labeled alternative in `BaneQLParser.changeMode`.
	 * @param ctx the parse tree
	 */
	exitOutgoing?: (ctx: OutgoingContext) => void;

	/**
	 * Enter a parse tree produced by the `ToAsp`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 */
	enterToAsp?: (ctx: ToAspContext) => void;
	/**
	 * Exit a parse tree produced by the `ToAsp`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 */
	exitToAsp?: (ctx: ToAspContext) => void;

	/**
	 * Enter a parse tree produced by the `ZoneFam`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 */
	enterZoneFam?: (ctx: ZoneFamContext) => void;
	/**
	 * Exit a parse tree produced by the `ZoneFam`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 */
	exitZoneFam?: (ctx: ZoneFamContext) => void;

	/**
	 * Enter a parse tree produced by the `Subs`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 */
	enterSubs?: (ctx: SubsContext) => void;
	/**
	 * Exit a parse tree produced by the `Subs`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 */
	exitSubs?: (ctx: SubsContext) => void;

	/**
	 * Enter a parse tree produced by the `Zone`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 */
	enterZone?: (ctx: ZoneContext) => void;
	/**
	 * Exit a parse tree produced by the `Zone`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 */
	exitZone?: (ctx: ZoneContext) => void;

	/**
	 * Enter a parse tree produced by the `Pivot`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 */
	enterPivot?: (ctx: PivotContext) => void;
	/**
	 * Exit a parse tree produced by the `Pivot`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 */
	exitPivot?: (ctx: PivotContext) => void;

	/**
	 * Enter a parse tree produced by the `FromAsp`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 */
	enterFromAsp?: (ctx: FromAspContext) => void;
	/**
	 * Exit a parse tree produced by the `FromAsp`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 */
	exitFromAsp?: (ctx: FromAspContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.union`.
	 * @param ctx the parse tree
	 */
	enterUnion?: (ctx: UnionContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.union`.
	 * @param ctx the parse tree
	 */
	exitUnion?: (ctx: UnionContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.expressionBegins`.
	 * @param ctx the parse tree
	 */
	enterExpressionBegins?: (ctx: ExpressionBeginsContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.expressionBegins`.
	 * @param ctx the parse tree
	 */
	exitExpressionBegins?: (ctx: ExpressionBeginsContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.changeMode`.
	 * @param ctx the parse tree
	 */
	enterChangeMode?: (ctx: ChangeModeContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.changeMode`.
	 * @param ctx the parse tree
	 */
	exitChangeMode?: (ctx: ChangeModeContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.expressionContinuation`.
	 * @param ctx the parse tree
	 */
	enterExpressionContinuation?: (ctx: ExpressionContinuationContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.expressionContinuation`.
	 * @param ctx the parse tree
	 */
	exitExpressionContinuation?: (ctx: ExpressionContinuationContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 */
	enterFilterFunction?: (ctx: FilterFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 */
	exitFilterFunction?: (ctx: FilterFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.selectProperties`.
	 * @param ctx the parse tree
	 */
	enterSelectProperties?: (ctx: SelectPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.selectProperties`.
	 * @param ctx the parse tree
	 */
	exitSelectProperties?: (ctx: SelectPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.inclusive`.
	 * @param ctx the parse tree
	 */
	enterInclusive?: (ctx: InclusiveContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.inclusive`.
	 * @param ctx the parse tree
	 */
	exitInclusive?: (ctx: InclusiveContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.exclusive`.
	 * @param ctx the parse tree
	 */
	enterExclusive?: (ctx: ExclusiveContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.exclusive`.
	 * @param ctx the parse tree
	 */
	exitExclusive?: (ctx: ExclusiveContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 */
	enterMatchers?: (ctx: MatchersContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 */
	exitMatchers?: (ctx: MatchersContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.valueSelection`.
	 * @param ctx the parse tree
	 */
	enterValueSelection?: (ctx: ValueSelectionContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.valueSelection`.
	 * @param ctx the parse tree
	 */
	exitValueSelection?: (ctx: ValueSelectionContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.methodCall`.
	 * @param ctx the parse tree
	 */
	enterMethodCall?: (ctx: MethodCallContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.methodCall`.
	 * @param ctx the parse tree
	 */
	exitMethodCall?: (ctx: MethodCallContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.methodCallArguments`.
	 * @param ctx the parse tree
	 */
	enterMethodCallArguments?: (ctx: MethodCallArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.methodCallArguments`.
	 * @param ctx the parse tree
	 */
	exitMethodCallArguments?: (ctx: MethodCallArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.equalitySelection`.
	 * @param ctx the parse tree
	 */
	enterEqualitySelection?: (ctx: EqualitySelectionContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.equalitySelection`.
	 * @param ctx the parse tree
	 */
	exitEqualitySelection?: (ctx: EqualitySelectionContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.gteSelection`.
	 * @param ctx the parse tree
	 */
	enterGteSelection?: (ctx: GteSelectionContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.gteSelection`.
	 * @param ctx the parse tree
	 */
	exitGteSelection?: (ctx: GteSelectionContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.lteSelection`.
	 * @param ctx the parse tree
	 */
	enterLteSelection?: (ctx: LteSelectionContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.lteSelection`.
	 * @param ctx the parse tree
	 */
	exitLteSelection?: (ctx: LteSelectionContext) => void;

	/**
	 * Enter a parse tree produced by `BaneQLParser.rawValue`.
	 * @param ctx the parse tree
	 */
	enterRawValue?: (ctx: RawValueContext) => void;
	/**
	 * Exit a parse tree produced by `BaneQLParser.rawValue`.
	 * @param ctx the parse tree
	 */
	exitRawValue?: (ctx: RawValueContext) => void;
}

