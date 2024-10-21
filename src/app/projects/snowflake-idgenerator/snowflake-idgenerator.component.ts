import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { provideTranslocoScope } from '@jsverse/transloco';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-snowflake-idgenerator',
  templateUrl: './snowflake-idgenerator.component.html',
  styles: '',
  providers: [provideTranslocoScope({ scope: 'projects/SnowflakeIDGenerator', alias: 'projects.SnowflakeIDGenerator' })]
})
export class SnowflakeIDGeneratorComponent {
  private readonly baseRoute: string = "/projects/SnowflakeIDGenerator";



  public menuItems: MenuItem[] =
    [
      {
        label: 'projects.SnowflakeIDGenerator.Getting started',
        icon: 'pi pi-play-circle',
        items: [
          {
            label: 'projects.SnowflakeIDGenerator.The Package',
            icon: 'pi pi-box',
            routerLink: [this.baseRoute, 'thePackage'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.SnowflakeIDGenerator.Installation',
            icon: 'pi pi-download',
            routerLink: [this.baseRoute, 'installation'],
          },
          {
            label: 'projects.SnowflakeIDGenerator.Basic usage',
            icon: 'pi pi-code',
            routerLink: [this.baseRoute, 'usage'],
            routerLinkActiveOptions: { exact: true }
          }
        ],
      },
      {
        label: 'projects.SnowflakeIDGenerator.Generate',
        icon: 'pi pi-play-circle',
        items: [
          {
            label: 'projects.SnowflakeIDGenerator.Using the SnowflakeIDGenerator class',
            icon: 'pi pi-box',
            routerLink: [this.baseRoute, 'thePackage'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.SnowflakeIDGenerator.Using the SnowflakeIDGenerator class as static',
            icon: 'pi pi-download',
            routerLink: [this.baseRoute, 'installation'],
          },
          {
            label: 'projects.SnowflakeIDGenerator.Using a non-standard date as epoch',
            icon: 'pi pi-code',
            routerLink: [this.baseRoute, 'usage'],
            routerLinkActiveOptions: { exact: true }
          }
        ],
      },
      {
        label: 'projects.SnowflakeIDGenerator.The Snowflake object',
        icon: 'pi pi-play-circle',
        items: [
          {
            label: 'projects.SnowflakeIDGenerator.Parsing an Id',
            icon: 'pi pi-box',
            routerLink: [this.baseRoute, 'thePackage'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.SnowflakeIDGenerator.The Snowflake object',
            icon: 'pi pi-download',
            routerLink: [this.baseRoute, 'installation'],
          },
          {
            label: 'projects.SnowflakeIDGenerator.Changing Epoch on generated codes',
            icon: 'pi pi-code',
            routerLink: [this.baseRoute, 'usage'],
            routerLinkActiveOptions: { exact: true }
          }
        ],
      },
    ];

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
  }
}
