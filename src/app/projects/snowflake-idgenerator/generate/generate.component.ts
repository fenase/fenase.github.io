import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { CodeExampleComponent } from '../../../shared/code-example/code-example.component';
import { PanelModule } from 'primeng/panel';

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
  imports: [TranslocoDirective, CodeExampleComponent, PanelModule, TranslocoPipe]
})
export class GenerateComponent {

}
