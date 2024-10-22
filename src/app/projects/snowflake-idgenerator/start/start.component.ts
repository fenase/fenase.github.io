import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styles:'',
  providers: [provideTranslocoScope({ scope: 'projects/SnowflakeIDGenerator/start', alias: 'projects.SnowflakeIDGenerator.start' })]
})
export class StartComponent {

}
