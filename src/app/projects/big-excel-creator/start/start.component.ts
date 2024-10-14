import { Component, Input } from '@angular/core';
import { provideTranslocoScope } from '@ngneat/transloco';
import { Constants } from '../../../../globals';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.css',
  providers: [provideTranslocoScope({ scope: 'projects/BigExcelCreator/start', alias: 'projects.BigExcelCreator.start' })]
})
export class StartComponent {

  public readonly last2versionLink: string = Constants.last2versionLink;
  public readonly last3versionLink: string = Constants.last3versionLink;
}
