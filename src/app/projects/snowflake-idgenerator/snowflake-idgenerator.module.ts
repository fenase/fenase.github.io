import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { HighlightModule } from 'ngx-highlightjs';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { InstallationComponent } from './installation/installation.component';
import { snowflakeIdGeneratorRoutingModule } from './snowflake-idgenerator-routing.module';
import { SnowflakeIDGeneratorComponent } from './snowflake-idgenerator.component';
import { StartComponent } from './start/start.component';
import { UsageComponent } from './usage/usage.component';
import { SharedModule } from "../../shared/shared.module";



@NgModule({
  declarations: [
    SnowflakeIDGeneratorComponent,
    StartComponent,
    InstallationComponent,
    UsageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    snowflakeIdGeneratorRoutingModule,
    TranslocoModule,
    ButtonModule,
    PanelModule,
    SharedModule,
    HighlightModule,
]
})
export class SnowflakeIDGeneratorModule { }
