import {Component} from "@angular/core";
import {Book} from "./models/book.interface";

@Component({
  selector: 'ibs-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books : Book[] = [
    {
    "id": 100001,
    "title": "Application Design",
    "author": "O'Rly?",
    "genre": "programming",
    "img": "assets/app-head.jpg",
    "price": 14.95,
    "reserved": false
    },
    {
      "id": 100002,
      "title": "Remote Programming",
      "author": "O'Rly?",
      "genre": "misc",
      "img": "assets/coding.jpg",
      "price": 25.95,
      "reserved": true
    },
    {
      "id": 100003,
      "title": "Deadline programming",
      "author": "O'Rly?",
      "genre": "motivation",
      "img": "assets/coffee-code.jpg",
      "price": 14.95,
      "reserved": false
    }
  ];
  selectedBook: Book;

  onSelectBook(book:Book){
    this.selectedBook = book;
  }
}
