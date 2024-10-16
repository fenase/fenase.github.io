import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ProjectsRoutingModule } from './projects-routing.module';



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
