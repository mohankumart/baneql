import { Component, ViewChild, Injectable } from '@angular/core';
import { ANTLRInputStream, CommonTokenStream, RuleContext } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree';
import { BaneQLParser, QueryContext } from './src/antlr/BaneQLParser';
import { BaneQLLexer } from './src/antlr/BaneQLLexer';
import { BaneQLBaseListener } from './src/antlr/BaneQLBaseListener';

import { AutoSuggester } from './src/suggest/autosuggest';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, of, Subject} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Injectable()
export class WikipediaService {

  querySize: number;
  rulefield: string;
  tokenStream: CommonTokenStream;
  lexer: BaneQLLexer;
  parser: BaneQLParser;
  tree: QueryContext;
  inputStream: ANTLRInputStream;
  query: BaneQLBaseListener;

  constructor() {}

  search(term: string) {
    this.inputStream = new ANTLRInputStream(term);
    this.lexer = new BaneQLLexer(this.inputStream);
    this.tokenStream = new CommonTokenStream(this.lexer);
    this.parser = new BaneQLParser(this.tokenStream);
    this.tree = this.parser.query();

    this.query = new BaneQLBaseListener();

    ParseTreeWalker.DEFAULT.walk<any>(this.query, this.tree);
    debugger;
    const autosuggester =  new (AutoSuggester as any)(BaneQLLexer,BaneQLParser);
    let suggestions = autosuggester.autosuggest(term);
    return of(suggestions);

  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [WikipediaService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BaneQL Query Builder';
  model: any;
  searching = false;
  searchFailed = false;

  @ViewChild('instance') instance: NgbTypeahead;

  constructor(private _service: WikipediaService) {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this._service.search(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )





  

  public parse() {
    // this.inputStream = new ANTLRInputStream(this.rulefield);
    // this.lexer = new BaneQLLexer(this.inputStream);
    // this.tokenStream = new CommonTokenStream(this.lexer);
    // this.parser = new BaneQLParser(this.tokenStream);
    // this.tree = this.parser.query();

    // this.query = new BaneQLBaseListener();

    // ParseTreeWalker.DEFAULT.walk<any>(this.query, this.tree);
    // debugger;
    // const autosuggester =  new (AutoSuggester as any)(BaneQLLexer,BaneQLParser);
    // let suggestions = autosuggester.autosuggest(this.rulefield);
    // console.log(suggestions);
    // debugger;
    // // this.rulefield += this.ec.getCount();
    // //this.querySize = this.query.getSize();
    // // console.log(this.tree);
    // //console.log(this.query.getSize());
  }

}
