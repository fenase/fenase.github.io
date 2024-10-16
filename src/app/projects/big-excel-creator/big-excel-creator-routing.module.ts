import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BigExcelCreatorComponent } from './big-excel-creator.component';
import { UsageComponent } from './usage/usage.component';
import { StartComponent } from './start/start.component';
import { InstallationComponent } from './installation/installation.component';
import { DataValidationComponent } from './data-validation/data-validation.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { StylingComponent } from './styling/styling.component';

const routes: Routes = [
  {
    path: '',
    component: BigExcelCreatorComponent,
    children: [
      {
        path: '',
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
        component: StylingComponent,
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
