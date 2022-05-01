import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  idToDelete:number
  constructor(private dataService:BookService) { }

  ngOnInit() {
  }
  deleteBook(){
    alert("in delete")
   this.dataService.deleteBook(this.idToDelete);
 }

}
