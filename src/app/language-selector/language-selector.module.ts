import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { TranslocoModule } from '@jsverse/transloco';



@NgModule({
  declarations: [
    LanguageSelectorComponent
  ],
  exports: [
    LanguageSelectorComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
    ButtonModule,
    TranslocoModule,
  ]
})
export class LanguageSelectorModule { }
