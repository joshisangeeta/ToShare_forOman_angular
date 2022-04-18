import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  counter:number=0;
  
  @Output()
  newEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

   increment(){
     this.counter++;
     this.newEvent.emit(this.counter);
   }


}
