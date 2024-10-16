import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css', '/node_modules/highlight.js/styles/vs.css'],
})
export class CodeExampleComponent {

  @Input({ required: true })
  public example: string = "";

  @Input({ required: true })
  public language: string = "";

}

