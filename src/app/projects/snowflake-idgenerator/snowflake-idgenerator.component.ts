import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { provideTranslocoScope } from '@jsverse/transloco';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

@Component({
    selector: 'app-snowflake-idgenerator',
    templateUrl: './snowflake-idgenerator.component.html',
    styles: '',
    providers: [
        provideTranslocoScope({ scope: 'projects/SnowflakeIDGenerator', alias: 'projects.SnowflakeIDGenerator' })
    ],
    imports: [SidebarComponent, RouterOutlet]
})
export class SnowflakeIDGeneratorComponent {
  private readonly baseRoute: string = "/projects/SnowflakeIDGenerator";

  public menuItems: MenuItem[] =
    [
      {
        label: 'projects.SnowflakeIDGenerator.Getting started',
        items: [
          {
            label: 'projects.SnowflakeIDGenerator.The Package',
            icon: PrimeIcons.BOX,
            routerLink: [this.baseRoute, 'thePackage'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.SnowflakeIDGenerator.Installation',
            icon: PrimeIcons.DOWNLOAD,
            routerLink: [this.baseRoute, 'installation'],
          },
          {
            label: 'projects.SnowflakeIDGenerator.Basic usage',
            icon: PrimeIcons.CODE,
            routerLink: [this.baseRoute, 'usage'],
            routerLinkActiveOptions: { exact: true }
          }
        ],
      },
      {
        label: 'projects.SnowflakeIDGenerator.Generate',
        items: [
          {
            label: 'projects.SnowflakeIDGenerator.Using the SnowflakeIDGenerator class',
            icon: PrimeIcons.SPARKLES,
            routerLink: [this.baseRoute, 'generate'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.SnowflakeIDGenerator.Using the SnowflakeIDGenerator class as static',
            icon: PrimeIcons.SPARKLES,
            routerLink: [this.baseRoute, 'generateStatic'],
          },
          {
            label: 'projects.SnowflakeIDGenerator.Using a non-standard date as epoch',
            icon: PrimeIcons.CALENDAR,
            routerLink: [this.baseRoute, 'generateEpoch'],
            routerLinkActiveOptions: { exact: true }
          }
        ],
      },
      {
        label: 'projects.SnowflakeIDGenerator.The Snowflake object',
        items: [
          {
            label: 'projects.SnowflakeIDGenerator.Parsing an Id',
            icon: PrimeIcons.MAP,
            routerLink: [this.baseRoute, 'parse'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.SnowflakeIDGenerator.The Snowflake object',
            icon: PrimeIcons.BUILDING_COLUMNS,
            routerLink: [this.baseRoute, 'theObject'],
          },
          {
            label: 'projects.SnowflakeIDGenerator.Changing Epoch on generated codes',
            icon: PrimeIcons.CALENDAR_PLUS,
            routerLink: [this.baseRoute, 'changeEpoch'],
            routerLinkActiveOptions: { exact: true }
          }
        ],
      },
      {
        label: 'Advanced',
        items: [
          {
            label: 'projects.SnowflakeIDGenerator.dependency injection',
            icon: PrimeIcons.BOLT,
            routerLink: [this.baseRoute, 'dependencyInjection'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'API',
            icon: PrimeIcons.SITEMAP,
            url: 'https://fenase.github.io/SnowflakeIDGenerator/api/SnowflakeID.html',
          },
        ]
      },
    ];

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
  }
}
