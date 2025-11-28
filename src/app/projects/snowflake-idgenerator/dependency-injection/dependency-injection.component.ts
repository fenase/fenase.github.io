import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

@Component({
    selector: 'app-dependency-injection',
    templateUrl: './dependency-injection.component.html',
    styles: ``,
    providers: [
        provideTranslocoScope(
          { scope: 'projects/SnowflakeIDGenerator/dependencyInjection', alias: 'projects.SnowflakeIDGenerator.dependencyInjection' },
          { scope: 'projects/SnowflakeIDGenerator', alias: 'projects.SnowflakeIDGenerator' }
        )
    ],
    standalone: false
})
export class DependencyInjectionComponent {

}
