import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BigExcelCreatorComponent } from './big-excel-creator.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: '',
    component: BigExcelCreatorComponent
  },
  {
    path:'**',
    redirectTo:'',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BigExcelCreatorRoutingModule { }
