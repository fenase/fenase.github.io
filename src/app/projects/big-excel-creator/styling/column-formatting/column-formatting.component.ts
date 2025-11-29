import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { CodeExampleComponent } from '../../../../shared/code-example/code-example.component';

@Component({
    selector: 'app-column-formatting',
    templateUrl: './column-formatting.component.html',
    styles: ``,
    providers: [
        provideTranslocoScope({ scope: 'projects/BigExcelCreator/styling', alias: 'projects.BigExcelCreator.styling' }, { scope: 'projects/BigExcelCreator', alias: 'projects.BigExcelCreator' })
    ],
    imports: [TranslocoDirective, CodeExampleComponent, TranslocoPipe]
})
export class ColumnFormattingComponent {

}
