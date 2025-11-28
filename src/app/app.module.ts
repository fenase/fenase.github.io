import { NgModule, inject, provideAppInitializer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { PrimeNGConfig } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from './shared/shared.module';
import { TranslocoRootModule } from './transloco-root.module';

const initializeAppFactory = (primeConfig: PrimeNGConfig) => () => {
  // ......
  primeConfig.ripple = true;
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    TranslocoRootModule,
    MessagesModule,
    ScrollTopModule,
    PanelModule,
    ButtonModule,
    AvatarModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    provideAnimations(),
    provideAppInitializer(() => {
        const initializerFn = (initializeAppFactory)(inject(PrimeNGConfig));
        return initializerFn();
      }),
    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
      languages: {
        cs: () => import('highlight.js/lib/languages/csharp'),
        powershell: () => import('highlight.js/lib/languages/powershell'),
        xml: () => import('highlight.js/lib/languages/xml'),
        json: () => import('highlight.js/lib/languages/json'),
      },
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
