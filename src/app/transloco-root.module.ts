import { isDevMode, NgModule, inject, provideAppInitializer } from '@angular/core';
import {
  provideTransloco,
  TranslocoModule,
  TranslocoService
} from '@jsverse/transloco';
import { firstValueFrom } from 'rxjs';
import { TranslocoHttpLoader } from './transloco-loader';

const DEFAULT_LANGAGE = 'en';

export function preloadTranslation(transloco: TranslocoService) {
  return function () {
    transloco.setActiveLang(DEFAULT_LANGAGE);
    return firstValueFrom(transloco.load(DEFAULT_LANGAGE));
  };
}

@NgModule({
  exports: [TranslocoModule],
  providers: [
    provideTransloco({
      config: {
        availableLangs: ['en', 'es'],
        defaultLang: DEFAULT_LANGAGE,
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    }),
    provideAppInitializer(() => {
        const initializerFn = (preloadTranslation)(inject(TranslocoService));
        return initializerFn();
      }),
  ],
})
export class TranslocoRootModule { }
