import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { BigExcelCreatorRoutingModule } from './big-excel-creator-routing.module';
import { UsageComponent } from './usage/usage.component';
import { DataValidationComponent } from './data-validation/data-validation.component';
import { StylingComponent } from './styling/styling.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BigExcelCreatorComponent } from './big-excel-creator.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    BigExcelCreatorComponent,
    StartComponent,
    UsageComponent,
    DataValidationComponent,
    StylingComponent,
    PageLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BigExcelCreatorRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class BigExcelCreatorModule { }
