import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { PanelModule } from 'primeng/panel';

@Component({
    selector: 'app-usage',
    templateUrl: './usage.component.html',
    styles: ``,
    providers: [
        provideTranslocoScope({ scope: 'projects/SnowflakeIDGenerator/usage', alias: 'projects.SnowflakeIDGenerator.usage' }, { scope: 'projects/SnowflakeIDGenerator', alias: 'projects.SnowflakeIDGenerator' })
    ],
    imports: [TranslocoDirective, PanelModule, TranslocoPipe]
})
export class UsageComponent {

}
