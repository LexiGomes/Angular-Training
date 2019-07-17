import {Component, Injectable, Input} from '@angular/core';
import {Book} from "../models/book.interface";

@Component({
  selector: 'ibs-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
  @Input() book: Book;
}
