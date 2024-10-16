import { Component } from '@angular/core';
import { TranslocoService, getBrowserLang } from '@jsverse/transloco';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styles: '',
})
export class LanguageSelectorComponent {
  private readonly storedLanguageKey: string = "lang";

  constructor(private readonly translocoService: TranslocoService) {
    let languageCode: string | null | undefined = localStorage.getItem(this.storedLanguageKey);

    if (!languageCode) {
      languageCode = getBrowserLang();
    }

    if (languageCode && this.languagesList.map(x => x.code).includes(languageCode)) {
      this.changeLanguage(languageCode);
    }
  }

  public languagesList: Array<Record<'imgUrl' | 'code' | 'name' | 'shorthand' | 'message', string>> =
    [
      {
        imgUrl: 'https://flagcdn.com/gb.svg',
        code: 'en',
        name: 'English',
        shorthand: 'ENG',
        message: "Switch language to English",
      },
      {
        imgUrl: 'https://flagcdn.com/es.svg',
        code: 'es',
        name: 'Spanish',
        shorthand: 'SPA',
        message: "Cambiar idioma a Español"
      },
    ];

  public get availableLanguages(): Array<Record<'imgUrl' | 'code' | 'name' | 'shorthand' | 'message', string>> {
    return this.languagesList.filter(x => x.code != this.translocoService.getActiveLang());
  }


  public changeLanguage(languageCode: string): void {
    this.translocoService.setActiveLang(languageCode);
    localStorage.setItem(this.storedLanguageKey, languageCode);
  }
}
