import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BigExcelCreatorComponent } from './big-excel-creator.component';
import { DataValidationComponent } from './data-validation/data-validation.component';
import { InstallationComponent } from './installation/installation.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { StartComponent } from './start/start.component';
import { AutofilterComponent } from './styling/autofilter/autofilter.component';
import { ColumnFormattingComponent } from './styling/column-formatting/column-formatting.component';
import { CommentsComponent } from './styling/comments/comments.component';
import { ConditionalFormattingComponent } from './styling/conditional-formatting/conditional-formatting.component';
import { HideSheetComponent } from './styling/hide-sheet/hide-sheet.component';
import { MergeCellsComponent } from './styling/merge-cells/merge-cells.component';
import { StylingComponent } from './styling/styling.component';
import { StylingComponent as StylingDetailsComponent } from './styling/styling/styling.component';
import { UsageComponent } from './usage/usage.component';

const routes: Routes = [
  {
    path: '',
    component: BigExcelCreatorComponent,
    children: [
      {
        path: '',
        redirectTo:'thePackage',
        pathMatch: 'full',
      },
      {
        path: 'thePackage',
        component: StartComponent,
      },
      {
        path: 'installation',
        component: InstallationComponent,
      },
      {
        path: 'usage',
        component: UsageComponent,
      },
      {
        path: 'dataValidation',
        component: DataValidationComponent,
      },
      {
        path: 'styling',
        children: [
          {
            path: '',
            component: StylingComponent,
            pathMatch: 'full',
          },
          {
            path: 'columnFormatting',
            component: ColumnFormattingComponent,
            pathMatch: 'full',
          },
          {
            path: 'hideSheet',
            component: HideSheetComponent,
            pathMatch: 'full',
          },
          {
            path: 'mergeCells',
            component: MergeCellsComponent,
            pathMatch: 'full',
          },
          {
            path: 'styling',
            component: StylingDetailsComponent,
            pathMatch: 'full',
          },
          {
            path: 'comments',
            component: CommentsComponent,
            pathMatch: 'full',
          },
          {
            path: 'autofilter',
            component: AutofilterComponent,
            pathMatch: 'full',
          },
          {
            path: 'conditionalFormatting',
            component: ConditionalFormattingComponent,
            pathMatch: 'full',
          },
        ]
      },
      {
        path: 'pageLayout',
        component: PageLayoutComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BigExcelCreatorRoutingModule { }
