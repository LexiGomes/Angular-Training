import {Injectable} from "@angular/core";
import {NEVER, Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {Book} from "./models/book.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class BooksService {
  constructor(private http: HttpClient){

  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3004/overview')
      .pipe(
        catchError((error: any) => NEVER)
      );
  }
}
