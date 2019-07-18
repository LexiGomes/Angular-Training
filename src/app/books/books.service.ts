import {Injectable} from "@angular/core";
import {NEVER, Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {Book} from "./models/book.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class BooksService {
  constructor(private http: HttpClient) {

  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3004/overview').pipe(catchError((error: any) => NEVER));
  }

  store(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:3004/store', book);
  }

  getBookByID(id: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:3004/book/${id}`);
  }
}
