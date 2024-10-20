import { Component, OnInit } from '@angular/core';
import { TranslocoService, getBrowserLang } from '@jsverse/transloco';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent implements OnInit {
  private readonly storedLanguageKey: string = "lang";

  public menuItems: languageMenuItem[] = [];
  public activeLanguage?: string;

  public languagesList: Array<Record<'imgUrl' | 'code' | 'label' | 'shorthand' | 'message', string>> =
    [
      {
        imgUrl: 'https://flagcdn.com/gb.svg',
        code: 'en',
        label: 'English',
        shorthand: 'ENG',
        message: "Switch language to English",
      },
      {
        imgUrl: 'https://flagcdn.com/es.svg',
        code: 'es',
        label: 'Español',
        shorthand: 'SPA',
        message: "Cambiar idioma a Español"
      },
    ];

  constructor(private readonly translocoService: TranslocoService) { }

  ngOnInit(): void {
    let languageCode: string | null | undefined = localStorage.getItem(this.storedLanguageKey);

    if (!languageCode) {
      languageCode = getBrowserLang();
    }

    if (languageCode && this.languagesList.map(x => x.code).includes(languageCode)) {
      this.changeLanguage(languageCode);
    }

    this.menuItems = [
      {
        label: this.translocoService.translate("Available Languages"),
        items: this.languagesList,
      }
    ]
  }

  public changeLanguage(languageCode: string): void {
    this.translocoService.setActiveLang(languageCode);
    localStorage.setItem(this.storedLanguageKey, languageCode);
    this.activeLanguage = languageCode;
  }
}

interface languageMenuItem extends MenuItem {
  code?: string,
  message?: string,
}
