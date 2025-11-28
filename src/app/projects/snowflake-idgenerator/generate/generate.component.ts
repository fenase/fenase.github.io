import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

@Component({
    selector: 'app-generate',
    templateUrl: './generate.component.html',
    styles: '',
    providers: [
        provideTranslocoScope(
          { scope: 'projects/SnowflakeIDGenerator/generate', alias: 'projects.SnowflakeIDGenerator.generate' },
          { scope: 'projects/SnowflakeIDGenerator', alias: 'projects.SnowflakeIDGenerator' }
        )
    ],
    standalone: false
})
export class GenerateComponent {

}
