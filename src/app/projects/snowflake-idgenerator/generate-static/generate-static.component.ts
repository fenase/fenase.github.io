import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { PanelModule } from 'primeng/panel';

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
  imports: [TranslocoDirective, PanelModule, TranslocoPipe]
})
export class GenerateStaticComponent {

}
