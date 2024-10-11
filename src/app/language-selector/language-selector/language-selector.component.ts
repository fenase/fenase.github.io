import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  private readonly storedLanguageKey: string = "lang";

  constructor(private translocoService: TranslocoService) {
    let languageCode: string | null = localStorage.getItem(this.storedLanguageKey);
    if (languageCode !== null) {
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
