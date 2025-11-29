import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.css',
    imports: [TranslocoPipe]
})
export class PageNotFoundComponent {

}
