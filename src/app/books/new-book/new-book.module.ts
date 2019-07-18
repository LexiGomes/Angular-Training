import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewBookComponent} from "./new-book.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [NewBookComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NewBookComponent]
})
export class NewBookModule {

}
