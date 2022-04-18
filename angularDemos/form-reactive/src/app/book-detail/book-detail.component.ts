import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  bookForm=new FormGroup({title:new FormControl('',[Validators.required,Validators.minLength(5)])})

}
