import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
