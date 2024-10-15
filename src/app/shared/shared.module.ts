import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageSelectorModule } from "../language-selector/language-selector.module";
import { TopbarComponent } from './topbar/topbar.component';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { ToolbarModule } from 'primeng/toolbar';
import { InputIconModule } from 'primeng/inputicon';
import { MenubarModule } from 'primeng/menubar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuModule } from 'primeng/menu';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TranslocoModule } from '@jsverse/transloco';



@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    SafeHtmlPipe,
    PageNotFoundComponent,
  ],
  exports: [
    TopbarComponent,
    SidebarComponent,
    SafeHtmlPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonGroupModule,
    ToolbarModule,
    InputIconModule,
    MenubarModule,
    MenuModule,
    PanelMenuModule,
    LanguageSelectorModule,
    TranslocoModule,
  ]
})
export class SharedModule { }
