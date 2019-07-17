import {Component, Injectable, OnInit, ViewChild} from "@angular/core";
import {Book} from "./models/book.interface";
import {BooksService} from "./books.service";
import {Observable} from "rxjs";
import {NewBookComponent} from "./new-book/new-book.component";

@Component({
  selector: 'ibs-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {
  books: Observable<Book[]>;
  selectedBook: Book;

  @ViewChild(NewBookComponent, {static: false})
  newBookComponent: NewBookComponent;

  onSelectBook(book: Book){
    this.selectedBook = book;
  }
  constructor(private booksService: BooksService) {

  }

  ngOnInit() {
    this.books = this.booksService.getBooks();
  }

  onAddBook(newBook: Book) {
    this.booksService.store(newBook).subscribe(  book => {
      console.log('Book added', book);
      this.newBookComponent.bookForm.reset();
      this.books = this.booksService.getBooks();
    });
  }

}
