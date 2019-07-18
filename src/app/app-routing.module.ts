import {Route, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {NotFoundComponent} from "./not-found/not-found.component";
import {DetailsComponent} from "./books/details/details.component";

const APP_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'books' },
  { path: 'books/:id', component: DetailsComponent },
  {path: 'books', loadChildren: './books/books.module#BooksModule'},
  {path: '**', component: NotFoundComponent}
  ];

export const AppRoutesModule: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
