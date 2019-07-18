import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsComponent} from "./details.component";
import {BooksComponent} from "../books.component";
import {BookModule} from "../book/book.module";

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, BookModule],
  exports: [DetailsComponent]
})
export class DetailsModule { }
