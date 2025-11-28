import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

@Component({
    selector: 'app-usage',
    templateUrl: './usage.component.html',
    styles: '',
    providers: [
        provideTranslocoScope(
          { scope: 'projects/BigExcelCreator/usage', alias: 'projects.BigExcelCreator.usage' },
          { scope: 'projects/BigExcelCreator', alias: 'projects.BigExcelCreator' }
        )
    ],
    standalone: false
})
export class UsageComponent {
}
