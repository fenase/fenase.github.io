import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { provideTranslocoScope } from '@jsverse/transloco';
import { MenuItem } from 'primeng/api';

@Component({
  templateUrl: './big-excel-creator.component.html',
  styles: '',
  providers: [provideTranslocoScope({ scope: 'projects/BigExcelCreator', alias: 'projects.BigExcelCreator' })]
})
export class BigExcelCreatorComponent {
  private readonly baseRoute: string = "/projects/BigExcelCreator";



  public menuItems: MenuItem[] =
    [
      {
        label: 'projects.BigExcelCreator.Getting started',
        icon: 'pi pi-play-circle',
        items: [
          {
            label: 'projects.BigExcelCreator.The Package',
            icon: 'pi pi-box',
            routerLink: [this.baseRoute, 'thePackage'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.BigExcelCreator.Installation',
            icon: 'pi pi-download',
            routerLink: [this.baseRoute, 'installation'],
          },
          {
            label: 'projects.BigExcelCreator.Basic usage',
            icon: 'pi pi-code',
            routerLink: [this.baseRoute, 'usage'],
            routerLinkActiveOptions: { exact: true }
          }
        ],
      },
      {
        label: 'projects.BigExcelCreator.Data Validation',
        icon: 'pi pi-list-check',
        items: [
          {
            label: 'projects.BigExcelCreator.Data Validation',
            icon: 'pi pi-list-check',
            routerLink: [this.baseRoute, 'dataValidation'],
            routerLinkActiveOptions: { exact: true }
          }
        ]
      },
      {
        label: 'projects.BigExcelCreator.Styling and formatting',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'projects.BigExcelCreator.Column formatting',
            icon: 'pi pi-objects-column',
            routerLink: [this.baseRoute, 'styling', 'columnFormatting'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.BigExcelCreator.Hide Sheet',
            icon: 'pi pi-eye-slash',
            routerLink: [this.baseRoute, 'styling', 'hideSheet'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.BigExcelCreator.Merge Cells',
            icon: 'pi pi-bars',
            routerLink: [this.baseRoute, 'styling', 'mergeCells'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.BigExcelCreator.Styling',
            icon: 'pi pi-palette',
            routerLink: [this.baseRoute, 'styling', 'styling'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.BigExcelCreator.Comments',
            icon: 'pi pi-comment',
            routerLink: [this.baseRoute, 'styling', 'comments'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.BigExcelCreator.Autofilter',
            icon: 'pi pi-filter',
            routerLink: [this.baseRoute, 'styling', 'autofilter'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.BigExcelCreator.Conditional Formatting',
            icon: 'pi pi-sun',
            routerLink: [this.baseRoute, 'styling', 'conditionalFormatting'],
            routerLinkActiveOptions: { exact: true }
          },
        ]
      },
      {
        label: 'projects.BigExcelCreator.Page layout',
        icon: 'pi pi-table',
        items: [
          {
            label: 'projects.BigExcelCreator.Page layout',
            icon: 'pi pi-table',
            routerLink: [this.baseRoute, 'pageLayout'],
            routerLinkActiveOptions: { exact: true }
          },
        ]
      },
    ];

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
  }


  title = 'BigExcelCreator';
}
