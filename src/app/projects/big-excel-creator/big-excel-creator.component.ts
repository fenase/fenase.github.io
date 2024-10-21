import { Component } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
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
          this.navigate('.',  { relativeTo: this.activatedRoute });
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
              this.navigate('installation',  { relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Basic usage',
            icon: 'pi pi-code',
            command: () => {
              this.navigate('usage',  { relativeTo: this.activatedRoute });
            }
          }
        ]
      },
      {
        label: 'projects.BigExcelCreator.Data Validation',
        icon: 'pi pi-list-check',
        command: () => {
          this.navigate('dataValidation',  { relativeTo: this.activatedRoute });
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
              this.navigate("styling/columnFormatting",{ relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Hide Sheet',
            icon: 'pi pi-eye-slash',
            command: () => {
              this.navigate("styling/hideSheet", { relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Merge Cells',
            icon: 'pi pi-bars',
            command: () => {
              this.navigate("styling/mergeCells", { relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Styling',
            icon: 'pi pi-palette',
            command: () => {
              this.navigate("styling/styling", { relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Comments',
            icon: 'pi pi-comment',
            command: () => {
              this.navigate("styling/comments", { relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Autofilter',
            icon: 'pi pi-filter',
            command: () => {
              this.navigate("styling/autofilter", { relativeTo: this.activatedRoute });
            }
          },
          {
            label: 'projects.BigExcelCreator.Conditional Formatting',
            icon: 'pi pi-sun',
            command: () => {
              this.navigate("styling/conditionalFormatting", { relativeTo: this.activatedRoute });
            }
          },
        ]
      },
      {
        label: 'projects.BigExcelCreator.Page layout',
        icon: 'pi pi-table',
        command: () => {
          this.navigate('pageLayout',  { relativeTo: this.activatedRoute });
        }
      },
    ];

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
  }


  private navigate(path: string,  extras?: NavigationExtras): Promise<boolean> {
    return this.router.navigate([path], extras);
  }

  public activeRoute: string = "";

  title = 'BigExcelCreator';
}
