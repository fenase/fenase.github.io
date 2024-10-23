import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateEpochComponent } from './generate-epoch/generate-epoch.component';
import { GenerateStaticComponent } from './generate-static/generate-static.component';
import { GenerateComponent } from './generate/generate.component';
import { InstallationComponent } from './installation/installation.component';
import { ParseComponent } from './parse/parse.component';
import { SnowflakeIDGeneratorComponent } from './snowflake-idgenerator.component';
import { StartComponent } from './start/start.component';
import { UsageComponent } from './usage/usage.component';
import { TheObjectComponent } from './the-object/the-object.component';

const routes: Routes = [
  {
    path: '',
    component: SnowflakeIDGeneratorComponent,
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnowflakeIdGeneratorRoutingModule { }
