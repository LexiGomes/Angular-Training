import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../models/book.interface";

@Component({
  selector: 'ibs-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})

export class ShelfComponent {
  @Input()
  books: Book[];

  @Output()
  selectBook: EventEmitter<Book> = new EventEmitter();

  onSelect(book: Book) {
    this.selectBook.emit(book);
  }
}
