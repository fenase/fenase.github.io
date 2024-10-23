import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

@Component({
  selector: 'app-parse',
  templateUrl: './parse.component.html',
  styles:'',
  providers: [
    provideTranslocoScope(
      { scope: 'projects/SnowflakeIDGenerator/parse', alias: 'projects.SnowflakeIDGenerator.parse' },
      { scope: 'projects/SnowflakeIDGenerator', alias: 'projects.SnowflakeIDGenerator' }
    )
  ],
})
export class ParseComponent {

}
