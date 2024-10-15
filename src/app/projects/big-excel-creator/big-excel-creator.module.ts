import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TranslocoRootModule } from '../../transloco-root.module';
import { BigExcelCreatorRoutingModule } from './big-excel-creator-routing.module';
import { BigExcelCreatorComponent } from './big-excel-creator.component';
import { DataValidationComponent } from './data-validation/data-validation.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { StartComponent } from './start/start.component';
import { StylingComponent } from './styling/styling.component';
import { UsageComponent } from './usage/usage.component';
import { Fieldset, FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { SharedModule } from "../../shared/shared.module";
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { InstallationComponent } from './installation/installation.component';



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
    TranslocoRootModule,
    BigExcelCreatorRoutingModule,
    PanelMenuModule,
    ButtonModule,
    ListboxModule,
    PanelModule,
    SharedModule
]
})
export class BigExcelCreatorModule { }
