import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {AppRoutesModule} from "./app-routing.module";
import { NotFoundComponent } from './not-found/not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {BooksRoutingModule} from "./books/books-routing.module";
import {DetailsModule} from "./books/details/details.module";
import {BooksModule} from "./books/books.module";

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutesModule, HttpClientModule, DetailsModule],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
