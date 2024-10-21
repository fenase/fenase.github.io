import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { HighlightModule } from 'ngx-highlightjs';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SkeletonModule } from 'primeng/skeleton';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { LanguageSelectorModule } from "../language-selector/language-selector.module";
import { CodeExampleComponent } from './code-example/code-example.component';
import { InstallInstructionsComponent } from './install-instructions/install-instructions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';



@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    PageNotFoundComponent,
    CodeExampleComponent,
    InstallInstructionsComponent,
  ],
  exports: [
    TopbarComponent,
    SidebarComponent,
    CodeExampleComponent,
    InstallInstructionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    ToolbarModule,
    InputIconModule,
    MenubarModule,
    MenuModule,
    MenuModule,
    LanguageSelectorModule,
    TranslocoModule,
    HighlightModule,
    SkeletonModule,
    TabViewModule,
  ],
})
export class SharedModule { }
