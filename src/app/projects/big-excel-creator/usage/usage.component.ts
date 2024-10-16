import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrl: './usage.component.css',
  providers: [
    provideTranslocoScope(
      { scope: 'projects/BigExcelCreator/usage', alias: 'projects.BigExcelCreator.usage' },
      { scope: 'projects/BigExcelCreator', alias: 'projects.BigExcelCreator' }
    )
  ],
})
export class UsageComponent {
}
