import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-figure',
    templateUrl: './figure.component.html',
    styleUrl: './figure.component.css',
    standalone: false
})
export class FigureComponent {

  @Input({ required: true })
  public imgUrl: string = "";

  @Input()
  public altText: string = "";

  @Input()
  public epigraph: string = "";

  public possibleClasses: string[][] = [
    ["not-loaded"],
    ["loaded"],
  ];

  public classes: string[] = this.possibleClasses[0];

  public onImageLoaded() {
    this.classes = this.possibleClasses[1];
  }
}
