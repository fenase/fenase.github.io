import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

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
  standalone: false
})
export class DataValidationComponent {

}
