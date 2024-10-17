import { Injectable } from "@angular/core";
import { TranslocoLoader } from "@jsverse/transloco";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {

  getTranslation(lang: string) {
    return import(`../../public/assets/i18n/${lang}.json`).then(res => res.default);
  }
}
