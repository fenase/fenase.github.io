import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { CodeExampleComponent } from '../../../../shared/code-example/code-example.component';
import { PanelModule } from 'primeng/panel';

@Component({
    selector: 'app-styling',
    templateUrl: './styling.component.html',
    styles: ``,
    providers: [
        provideTranslocoScope({ scope: 'projects/BigExcelCreator/styling', alias: 'projects.BigExcelCreator.styling' }, { scope: 'projects/BigExcelCreator', alias: 'projects.BigExcelCreator' })
    ],
    imports: [TranslocoDirective, CodeExampleComponent, PanelModule, TranslocoPipe]
})
export class StylingComponent {

}
