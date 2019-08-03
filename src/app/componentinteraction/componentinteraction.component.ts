import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componentinteraction',
  template: `
  <h1>Component interaction</h1>
  <h2>hello {{name}}</h2>
  <button (click) = "fireEvent()" >send event</button>
  `,
  styleUrls: ['./componentinteraction.component.css']
})
export class ComponentinteractionComponent implements OnInit {


  @Input('parentData') public name;
  @Output() public childEvent =new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('hey man')
  }
}
