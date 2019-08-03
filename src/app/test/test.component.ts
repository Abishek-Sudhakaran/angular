import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>code evolution</h2>
  <h2>{{text}}</h2>
  <h1 *ngIf ="display;else elseB"> inline if</h1>
  <ng-template #elseB>
  <h2>inline else</h2>
  </ng-template>
  <div *ngIf ="display;then ifBlock;else elseBlock"></div>
  <ng-template #ifBlock>
  <h2>ifBlock</h2>
  </ng-template>
  <ng-template #elseBlock>
  <h2>elseBlock</h2>
  </ng-template>
  <app-test1></app-test1>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public display = true;
  public color = "red";
  public text: string = 'hello';
  constructor() { }

  ngOnInit() {
  }

}
