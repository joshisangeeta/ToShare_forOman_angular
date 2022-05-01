import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  edited :boolean=false;
  editBook:Book = new Book();
  bookId :number;
  //route: ActivatedRoute;
  //editedBook:Book= new Book();
  constructor(private dataService:BookService ,private route:ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(params=>this.bookId=params['id']);
      this.editBook= this.dataService.getBookById(this.bookId);
   
  }

  editPrice(price:number){
       
        this.dataService.updateBook(this.editBook);
         alert("Price edit Successful");
       
         this.edited = true;

  }
}
