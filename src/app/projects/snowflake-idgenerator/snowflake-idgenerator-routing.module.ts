import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstallationComponent } from './installation/installation.component';
import { StartComponent } from './start/start.component';
import { UsageComponent } from './usage/usage.component';
import { SnowflakeIDGeneratorComponent } from './snowflake-idgenerator.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnowflakeIdGeneratorRoutingModule { }
