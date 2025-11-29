import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { CodeExampleComponent } from '../../../shared/code-example/code-example.component';

@Component({
    selector: 'app-generate-epoch',
    templateUrl: './generate-epoch.component.html',
    styles: ``,
    providers: [
        provideTranslocoScope({ scope: 'projects/SnowflakeIDGenerator/generate', alias: 'projects.SnowflakeIDGenerator.generate' }, { scope: 'projects/SnowflakeIDGenerator', alias: 'projects.SnowflakeIDGenerator' })
    ],
    imports: [TranslocoDirective, CodeExampleComponent, TranslocoPipe]
})
export class GenerateEpochComponent {

}
