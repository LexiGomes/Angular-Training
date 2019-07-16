import {Component, OnInit} from "@angular/core";
import {Book} from "./models/book.interface";
import {BooksService} from "./books.service";
import {Observable} from "rxjs";

@Component({
  selector: 'ibs-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Observable<Book[]>;

  selectedBook: Book;

  onSelectBook(book: Book){
    this.selectedBook = book;
  }
  constructor(private booksService: BooksService) {

  }

  ngOnInit() {
    this.books = this.booksService.getBooks();
  }
}
