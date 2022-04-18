import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  genres=['Biography','Thriller','Sci-fi'];
  submitted=false;
  model = new Book(13,'A Beautiful Mind','Biography','');
  constructor() { }
  onSubmit(){
    this.submitted = true;
    alert("form submitted");
    return true;
  }
  ngOnInit() {
  }

}
