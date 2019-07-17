import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelfComponent } from './shelf.component';

@NgModule({
  declarations: [ShelfComponent],
  imports: [CommonModule],
  exports: [ShelfComponent]
})
export class ShelfModule {

}
