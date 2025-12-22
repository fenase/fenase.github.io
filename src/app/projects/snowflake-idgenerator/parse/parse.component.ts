import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { CodeExampleComponent } from '../../../shared/code-example/code-example.component';

@Component({
  selector: 'app-parse',
  templateUrl: './parse.component.html',
  styles: '',
  providers: [
    provideTranslocoScope(
      { scope: 'projects/SnowflakeIDGenerator/parse', alias: 'projects.SnowflakeIDGenerator.parse' },
      { scope: 'projects/SnowflakeIDGenerator', alias: 'projects.SnowflakeIDGenerator' }
    )
  ],
  imports: [TranslocoDirective, CodeExampleComponent, TranslocoPipe]
})
export class ParseComponent {

}
