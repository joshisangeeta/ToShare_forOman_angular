import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-book-master',
  templateUrl: './book-master.component.html',
  styleUrls: ['./book-master.component.css']
})
export class BookMasterComponent implements OnInit {
  bookList:Book[];
  selectedBook:Book;
  isRegistered:boolean=true;
 constructor(private dataService:BookServiceService) {
   this.bookList=dataService.getBooks();
  }

 ngOnInit() {
 }
 handleClick(book){
  
   this.selectedBook = book;

 }

}
