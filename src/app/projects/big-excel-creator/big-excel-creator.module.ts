import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabViewModule } from 'primeng/tabview';
import { SharedModule } from "../../shared/shared.module";
import { BigExcelCreatorRoutingModule } from './big-excel-creator-routing.module';
import { BigExcelCreatorComponent } from './big-excel-creator.component';
import { DataValidationComponent } from './data-validation/data-validation.component';
import { InstallationComponent } from './installation/installation.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { StartComponent } from './start/start.component';
import { StylingComponent } from './styling/styling.component';
import { UsageComponent } from './usage/usage.component';
import { HighlightModule } from 'ngx-highlightjs';



@NgModule({
  declarations: [
    BigExcelCreatorComponent,
    StartComponent,
    UsageComponent,
    DataValidationComponent,
    StylingComponent,
    PageLayoutComponent,
    InstallationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslocoModule,
    BigExcelCreatorRoutingModule,
    PanelMenuModule,
    ButtonModule,
    ListboxModule,
    PanelModule,
    TabViewModule,
    SharedModule,
    HighlightModule,
]
})
export class BigExcelCreatorModule { }
