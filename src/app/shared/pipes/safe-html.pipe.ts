import { isPlatformBrowser } from '@angular/common';
import { Inject, Pipe, type PipeTransform, PLATFORM_ID } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: any,
    private readonly sanitizer: DomSanitizer
  ) { }

  public transform(value: string): SafeHtml {
    if (!value || !isPlatformBrowser(this.platformId)) {
      return value;
    }

    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
