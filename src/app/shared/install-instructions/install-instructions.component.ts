import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-install-instructions',
  templateUrl: './install-instructions.component.html',
  styleUrl: './install-instructions.component.css'
})
export class InstallInstructionsComponent {

  @Input({ required: true })
  public instructions: InstallationVersion[] = [];

  public versionIndex:number=0;
  public installerFlavor:number=0;

}

export interface InstallationVersion {
  name: string;
  instructions: InstallationInstruction[];
}

export class InstallationInstruction {
  constructor(
    public readonly name: '.NET CLI' | 'Package Manager' | 'PackageReference',
    public readonly text: string,
    public readonly lang: string) {
    switch (this.name) {
      case '.NET CLI':
        this.class = 'netCli';
        break;
      case 'Package Manager':
        this.class = 'packageManager';
        break;
      case 'PackageReference':
        this.class = 'PackageReference';
        break;
    }
  }

  public readonly class: string;

}
