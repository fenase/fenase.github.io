import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

@Component({
  selector: 'app-generate-static',
  templateUrl: './generate-static.component.html',
  styles: ``,
  providers: [
    provideTranslocoScope(
      { scope: 'projects/SnowflakeIDGenerator/generate', alias: 'projects.SnowflakeIDGenerator.generate' },
      { scope: 'projects/SnowflakeIDGenerator', alias: 'projects.SnowflakeIDGenerator' }
    )
  ],
})
export class GenerateStaticComponent {

}
