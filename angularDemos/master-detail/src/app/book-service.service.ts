import { Injectable } from '@angular/core';
import { BOOKS } from './bookstore';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }

  getBooks(){
      return BOOKS;
  }

  getBookById(id:number){
    for(var idx in BOOKS){
      if(BOOKS[idx].bookId==id)
       break;
    }
    return (BOOKS[idx])
  }

}
