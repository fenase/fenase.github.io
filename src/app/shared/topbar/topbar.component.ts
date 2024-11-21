import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  constructor(public router: Router, private readonly activatedRoute: ActivatedRoute) { }

  public menuItems: MenuItem[] =
    [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
        routerLink: '/',
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Big Excel Creator',
        icon: PrimeIcons.BOLT,
        routerLink: '/projects/BigExcelCreator',
        routerLinkActiveOptions: { exact: false },
      },
      {
        label: 'Snowflake Id Generator',
        icon: PrimeIcons.SERVER,
        routerLink: '/projects/SnowflakeIDGenerator',
        routerLinkActiveOptions: { exact: false },
      },
      // {
      //   label: 'aboutMe',
      //   icon: 'pi pi-envelope',
      //   routerLink: '/about',
      //   routerLinkActiveOptions: { exact: false },
      // }
    ];
}
