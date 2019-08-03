import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  template: `
    <h1>ngfor</h1>
    <div *ngFor = "let color of colors;index as i;first as f;last as l;odd as o;even as e">
        <h2 *ngIf = eng >{{i}} {{f}} {{l}} {{color}} {{o}} {{e}}  </h2>
    </div>
  `,
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  public colors= ["red","blue","green","yellow"]

  constructor() { }

  ngOnInit() {
  }

}
