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

  public menuItems: MenuItem[] =
    [
      {
        label: 'projects.BigExcelCreator.The Package',
        icon: 'pi pi-box',
        command: () => {
          this.router.navigate(['.'], { relativeTo: this.activatedRoute });
        }
      },
      {
        label: 'projects.BigExcelCreator.Getting started',
        icon: 'pi pi-play-circle',
        items: [
          {
            label: 'projects.BigExcelCreator.Installation',
            icon: 'pi pi-download',
            command: () => {
              this.router.navigate(['installation'], { relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Basic usage',
            icon: 'pi pi-code',
            command: () => {
              this.router.navigate(['usage'], { relativeTo: this.activatedRoute });
            }
          }
        ]
      },
      {
        label: 'projects.BigExcelCreator.Data Validation',
        icon: 'pi pi-list-check',
        command: () => {
          this.router.navigate(['dataValidation'], { relativeTo: this.activatedRoute });
        }
      },
      {
        label: 'projects.BigExcelCreator.Styling and formatting',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'projects.BigExcelCreator.Column formatting',
            icon: 'pi pi-objects-column',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'columnFormatting', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Hide Sheet',
            icon: 'pi pi-eye-slash',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'hideSheet', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Merge Cells',
            icon: 'pi pi-bars',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'mergeCells', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Styling',
            icon: 'pi pi-palette',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'styling', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Comments',
            icon: 'pi pi-comment',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'comments', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Autofilter',
            icon: 'pi pi-filter',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'autofilter', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Conditional Formatting',
            icon: 'pi pi-sun',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'conditionalFormatting', relativeTo: this.activatedRoute });
            }
          },
        ]
      },
      {
        label: 'projects.BigExcelCreator.Page layout',
        icon: 'pi pi-table',
        command: () => {
          this.router.navigate(['pageLayout'], { relativeTo: this.activatedRoute });
        }
      },
    ];

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
  }


  title = 'BigExcelCreator';
}
