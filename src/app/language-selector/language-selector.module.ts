import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    LanguageSelectorComponent
  ],
  exports:[
    LanguageSelectorComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
  ]
})
export class LanguageSelectorModule { }
