import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

@Component({
  selector: 'app-autofilter',
  templateUrl: './autofilter.component.html',
  styles: ``,
  providers: [
    provideTranslocoScope(
      { scope: 'projects/BigExcelCreator/styling', alias: 'projects.BigExcelCreator.styling' },
      { scope: 'projects/BigExcelCreator', alias: 'projects.BigExcelCreator' }
    )
  ],
})
export class AutofilterComponent {

}
