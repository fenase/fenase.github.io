import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { CodeExampleComponent } from '../../../shared/code-example/code-example.component';

@Component({
  selector: 'app-sheet-from-object',
  templateUrl: './sheet-from-object.component.html',
  styles: '',
  providers: [
    provideTranslocoScope(
      { scope: 'projects/BigExcelCreator/sheet-from-object', alias: 'projects.BigExcelCreator.sheetFromObject' },
      { scope: 'projects/BigExcelCreator', alias: 'projects.BigExcelCreator' }
    )
  ],
  imports: [TranslocoDirective, CodeExampleComponent, TranslocoPipe]
})
export class SheetFromObjectComponent { }
