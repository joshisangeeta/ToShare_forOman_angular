import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  ownProp:string ="This is child's own prop";
  @Input()
  fromParent:number;
  
  constructor() { }

  ngOnInit() {
  }

}
