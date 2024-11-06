import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeEpochComponent } from './change-epoch/change-epoch.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { GenerateEpochComponent } from './generate-epoch/generate-epoch.component';
import { GenerateStaticComponent } from './generate-static/generate-static.component';
import { GenerateComponent } from './generate/generate.component';
import { InstallationComponent } from './installation/installation.component';
import { ParseComponent } from './parse/parse.component';
import { SnowflakeIDGeneratorComponent } from './snowflake-idgenerator.component';
import { StartComponent } from './start/start.component';
import { TheObjectComponent } from './the-object/the-object.component';
import { UsageComponent } from './usage/usage.component';

const routes: Routes = [
  {
    path: '',
    component: SnowflakeIDGeneratorComponent,
    title: 'Snowflake Id Generator',
    children: [
      {
        path: '',
        redirectTo: 'thePackage',
        pathMatch: 'full',
      },
      {
        path: 'thePackage',
        component: StartComponent,
      },
      {
        path: 'installation',
        component: InstallationComponent,
      },
      {
        path: 'usage',
        component: UsageComponent,
      },
      {
        path: 'generate',
        component: GenerateComponent,
      },
      {
        path: 'generateStatic',
        component: GenerateStaticComponent,
      },
      {
        path: 'generateEpoch',
        component: GenerateEpochComponent,
      },
      {
        path: 'parse',
        component: ParseComponent,
      },
      {
        path: 'theObject',
        component: TheObjectComponent,
      },
      {
        path: 'changeEpoch',
        component: ChangeEpochComponent,
      },
      {
        path: 'dependencyInjection',
        component: DependencyInjectionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnowflakeIdGeneratorRoutingModule { }
