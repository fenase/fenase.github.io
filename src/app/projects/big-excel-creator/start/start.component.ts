import { Component } from '@angular/core';
import { provideTranslocoScope } from '@ngneat/transloco';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.css',
  providers: [provideTranslocoScope({ scope: 'projects/BigExcelCreator/start', alias: 'projects.BigExcelCreator.start' })]
})
export class StartComponent {
}
