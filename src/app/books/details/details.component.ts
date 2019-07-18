import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../models/book.interface";
import {BooksService} from "../books.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'ibs-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  book: Observable<Book>;
  constructor(private bookService: BooksService,
              private ActivateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.book = this.ActivateRoute.paramMap.pipe(
      switchMap(params => this.bookService.getBookByID(params.get('id')))
    );
  }

}
