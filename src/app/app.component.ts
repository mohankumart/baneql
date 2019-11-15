import { Component } from '@angular/core';
import { ANTLRInputStream, CommonTokenStream, RuleContext } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree';
import { BaneQLParser, QueryContext } from './src/antlr/BaneQLParser';
import { BaneQLLexer } from './src/antlr/BaneQLLexer';
import { BaneQLBaseListener } from './src/antlr/BaneQLBaseListener';

import { AutoSuggester } from './src/suggest/autosuggest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BaneQL Query Builder';

  querySize: number;
  rulefield: string;
  tokenStream: CommonTokenStream;
  lexer: BaneQLLexer;
  parser: BaneQLParser;
  tree: QueryContext;
  inputStream: ANTLRInputStream;
  query: BaneQLBaseListener;

  constructor() {
    this.rulefield = 'A';
  }

  public parse() {
    this.inputStream = new ANTLRInputStream(this.rulefield);
    this.lexer = new BaneQLLexer(this.inputStream);
    this.tokenStream = new CommonTokenStream(this.lexer);
    this.parser = new BaneQLParser(this.tokenStream);
    this.tree = this.parser.query();

    this.query = new BaneQLBaseListener();

    ParseTreeWalker.DEFAULT.walk<any>(this.query, this.tree);
    debugger;
    const autosuggester =  new (AutoSuggester as any)(BaneQLLexer,BaneQLParser);
    let suggestions = autosuggester.autosuggest("sample(a,c=t) ");
    debugger;
    // this.rulefield += this.ec.getCount();
    //this.querySize = this.query.getSize();
    // console.log(this.tree);
    //console.log(this.query.getSize());
  }
}
