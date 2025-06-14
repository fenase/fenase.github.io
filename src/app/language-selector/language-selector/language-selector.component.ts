import { Component, OnInit } from '@angular/core';
import { TranslocoService, getBrowserLang } from '@jsverse/transloco';
import { first } from 'rxjs';
import { LanguageMenuItem } from '../LanguageMenuItem.Interface';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent implements OnInit {
  private readonly storedLanguageKey: string = "lang";

  public menuItems: LanguageMenuItem[] = [];
  public activeLanguage?: string;

  public buttonStyles: any[] = [
    {},
  ];
  public buttonStyleIndex: number = 0;
  public get buttonStyle() {
    return this.buttonStyles[this.buttonStyleIndex];
  }

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

    languageCode ??= getBrowserLang();

    if (languageCode && this.languagesList.map(x => x.code).includes(languageCode)) {
      this.changeLanguage(languageCode);
    }

    this.menuItems = [
      {
        label: this.translocoService.translate("Available Languages"),
        items: this.languagesList,
      }
    ]

    this.preloadFlags();

    this.configureHeadsUpAnimation(languageCode);
  }

  public changeLanguage(languageCode: string): void {
    this.translocoService.load(languageCode)
      .pipe(
        first()
      )
      .subscribe(() => {
        this.translocoService.setActiveLang(languageCode);
        localStorage.setItem(this.storedLanguageKey, languageCode);
        this.activeLanguage = languageCode;
      });
  }


  private preloadFlags() {
    this.languagesList.forEach(element => {
      let image = new Image();
      image.src = element.imgUrl;
    });
  }

  private configureHeadsUpAnimation(activeLanguageCode: string | null | undefined) {
    this.buttonStyles.push({
      "opacity": "0",
      "color": "transparent",
      'background-color': "transparent",
    });

    this.languagesList
      .slice()
      .sort((a, b) => {
        if (a.code === activeLanguageCode) { return -1; }
        if (b.code === activeLanguageCode) { return 1; }
        if (a.code < b.code) { return -1; }
        if (a.code > b.code) { return 1; }
        return 0;
      })
      .forEach(element => {
        this.buttonStyles.push({
          "background-image": `url('${element.imgUrl}')`,
          'background-color': "transparent",
          'background-repeat': "no-repeat",
          'background-size': "auto 105%",
          'background-position': "center center",
          "color": "transparent",
          "opacity": "1",
        });
        this.buttonStyles.push({
          "background-image": `url('${element.imgUrl}')`,
          'background-color': "transparent",
          'background-repeat': "no-repeat",
          'background-size': "auto 105%",
          'background-position': "center center",
          "color": "transparent",
          "opacity": "0",
        });
      });

    this.buttonStyles.push({
      "opacity": "1",
      "color": "transparent",
      'background-color': "transparent",
    });

    setTimeout(() => {
      this.animateButton();
    }, 2000);
  }

  private animateButton(index: number = 0) {
    if (index >= this.buttonStyles.length) {
      this.buttonStyleIndex = 0;
      return;
    }
    setTimeout(() => {
      index++;
      this.buttonStyleIndex = index;
      this.animateButton(index);
    }, index < this.buttonStyles.length - 1 ? 300 : 10);
  }

}
