import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { RouterModule } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProjectsRoutingModule,
    PanelMenuModule,
  ]
})
export class ProjectsModule { }
