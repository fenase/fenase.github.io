import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { InstallationInstruction, InstallationVersion, InstallInstructionsComponent } from '../../../shared/install-instructions/install-instructions.component';
import { Versions } from '../globals';

@Component({
    selector: 'app-installation',
    templateUrl: './installation.component.html',
    styles: '',
    providers: [
        provideTranslocoScope({ scope: 'projects/SnowflakeIDGenerator/installation', alias: 'projects.SnowflakeIDGenerator.installation' }, { scope: 'projects/SnowflakeIDGenerator', alias: 'projects.SnowflakeIDGenerator' })
    ],
    imports: [TranslocoDirective, InstallInstructionsComponent, TranslocoPipe]
})
export class InstallationComponent {
  public installerIndexSyncingIndex: number = 0;

  public instructions: InstallationVersion[] = [
    {
      name: "single",
      instructions: [
        new InstallationInstruction(".NET CLI", `dotnet add package SnowflakeIDGenerator --version ${Versions.lastVersion}`, "powershell"),
        new InstallationInstruction("Package Manager", `NuGet\\Install-Package SnowflakeIDGenerator -Version ${Versions.lastVersion}`, "powershell"),
        new InstallationInstruction("PackageReference", `<PackageReference Include="SnowflakeIDGenerator" Version="${Versions.lastVersion}" />`, "xml"),
      ]
    }
  ];

  public instructionsDI: InstallationVersion[] = [
    {
      name: "single",
      instructions: [
        new InstallationInstruction(".NET CLI", `dotnet add package SnowflakeIDGenerator.DependencyInjection --version ${Versions.lastVersion}`, "powershell"),
        new InstallationInstruction("Package Manager", `NuGet\\Install-Package SnowflakeIDGenerator.DependencyInjection -Version ${Versions.lastVersion}`, "powershell"),
        new InstallationInstruction("PackageReference", `<PackageReference Include="SnowflakeIDGenerator.DependencyInjection" Version="${Versions.lastVersion}" />`, "xml"),
      ]
    }
  ];
}
