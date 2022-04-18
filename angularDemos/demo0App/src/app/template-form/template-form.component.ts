import { Component, OnInit } from '@angular/core';
import { Book } from 'src/book';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
   submitted:boolean=false;
  model= new Book(13,'','Fenin',750) ;
  /*{ bookId:13,
    bookTitle:'Mathematical Cirecles',
    bookAuthor:'Fenin',
    bookPrice:750}*/
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    alert("Valid form getting submitted")
    return this.submitted;
  }



}
