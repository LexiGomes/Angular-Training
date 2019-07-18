import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../models/book.interface";

@Component({
  selector: 'ibs-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit{
  bookForm: FormGroup;
  bookGenres: string[] =  [
    'Drama',
    'Thriller',
    'Crime',
    'Fantasy',
    'Non-fiction',
    'Fiction'
  ];

  @Output()
  bookFormValue = new EventEmitter<Book>(); // eventBook: EventEmitter<Book> = new EventEmitter<Book>

  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      genre: new FormControl(null, [Validators.required]),
      reserved: new FormControl(''),
      price: new FormControl('')
    });
  }
  get title() {
    return this.bookForm.get('title');
  }
  get author() {
    return this.bookForm.get('author');
  }
  get genre() {
    return this.bookForm.get('genre');
  }
  get reserved() {
    return this.bookForm.get('reserved');
  }

  onSubmit(){
    console.log(this.bookForm.value);
    if(this.bookForm.valid) {
      this.bookFormValue.emit(this.bookForm.value);
    }
  }

  resetFrom(){
    this.bookForm.reset();
  }

}
