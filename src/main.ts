import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAppInitializer, inject, importProvidersFrom } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { TranslocoRootModule } from './app/transloco-root.module';
import { MessagesModule } from 'primeng/messages';
import { ScrollTopModule } from 'primeng/scrolltop';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AppComponent } from './app/app.component';

const initializeAppFactory = (primeConfig: PrimeNGConfig) => () => {
  // ......
  primeConfig.ripple = true;
};



bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, TranslocoRootModule, MessagesModule, ScrollTopModule, PanelModule, ButtonModule, AvatarModule),
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
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
