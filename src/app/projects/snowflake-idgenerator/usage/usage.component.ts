import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

@Component({
    selector: 'app-usage',
    templateUrl: './usage.component.html',
    styles: ``,
    providers: [
        provideTranslocoScope(
          { scope: 'projects/SnowflakeIDGenerator/usage', alias: 'projects.SnowflakeIDGenerator.usage' },
          { scope: 'projects/SnowflakeIDGenerator', alias: 'projects.SnowflakeIDGenerator' }
        )
    ],
    standalone: false
})
export class UsageComponent {

}
