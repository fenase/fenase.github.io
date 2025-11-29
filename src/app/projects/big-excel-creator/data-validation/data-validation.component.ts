import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { CodeExampleComponent } from '../../../shared/code-example/code-example.component';

@Component({
  selector: 'app-data-validation',
  templateUrl: './data-validation.component.html',
  styles: '',
  providers: [
    provideTranslocoScope(
      { scope: 'projects/BigExcelCreator/data-validation', alias: 'projects.BigExcelCreator.DataValidation' },
      { scope: 'projects/BigExcelCreator', alias: 'projects.BigExcelCreator' }
    )
  ],
  imports: [TranslocoDirective, CodeExampleComponent, TranslocoPipe]
})
export class DataValidationComponent {

}
