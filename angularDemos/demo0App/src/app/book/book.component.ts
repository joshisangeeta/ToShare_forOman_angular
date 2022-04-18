import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/book';

const book:Book={
  bookId:103,
  bookTitle:'Accidental Primeminister',
  bookAuthor:'Sanjay Baru',
  bookPrice: 1300
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  // book1:Book=book;
   @Input()
   book1:Book;
   @Input()
   isRegisteredFromParent:boolean;
  constructor() { 
     
  }

  ngOnInit() {
  }

}
