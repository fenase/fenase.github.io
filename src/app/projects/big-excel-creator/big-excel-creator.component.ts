import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { take } from "rxjs";

@Component({
  templateUrl: './big-excel-creator.component.html',
  styleUrl: './big-excel-creator.component.css',
})
export class BigExcelCreatorComponent {
  constructor(public Router: Router, public ActivatedRoute:ActivatedRoute) {
    ActivatedRoute.url
      .subscribe(x =>{
        console.log(x);
      });
    ActivatedRoute.fragment
      .subscribe(x =>{
        console.log(x);
      });
    ActivatedRoute.data
      .subscribe(x =>{
        console.log(x);
      });
      console.log(ActivatedRoute.toString());
      console.log(Router.url);
  }


  title = 'fenase.github.io';
}
