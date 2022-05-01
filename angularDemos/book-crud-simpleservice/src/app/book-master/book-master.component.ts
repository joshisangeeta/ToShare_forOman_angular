import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-master',
  templateUrl: './book-master.component.html',
  styleUrls: ['./book-master.component.css']
})
export class BookMasterComponent implements OnInit {
  books:Book[];
  constructor(private dataService:BookService) { }

  ngOnInit() {
    
   this.books= this.dataService.getAllBooks();                                          
  }
  
  deleteBook(id:number){
     this.dataService.deleteBook(id);

  }

}
