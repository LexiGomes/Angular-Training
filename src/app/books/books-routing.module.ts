import {ModuleWithProviders} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {BooksComponent} from "./books.component";
import {NewBookComponent} from "./new-book/new-book.component";

const BOOKS_ROUTES: Route[] = [
  { path: '', component: BooksComponent },
  { path: 'new', component: NewBookComponent }
  ];

export const BooksRoutingModule: ModuleWithProviders = RouterModule.forChild(BOOKS_ROUTES);
