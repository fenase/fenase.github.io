import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

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
})
export class StartComponent {

  public snowflakeIdComponentsImageLoaded:boolean=false;

  onSnowflakeIdComponentsImageLoaded(){
    this.snowflakeIdComponentsImageLoaded=true;
    console.log("la");
  }

}
