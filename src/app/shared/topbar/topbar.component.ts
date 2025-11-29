import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive, RouterLink } from '@angular/router';
import { MenuItem, PrimeIcons, PrimeTemplate } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { NgIf, NgClass } from '@angular/common';
import { LanguageSelectorComponent } from '../../language-selector/language-selector/language-selector.component';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrl: './topbar.component.css',
    imports: [MenubarModule, PrimeTemplate, RouterLinkActive, RouterLink, NgIf, NgClass, LanguageSelectorComponent, TranslocoPipe]
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
