import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutMeRoutingModule } from './about-routing.module';



@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
  ]
})
export class AboutModule { }
