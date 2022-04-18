import { Component, OnInit } from '@angular/core';
import { Book } from 'src/book';
const BOOKS:Book[]=[
  {
    bookId:103,
    bookTitle:'Accidental Primeminister',
    bookAuthor:'Sanjay Baru',
    bookPrice: 1300
  },
  {
    bookId:104,
    bookTitle:'Not Without My Daughter',
    bookAuthor:'Betty Mehmoody',
    bookPrice: 600
  },
  {
    bookId:105,
    bookTitle:'Crooked House',
    bookAuthor:'Agatha K',
    bookPrice: 1200
  }

];
@Component({
  selector: 'app-book-master',
  templateUrl: './book-master.component.html',
  styleUrls: ['./book-master.component.css']
})
export class BookMasterComponent implements OnInit {
   bookList:Book[]=BOOKS;
   selectedBook:Book;
   isRegistered:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  handleClick(book){
   
    this.selectedBook = book;
 
  }
   

}
