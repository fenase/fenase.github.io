import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';

@Component({
    selector: 'app-the-object',
    templateUrl: './the-object.component.html',
    styles: ``,
    providers: [
        provideTranslocoScope({ scope: 'projects/SnowflakeIDGenerator/theObject', alias: 'projects.SnowflakeIDGenerator.theObject' }, { scope: 'projects/SnowflakeIDGenerator', alias: 'projects.SnowflakeIDGenerator' })
    ],
    imports: [TranslocoDirective, TranslocoPipe]
})
export class TheObjectComponent {

}
