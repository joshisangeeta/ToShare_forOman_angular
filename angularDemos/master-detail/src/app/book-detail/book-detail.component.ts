import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
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
