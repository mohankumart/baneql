// Generated from ./src/antlr/BaneQL.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `BaneQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface BaneQLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `Email`
	 * labeled alternative in `BaneQLParser.valueSelection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmail?: (ctx: EmailContext) => Result;

	/**
	 * Visit a parse tree produced by the `DomainOrIP`
	 * labeled alternative in `BaneQLParser.valueSelection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDomainOrIP?: (ctx: DomainOrIPContext) => Result;

	/**
	 * Visit a parse tree produced by the `Literal`
	 * labeled alternative in `BaneQLParser.valueSelection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `matchLteSelection`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchLteSelection?: (ctx: MatchLteSelectionContext) => Result;

	/**
	 * Visit a parse tree produced by the `matchMethodCall`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchMethodCall?: (ctx: MatchMethodCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `matchGteSelection`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchGteSelection?: (ctx: MatchGteSelectionContext) => Result;

	/**
	 * Visit a parse tree produced by the `matchValueSelection`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchValueSelection?: (ctx: MatchValueSelectionContext) => Result;

	/**
	 * Visit a parse tree produced by the `matchEqualitySelection`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchEqualitySelection?: (ctx: MatchEqualitySelectionContext) => Result;

	/**
	 * Visit a parse tree produced by the `matchProperty`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchProperty?: (ctx: MatchPropertyContext) => Result;

	/**
	 * Visit a parse tree produced by the `matchNumber`
	 * labeled alternative in `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchNumber?: (ctx: MatchNumberContext) => Result;

	/**
	 * Visit a parse tree produced by the `PropertyLikeValue`
	 * labeled alternative in `BaneQLParser.rawValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyLikeValue?: (ctx: PropertyLikeValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `Number`
	 * labeled alternative in `BaneQLParser.rawValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralValue`
	 * labeled alternative in `BaneQLParser.rawValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralValue?: (ctx: LiteralValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `String`
	 * labeled alternative in `BaneQLParser.rawValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by the `Incoming`
	 * labeled alternative in `BaneQLParser.changeMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncoming?: (ctx: IncomingContext) => Result;

	/**
	 * Visit a parse tree produced by the `Outgoing`
	 * labeled alternative in `BaneQLParser.changeMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutgoing?: (ctx: OutgoingContext) => Result;

	/**
	 * Visit a parse tree produced by the `ToAsp`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToAsp?: (ctx: ToAspContext) => Result;

	/**
	 * Visit a parse tree produced by the `ZoneFam`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZoneFam?: (ctx: ZoneFamContext) => Result;

	/**
	 * Visit a parse tree produced by the `Subs`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubs?: (ctx: SubsContext) => Result;

	/**
	 * Visit a parse tree produced by the `Zone`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZone?: (ctx: ZoneContext) => Result;

	/**
	 * Visit a parse tree produced by the `Pivot`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPivot?: (ctx: PivotContext) => Result;

	/**
	 * Visit a parse tree produced by the `FromAsp`
	 * labeled alternative in `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromAsp?: (ctx: FromAspContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.union`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnion?: (ctx: UnionContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.expressionBegins`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionBegins?: (ctx: ExpressionBeginsContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.changeMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChangeMode?: (ctx: ChangeModeContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.expressionContinuation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionContinuation?: (ctx: ExpressionContinuationContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.filterFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilterFunction?: (ctx: FilterFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.selectProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectProperties?: (ctx: SelectPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.inclusive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclusive?: (ctx: InclusiveContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.exclusive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusive?: (ctx: ExclusiveContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.matchers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchers?: (ctx: MatchersContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.valueSelection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueSelection?: (ctx: ValueSelectionContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.methodCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodCall?: (ctx: MethodCallContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.methodCallArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodCallArguments?: (ctx: MethodCallArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.equalitySelection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualitySelection?: (ctx: EqualitySelectionContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.gteSelection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGteSelection?: (ctx: GteSelectionContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.lteSelection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLteSelection?: (ctx: LteSelectionContext) => Result;

	/**
	 * Visit a parse tree produced by `BaneQLParser.rawValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRawValue?: (ctx: RawValueContext) => Result;
}

