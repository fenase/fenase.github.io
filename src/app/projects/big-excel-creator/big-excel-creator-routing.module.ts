import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BigExcelCreatorComponent } from './big-excel-creator.component';
import { UsageComponent } from './usage/usage.component';
import { StartComponent } from './start/start.component';

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
        path: 'usage',
        component: UsageComponent,
      },
      {
        path: 'start',
        component: StartComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BigExcelCreatorRoutingModule { }
