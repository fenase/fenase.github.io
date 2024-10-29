import { Clipboard } from '@angular/cdk/clipboard';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-install-instructions',
  templateUrl: './install-instructions.component.html',
  styleUrl: './install-instructions.component.css'
})
export class InstallInstructionsComponent implements OnInit {
  constructor(private readonly clipboard: Clipboard) { }


  @Input({ required: true })
  public instructions: InstallationVersion[] = [];

  public versionIndex: number = 1;
  public installerFlavorIndex: number = 2;
  public copying: boolean = false;

  ngOnInit(): void {
    let settingsString: string | null = localStorage.getItem(this.storageKey);
    if (settingsString) {
      let settings: InstallInstructionsSettings = JSON.parse(settingsString);
      if (settings) {
        this.versionIndex = settings.versionIndex;
        this.installerFlavorIndex = settings.installerFlavorIndex;
      }
    }
  }

  public copy(): void {
    this.copying = true;
    const pending = this.clipboard.beginCopy(this.instructions[this.versionIndex].instructions[this.installerFlavorIndex].text);
    let remainingAttempts: number = 3;
    const attempt = () => {
      const result = pending.copy();
      if (!result && --remainingAttempts > 0) {
        setTimeout(attempt, 100);
      } else {
        // Remember to destroy when you're done!
        pending.destroy();
        this.copying = false;
      }
    };
    attempt();
  }

  public onTabsChange() {
    let settings: InstallInstructionsSettings = {
      versionIndex: this.versionIndex,
      installerFlavorIndex: this.installerFlavorIndex,
    };

    localStorage.setItem(this.storageKey, JSON.stringify(settings));
  }

  private readonly storageKey: string = 'InstallInstructionsSettings';

}

export interface InstallationVersion {
  name: string;
  instructions: InstallationInstruction[];
}

export class InstallationInstruction {
  public readonly class: string;

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
}

interface InstallInstructionsSettings {
  versionIndex: number;
  installerFlavorIndex: number;
}

