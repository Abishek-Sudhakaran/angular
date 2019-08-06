import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import {Router} from "@angular/router";


@Component({
  selector: 'app-list',
  template: `
  <h1> your id is {{Id}} </h1>
  <button (click) = "goTolist()">Pinalae po</button>
  `,
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public Id;

  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    // this.id = parseInt(this.route.snapshot.paramMap.get('id'))
     //in above method we can't capture params within same component
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.Id = parseInt(params.get('id'))
    })
  }

  goTolist(){
    let selectedId = this.Id
    this.router.navigate(['/list',{id:selectedId}])
  }
}
