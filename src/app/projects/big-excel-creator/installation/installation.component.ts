import { Component } from '@angular/core';
import { Constants, Versions } from '../../../../globals';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['/node_modules/highlight.js/styles/vs.css'],
})
export class InstallationComponent {

  public Constants = Constants;
  public Versions = Versions;

  public activeVersionIndex: number = 1;
  public activeFlavorIndex: number = 2;

  public instructions: InstallationVersion[] = [
    {
      name: "v2",
      instructions: [
        {
          name: ".NET CLI",
          text: `dotnet add package BigExcelCreator --version ${Versions.last2version}`,
          lang: "powershell",
        },
        {
          name: "Package Manager",
          text: `NuGet\\Install-Package BigExcelCreator -Version ${Versions.last2version}`,
          lang: "powershell",
        },
        {
          name: "PackageReference",
          text: `<PackageReference Include="BigExcelCreator" Version="${Versions.last2version}" />`,
          lang: "xml",
        },
        {
          name: "Paket CLI",
          text: `paket add BigExcelCreator --version ${Versions.last2version}`,
          lang: "powershell",
        },
        {
          name: "Script & Interactive",
          text: `#r "nuget: BigExcelCreator, ${Versions.last2version}"`,
          lang: "powershell",
        },
        {
          name: "Cake",
          text: `// Install BigExcelCreator as a Cake Addin
#addin nuget:?package=BigExcelCreator&version=${Versions.last2version}

// Install BigExcelCreator as a Cake Tool
#tool nuget:?package=BigExcelCreator&version=${Versions.last2version}`,
          lang: "powershell",
        },
      ]
    },
    {
      name: "v3",
      instructions: [
        {
          name: ".NET CLI",
          text: `dotnet add package BigExcelCreator --version ${Versions.last3version}`,
          lang: "powershell",
        },
        {
          name: "Package Manager",
          text: `NuGet\\Install-Package BigExcelCreator -Version ${Versions.last3version}`,
          lang: "powershell",
        },
        {
          name: "PackageReference",
          text: `<PackageReference Include="BigExcelCreator" Version="${Versions.last3version}" />`,
          lang: "xml",
        },
        {
          name: "Paket CLI",
          text: `paket add BigExcelCreator --version ${Versions.last3version}`,
          lang: "powershell",
        },
        {
          name: "Script & Interactive",
          text: `#r "nuget: BigExcelCreator, ${Versions.last3version}"`,
          lang: "powershell",
        },
        {
          name: "Cake",
          text: `// Install BigExcelCreator as a Cake Addin
#addin nuget:?package=BigExcelCreator&version=${Versions.last3version}

// Install BigExcelCreator as a Cake Tool
#tool nuget:?package=BigExcelCreator&version=${Versions.last3version}`,
          lang: "powershell",
        },
      ]
    },
  ]



}

interface InstallationVersion {
  name: string;
  instructions: InstallationInstruction[];
}

interface InstallationInstruction {
  name: string;
  text: string;
  lang: string;
}

