import { Component, OnInit } from '@angular/core';
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
export class StartComponent implements OnInit {

  public get badgesLoaded(): boolean {
    return this.loadedImages >= this.requiredImagesUrl.length;
  }

  private requiredImagesUrl: string[] = [
    "https://img.shields.io/nuget/v/SnowflakeIDGenerator?logo=nuget",
    "https://dev.azure.com/fenase/SnowflakeIDGenerator/_apis/build/status%2FSnowflakeIDGenerator-CI?branchName=master",
    "https://sonarcloud.io/api/project_badges/measure?project=fenase_SnowflakeIDGenerator2&metric=alert_status",
    "https://sonarcloud.io/api/project_badges/measure?project=fenase_SnowflakeIDGenerator2&metric=ncloc",
    "https://sonarcloud.io/api/project_badges/measure?project=fenase_SnowflakeIDGenerator2&metric=coverage",
  ]

  private loadedImages = 0;

  onBadgesLoaded() {
    this.loadedImages++;
  }



  ngOnInit(): void {
    // 5 second limit to show badges
    setTimeout(() => {
      this.loadedImages += this.requiredImagesUrl.length;
    }, 5000);

    this.requiredImagesUrl.forEach(requiredImageUrl => {
      let image = new Image();
      image.src = requiredImageUrl;
      image.onload = () => this.onBadgesLoaded();
    });
  }

}
