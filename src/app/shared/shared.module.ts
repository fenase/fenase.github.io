import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LanguageSelectorModule } from "../language-selector/language-selector.module";
import { TranslocoModule } from '@ngneat/transloco';



@NgModule({
  declarations: [
    TopbarComponent,
  ],
  exports: [
    TopbarComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LanguageSelectorModule,
    TranslocoModule,
  ]
})
export class SharedModule { }
