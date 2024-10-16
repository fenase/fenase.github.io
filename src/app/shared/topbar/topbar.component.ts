import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styles: '',
})
export class TopbarComponent {
  constructor(public router: Router, private readonly activatedRoute: ActivatedRoute) { }

  public menuItems: MenuItem[] =
    [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '.',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        routerLink: '/projects',
        items: [
          {
            label: 'Big Excel Creator',
            icon: 'pi pi-bolt',
            routerLink: '/projects/BigExcelCreator',
          },
          {
            label: 'Snowflake Id Generator',
            icon: 'pi pi-server',
            routerLink: '/projects/404',
          },
        ]
      },
      {
        label: 'aboutMe',
        icon: 'pi pi-envelope',
        routerLink: '/about',
      }
    ];
}
