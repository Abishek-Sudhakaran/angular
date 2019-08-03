import { Component, OnInit } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-test1',
  template: `
  <div [ngSwitch] = "color">
    <div *ngSwitchCase = "'red'" >you picked red color</div>
    <div *ngSwitchDefault>pick again</div>
  </div>

  `,
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  public color = "rd";
  public testComponent = new TestComponent();
  constructor() {
  }

  ngOnInit() {
    this.testComponent.text = "hello abishek";
  }

}
