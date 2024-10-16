import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'BigExcelCreator',
    loadChildren: () => import('./big-excel-creator/big-excel-creator.module').then(m => m.BigExcelCreatorModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule { }
