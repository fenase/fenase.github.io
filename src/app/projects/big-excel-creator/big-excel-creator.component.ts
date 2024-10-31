import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { provideTranslocoScope } from '@jsverse/transloco';
import { MenuItem, PrimeIcons } from 'primeng/api';

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
        items: [
          {
            label: 'projects.BigExcelCreator.The Package',
            icon: PrimeIcons.BOX,
            routerLink: [this.baseRoute, 'thePackage'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.BigExcelCreator.Installation',
            icon: PrimeIcons.DOWNLOAD,
            routerLink: [this.baseRoute, 'installation'],
          },
          {
            label: 'projects.BigExcelCreator.Basic usage',
            icon: PrimeIcons.CODE,
            routerLink: [this.baseRoute, 'usage'],
            routerLinkActiveOptions: { exact: true }
          }
        ],
      },
      {
        label: 'projects.BigExcelCreator.Data Validation',
        items: [
          {
            label: 'projects.BigExcelCreator.Data Validation',
            icon: PrimeIcons.LIST_CHECK,
            routerLink: [this.baseRoute, 'dataValidation'],
            routerLinkActiveOptions: { exact: true }
          }
        ]
      },
      {
        label: 'projects.BigExcelCreator.Styling and formatting',
        items: [
          {
            label: 'projects.BigExcelCreator.Column formatting',
            icon: PrimeIcons.OBJECTS_COLUMN,
            routerLink: [this.baseRoute, 'styling', 'columnFormatting'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.BigExcelCreator.Hide Sheet',
            icon: PrimeIcons.EYE_SLASH,
            routerLink: [this.baseRoute, 'styling', 'hideSheet'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.BigExcelCreator.Merge Cells',
            icon: PrimeIcons.BARS,
            routerLink: [this.baseRoute, 'styling', 'mergeCells'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.BigExcelCreator.Styling',
            icon: PrimeIcons.PALETTE,
            routerLink: [this.baseRoute, 'styling', 'styling'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.BigExcelCreator.Comments',
            icon: PrimeIcons.COMMENT,
            routerLink: [this.baseRoute, 'styling', 'comments'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.BigExcelCreator.Autofilter',
            icon: PrimeIcons.FILTER,
            routerLink: [this.baseRoute, 'styling', 'autofilter'],
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'projects.BigExcelCreator.Conditional Formatting',
            icon: PrimeIcons.SUN,
            routerLink: [this.baseRoute, 'styling', 'conditionalFormatting'],
            routerLinkActiveOptions: { exact: true }
          },
        ]
      },
      {
        label: 'projects.BigExcelCreator.Page layout',
        items: [
          {
            label: 'projects.BigExcelCreator.Page layout',
            icon: PrimeIcons.TABLE,
            routerLink: [this.baseRoute, 'pageLayout'],
            routerLinkActiveOptions: { exact: true }
          },
        ]
      },
      {
        label: 'Advanced',
        items: [
          {
            label: 'API',
            icon: PrimeIcons.SITEMAP,
            url: 'https://fenase.github.io/BigExcelCreator/api/BigExcelCreator.html',
          },
        ]
      },
    ];

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
  }


  title = 'BigExcelCreator';
}
