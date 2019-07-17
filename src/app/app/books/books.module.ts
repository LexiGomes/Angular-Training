import {NgModule} from "@angular/core";
import {BooksComponent} from "./books.component";
import {CommonModule} from "@angular/common";
import {ShelfModule} from "./shelf/shelf.module";
import {BookModule} from "./book/book.module";
import {HttpClientModule} from "@angular/common/http";
import { NewBookComponent } from './new-book/new-book.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [BooksComponent, NewBookComponent],
  imports: [CommonModule, ShelfModule, BookModule, HttpClientModule, ReactiveFormsModule],
  exports: [BooksComponent]
})
export class BooksModule {

}
