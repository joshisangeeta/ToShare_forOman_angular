import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book []
  constructor(private dataService:BookService) { }

  ngOnInit() {
    this.books =this.dataService.getAllBooks();
    //this.dataService.getBooks().subscribe(books=>this.books=books)
   // this.dataService.getLatestBooks().subscribe(books=>this.books=books);
  }


}
