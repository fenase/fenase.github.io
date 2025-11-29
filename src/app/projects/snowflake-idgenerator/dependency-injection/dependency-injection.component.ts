import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { CodeExampleComponent } from '../../../shared/code-example/code-example.component';

@Component({
    selector: 'app-dependency-injection',
    templateUrl: './dependency-injection.component.html',
    styles: ``,
    providers: [
        provideTranslocoScope({ scope: 'projects/SnowflakeIDGenerator/dependencyInjection', alias: 'projects.SnowflakeIDGenerator.dependencyInjection' }, { scope: 'projects/SnowflakeIDGenerator', alias: 'projects.SnowflakeIDGenerator' })
    ],
    imports: [TranslocoDirective, CodeExampleComponent, TranslocoPipe]
})
export class DependencyInjectionComponent {

}
