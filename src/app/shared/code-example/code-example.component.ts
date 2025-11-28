import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
    selector: 'app-code-example',
    templateUrl: './code-example.component.html',
    styleUrls: ['./code-example.component.css'],
    standalone: false
})
export class CodeExampleComponent implements OnInit, OnDestroy {

  constructor(
    private readonly translocoService: TranslocoService,
    private readonly httpClient: HttpClient
  ) { }

  @Input({ required: true })
  public examplePath: string = "";

  @Input({ required: true })
  public language: string = "";

  public example: string = "";


  private langChangeSubscription?: Subscription;

  ngOnInit(): void {
    this.destroy$ = new Subject();

    this.langChangeSubscription = this.translocoService.langChanges$
      .pipe(
        takeUntil(this.destroy$!)
      )
      .subscribe(lang => {
        this.example = "";
        let path: string = `assets/examples/${lang}/${this.examplePath}.${this.language}`;
        this.httpClient.get(path, { responseType: "text" })
          .pipe(
            takeUntil(this.destroy$!)
          )
          .subscribe(data => {
            this.example = data;
          });
      });
  }

  ngOnDestroy(): void {
    this.destroy$?.next();
    this.destroy$?.complete();
    if (this.langChangeSubscription) { this.langChangeSubscription.unsubscribe(); }
  }

  private destroy$?: Subject<void>;
}

