import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective } from '@jsverse/transloco';
import { FigureComponent } from '../../../shared/figure/figure.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styles: '',
  providers: [
    provideTranslocoScope(
      { scope: 'projects/SnowflakeIDGenerator/start', alias: 'projects.SnowflakeIDGenerator.start' },
      { scope: 'projects/SnowflakeIDGenerator', alias: 'projects.SnowflakeIDGenerator' }
    )
  ],
  imports: [TranslocoDirective, FigureComponent]
})
export class StartComponent { }
