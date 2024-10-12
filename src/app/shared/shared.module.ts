import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { LanguageSelectorModule } from "../language-selector/language-selector.module";
import { TopbarComponent } from './topbar/topbar.component';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { ToolbarModule } from 'primeng/toolbar';
import { InputIconModule } from 'primeng/inputicon';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    TopbarComponent,
  ],
  exports: [
    TopbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonGroupModule,
    ToolbarModule,
    InputIconModule,
    MenubarModule,
    LanguageSelectorModule,
    TranslocoModule,
  ]
})
export class SharedModule { }
