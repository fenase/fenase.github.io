import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-change-epoch',
  templateUrl: './change-epoch.component.html',
  styles: ``,
  providers: [
    provideTranslocoScope(
      { scope: 'projects/SnowflakeIDGenerator/changeEpoch', alias: 'projects.SnowflakeIDGenerator.changeEpoch' },
      { scope: 'projects/SnowflakeIDGenerator', alias: 'projects.SnowflakeIDGenerator' }
    )
  ],
  imports: [TranslocoDirective, TranslocoPipe]
})
export class ChangeEpochComponent {

}
