import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  templateUrl: './big-excel-creator.component.html',
  styleUrl: './big-excel-creator.component.css',
})
export class BigExcelCreatorComponent {

  public menuItems: MenuItem[] =
    [
      {
        label: 'The Package',
        icon: 'pi pi-crown',
        command: () => {
          this.router.navigate(['.'], { relativeTo: this.activatedRoute });
        }
      },
      {
        label: 'Getting started',
        items: [
          {
            label: 'Installation',
            icon: 'pi pi-plus',
            routerLink: '.',
          },
          {
            label: 'Basic usage',
            icon: 'pi pi-search',
            routerLink: 'installation',
          }
        ]
      },
      {
        label: 'Data Validation',
        icon: 'pi pi-crown',
        command: () => {
          this.router.navigate(['dataValidation'], { relativeTo: this.activatedRoute });
        }
      },
      {
        label: 'Styling and formatting',
        items: [
          {
            label: 'Column formatting',
            icon: 'pi pi-plus',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'columnFormatting', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'Hide Sheet',
            icon: 'pi pi-search',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'hideSheet', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'Merge Cells',
            icon: 'pi pi-search',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'mergeCells', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'Styling',
            icon: 'pi pi-search',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'styling', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'Comments',
            icon: 'pi pi-search',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'comments', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'Autofilter',
            icon: 'pi pi-search',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'autofilter', relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'Conditional Formatting',
            icon: 'pi pi-search',
            command: () => {
              this.router.navigate(['styling'], { fragment: 'conditionalFormatting', relativeTo: this.activatedRoute });
            }
          },
        ]
      },
      {
        label: 'Page layout',
        icon: 'pi pi-crown',
        command: () => {
          this.router.navigate(['pageLayout'], { relativeTo: this.activatedRoute });
        }
      },
    ];

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
  }


  title = 'fenase.github.io';
}
