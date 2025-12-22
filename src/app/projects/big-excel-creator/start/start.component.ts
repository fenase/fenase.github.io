import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective } from '@jsverse/transloco';
import { Constants } from '../globals';
import { PanelModule } from 'primeng/panel';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styles: '',
    providers: [provideTranslocoScope({ scope: 'projects/BigExcelCreator/start', alias: 'projects.BigExcelCreator.start' })],
    imports: [TranslocoDirective, PanelModule]
})
export class StartComponent {
  public readonly last2versionLink: string = Constants.last2versionLink;
  public readonly last3versionLink: string = Constants.last3versionLink;
}
