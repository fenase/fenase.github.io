import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';

@Component({
    selector: 'app-page-layout',
    templateUrl: './page-layout.component.html',
    styles: '',
    providers: [
        provideTranslocoScope({ scope: 'projects/BigExcelCreator/page-layout', alias: 'projects.BigExcelCreator.pageLayout' }, { scope: 'projects/BigExcelCreator', alias: 'projects.BigExcelCreator' })
    ],
    imports: [TranslocoDirective, TranslocoPipe]
})
export class PageLayoutComponent {

}
