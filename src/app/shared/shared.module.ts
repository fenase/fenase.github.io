import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { GistFilePipe, HighlightPlusModule } from 'ngx-highlightjs/plus';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { InputIconModule } from 'primeng/inputicon';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { LanguageSelectorModule } from "../language-selector/language-selector.module";
import { CodeExampleComponent } from './code-example/code-example.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HighlightModule } from 'ngx-highlightjs';



@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    SafeHtmlPipe,
    PageNotFoundComponent,
    CodeExampleComponent,
  ],
  exports: [
    TopbarComponent,
    SidebarComponent,
    CodeExampleComponent,
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
    HighlightModule,
    HighlightPlusModule,
    HighlightLineNumbers,
    GistFilePipe,
  ],
})
export class SharedModule { }
