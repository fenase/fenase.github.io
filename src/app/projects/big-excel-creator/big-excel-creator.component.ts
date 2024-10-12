import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { take } from "rxjs";
import { MenuItem } from 'primeng/api';

@Component({
  templateUrl: './big-excel-creator.component.html',
  styleUrl: './big-excel-creator.component.css',
})
export class BigExcelCreatorComponent {
  public menuItems: MenuItem[] =
    [
      {
        label: 'Start',
        icon: 'pi pi-file',
        routerLink:'.',
      },
      {
        label: 'Usage',
        icon: 'pi pi-file',
        routerLink:'usage',
      },
    ]
  constructor(public Router: Router, public ActivatedRoute: ActivatedRoute) {
  }


  title = 'fenase.github.io';
}
