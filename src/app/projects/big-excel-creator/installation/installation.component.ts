import { Component } from '@angular/core';
import { InstallationInstruction, InstallationVersion } from '../../../shared/install-instructions/install-instructions.component';
import { Versions } from '../globals';
import { provideTranslocoScope } from '@jsverse/transloco';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['/node_modules/highlight.js/styles/vs.css'],
  providers: [
    provideTranslocoScope(
      { scope: 'projects/BigExcelCreator/installation', alias: 'projects.BigExcelCreator.installation' },
      { scope: 'projects/BigExcelCreator', alias: 'projects.BigExcelCreator' }
    )
  ],
})
export class InstallationComponent {

  public instructions: InstallationVersion[] = [
    {
      name: "v2",
      instructions: [
        new InstallationInstruction(".NET CLI", `dotnet add package BigExcelCreator --version ${Versions.last2version}`, "powershell"),
        new InstallationInstruction("Package Manager", `NuGet\\Install-Package BigExcelCreator -Version ${Versions.last2version}`, "powershell"),
        new InstallationInstruction("PackageReference", `<PackageReference Include="BigExcelCreator" Version="${Versions.last2version}" />`, "xml"),
      ]
    },
    {
      name: "v3",
      instructions: [
        new InstallationInstruction(".NET CLI", `dotnet add package BigExcelCreator --version ${Versions.last3version}`, "powershell"),
        new InstallationInstruction("Package Manager", `NuGet\\Install-Package BigExcelCreator -Version ${Versions.last3version}`, "powershell"),
        new InstallationInstruction("PackageReference", `<PackageReference Include="BigExcelCreator" Version="${Versions.last3version}" />`, "xml"),
      ]
    },
  ]



}


