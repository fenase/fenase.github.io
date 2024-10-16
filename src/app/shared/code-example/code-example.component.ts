import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, shareReplay, Subject, Subscription, takeUntil } from 'rxjs';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css', '/node_modules/highlight.js/styles/vs.css'],
})
export class CodeExampleComponent implements OnInit, OnDestroy {

  constructor(private translocoService: TranslocoService, private httpClient: HttpClient) { }

  @Input({ required: true })
  public examplePath: string = "";

  @Input({ required: true })
  public language: string = "";

  public example: string = "";


  private langChangeSubscription?: Subscription;

  ngOnInit(): void {
    this.langChangeSubscription = this.translocoService.langChanges$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(lang => {
        this.example = "";
        let path: string = `assets/examples/${lang}/${this.examplePath}.${this.language}`;
        console.log(path);
        this.httpClient.get(path, { responseType: "text" })
          .pipe(
            takeUntil(this.destroy$)
          )
          .subscribe(data => {
            this.example = data;
          });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.langChangeSubscription) { this.langChangeSubscription.unsubscribe(); }
  }

  private destroy$ = new Subject<void>();
}

