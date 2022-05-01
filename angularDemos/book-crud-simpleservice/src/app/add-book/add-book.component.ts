import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

   newBook : Book = new Book();
   addedBook:Book = new Book();
   isAdd = false;
  constructor(private dataService:BookService) { }

  ngOnInit() {
       
  }

  addBook(){
    
   let bookReturned = this.dataService.addBook(this.newBook);
     if(bookReturned != null)
     alert("Book added successfully!!!")
     this.isAdd=true;


  
  }


}
