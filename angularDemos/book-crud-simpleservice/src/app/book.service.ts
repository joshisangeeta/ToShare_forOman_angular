import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKLIST } from './book-store';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books:Book[]=BOOKLIST;
  constructor() { }

  addBook(book:Book){
    this.books.push(book);
  }
  getAllBooks(){
   return this.books;
  }

  getBookById(id:number):Book{
   let bookArr=      this.books.filter((book)=>book.id==id);
    return bookArr[0];
  }
  updateBook(book1:Book){
    let editPrice =this.books.find((book)=>book.id==book1.id)
   //editPrice.price = price;
   // let n =this.books.indexOf(editPrice);
  //  this.books.splice(n,1);
  //  this.books.push(editPrice);
    alert('book edited')
       
  }
  deleteBook(id:number){
   let toDelete = this.books.find((book)=>(book.id==id))
   let n =this.books.indexOf(toDelete);
   this.books.splice(n,1);
  
  }

}
