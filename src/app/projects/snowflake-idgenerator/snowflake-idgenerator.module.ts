import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { HighlightModule } from 'ngx-highlightjs';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { SkeletonModule } from 'primeng/skeleton';
import { SharedModule } from "../../shared/shared.module";
import { ChangeEpochComponent } from './change-epoch/change-epoch.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { GenerateEpochComponent } from './generate-epoch/generate-epoch.component';
import { GenerateStaticComponent } from './generate-static/generate-static.component';
import { GenerateComponent } from './generate/generate.component';
import { InstallationComponent } from './installation/installation.component';
import { ParseComponent } from './parse/parse.component';
import { SnowflakeIdGeneratorRoutingModule } from './snowflake-idgenerator-routing.module';
import { SnowflakeIDGeneratorComponent } from './snowflake-idgenerator.component';
import { StartComponent } from './start/start.component';
import { TheObjectComponent } from './the-object/the-object.component';
import { UsageComponent } from './usage/usage.component';



@NgModule({
  declarations: [
    SnowflakeIDGeneratorComponent,
    StartComponent,
    InstallationComponent,
    UsageComponent,
    GenerateComponent,
    GenerateStaticComponent,
    GenerateEpochComponent,
    ParseComponent,
    TheObjectComponent,
    ChangeEpochComponent,
    DependencyInjectionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SnowflakeIdGeneratorRoutingModule,
    TranslocoModule,
    ButtonModule,
    PanelModule,
    SharedModule,
    HighlightModule,
    SkeletonModule,
  ]
})
export class SnowflakeIDGeneratorModule { }
