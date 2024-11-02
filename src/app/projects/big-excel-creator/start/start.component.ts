import { Component, OnInit } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';
import { Constants } from '../globals';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styles: '',
  providers: [provideTranslocoScope({ scope: 'projects/BigExcelCreator/start', alias: 'projects.BigExcelCreator.start' })]
})
export class StartComponent implements OnInit {

  public readonly last2versionLink: string = Constants.last2versionLink;
  public readonly last3versionLink: string = Constants.last3versionLink;



  public get badgesLoaded(): boolean {
    return this.loadedImages >= this.requiredImagesUrl.length;
  }

  private requiredImagesUrl: string[] = [
    "https://img.shields.io/nuget/v/BigExcelCreator",
    "https://dev.azure.com/fenase/BigExcelCreator/_apis/build/status%2FBigExcelCreator-CI?branchName=main",
    "https://sonarcloud.io/api/project_badges/measure?project=fenase_BigExcelCreator&metric=alert_status",
    "https://sonarcloud.io/api/project_badges/measure?project=fenase_BigExcelCreator&metric=ncloc",
    "https://sonarcloud.io/api/project_badges/measure?project=fenase_BigExcelCreator&metric=coverage",
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
