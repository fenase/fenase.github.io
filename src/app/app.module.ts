import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PrimeNGConfig } from 'primeng/api';
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
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    provideAnimations(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [PrimeNGConfig],
      multi: true,
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
