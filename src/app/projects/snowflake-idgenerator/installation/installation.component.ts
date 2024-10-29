import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';
import { InstallationInstruction, InstallationVersion } from '../../../shared/install-instructions/install-instructions.component';
import { Versions } from '../globals';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styles: '',
  providers: [
    provideTranslocoScope(
      { scope: 'projects/SnowflakeIDGenerator/installation', alias: 'projects.SnowflakeIDGenerator.installation' },
      { scope: 'projects/SnowflakeIDGenerator', alias: 'projects.SnowflakeIDGenerator' }
    )
  ],
})
export class InstallationComponent {
  public instructions: InstallationVersion[] = [
    {
      name: "single",
      instructions: [
        new InstallationInstruction(".NET CLI", `dotnet add package SnowflakeIDGenerator --version ${Versions.lastVersion}`, "powershell"),
        new InstallationInstruction("Package Manager", `NuGet\\Install-Package SnowflakeIDGenerator -Version ${Versions.lastVersion}`, "powershell"),
        new InstallationInstruction("PackageReference", `<PackageReference Include="SnowflakeIDGenerator" Version="${Versions.lastVersion}" />`, "xml"),
      ]
    }

  ]
}
