import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
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
        routerLink: '.',
      },
      {
        label: 'Usage',
        icon: 'pi pi-file',
        routerLink: 'usage',
      },
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus'
          },
          {
            label: 'Search',
            icon: 'pi pi-search'
          }
        ]
      },
    ]
  constructor(public Router: Router, public ActivatedRoute: ActivatedRoute) {
  }


  title = 'fenase.github.io';
}
