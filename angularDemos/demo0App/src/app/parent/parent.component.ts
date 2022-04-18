import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
   title:string='Parent Component';
   parentProp:number=13;
  constructor() { }

  ngOnInit() {
  }

}
