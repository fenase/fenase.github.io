import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { PanelModule } from 'primeng/panel';
import { CodeExampleComponent } from '../../../../shared/code-example/code-example.component';

@Component({
  selector: 'app-conditional-formatting',
  templateUrl: './conditional-formatting.component.html',
  styles: ``,
  providers: [
    provideTranslocoScope(
      { scope: 'projects/BigExcelCreator/styling', alias: 'projects.BigExcelCreator.styling' },
      { scope: 'projects/BigExcelCreator', alias: 'projects.BigExcelCreator' }
    )
  ],
  imports: [TranslocoDirective, PanelModule, CodeExampleComponent, TranslocoPipe]
})
export class ConditionalFormattingComponent {

}
