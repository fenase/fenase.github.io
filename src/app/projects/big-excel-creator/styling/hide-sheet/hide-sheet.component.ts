import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

@Component({
  selector: 'app-hide-sheet',
  templateUrl: './hide-sheet.component.html',
  styles: ``,
  providers: [
    provideTranslocoScope(
      { scope: 'projects/BigExcelCreator/styling', alias: 'projects.BigExcelCreator.styling' },
      { scope: 'projects/BigExcelCreator', alias: 'projects.BigExcelCreator' }
    )
  ],
})
export class HideSheetComponent {

}
