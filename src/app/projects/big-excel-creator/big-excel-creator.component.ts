import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { provideTranslocoScope } from '@jsverse/transloco';
import { MenuItem } from 'primeng/api';

@Component({
  templateUrl: './big-excel-creator.component.html',
  styleUrl: './big-excel-creator.component.css',
  providers: [provideTranslocoScope({ scope: 'projects/BigExcelCreator', alias: 'projects.BigExcelCreator' })]
})
export class BigExcelCreatorComponent {

  public menuItems: MenuItem[] =
    [
      {
        label: 'projects.BigExcelCreator.The Package',
        icon: 'pi pi-crown',
        command: () => {
          this.router.navigate(['.'], { relativeTo: this.activatedRoute });
        }
      },
      {
        label: 'projects.BigExcelCreator.Getting started',
        items: [
          {
            label: 'projects.BigExcelCreator.Installation',
            icon: 'pi pi-plus',
            command: () => {
              this.router.navigate(['installation'], { relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Basic usage',
            icon: 'pi pi-search',
            command: () => {
              this.router.navigate(['usage'], { relativeTo: this.activatedRoute });
            }
          }
        ]
      },
      {
        label: 'projects.BigExcelCreator.Data Validation',
        icon: 'pi pi-crown',
        command: () => {
          this.router.navigate(['dataValidation'], { relativeTo: this.activatedRoute });
        }
      },
      {
        label: 'projects.BigExcelCreator.Styling and formatting',
        items: [
          {
            label: 'projects.BigExcelCreator.Column formatting',
            icon: 'pi pi-plus',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'columnFormatting', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Hide Sheet',
            icon: 'pi pi-search',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'hideSheet', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Merge Cells',
            icon: 'pi pi-search',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'mergeCells', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Styling',
            icon: 'pi pi-search',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'styling', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Comments',
            icon: 'pi pi-search',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'comments', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Autofilter',
            icon: 'pi pi-search',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'autofilter', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Conditional Formatting',
            icon: 'pi pi-search',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'conditionalFormatting', relativeTo: this.activatedRoute });
            }
          },
        ]
      },
      {
        label: 'projects.BigExcelCreator.Page layout',
        icon: 'pi pi-crown',
        command: () => {
          this.router.navigate(['pageLayout'], { relativeTo: this.activatedRoute });
        }
      },
    ];

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
  }


  title = 'BigExcelCreator';
}
