import {NgModule} from "@angular/core";
import {BooksComponent} from "./books.component";
import {CommonModule} from "@angular/common";
import {ShelfModule} from "./shelf/shelf.module";
import {BookModule} from "./book/book.module";

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule, ShelfModule, BookModule],
  exports: [BooksComponent]
})
export class BooksModule {

}
