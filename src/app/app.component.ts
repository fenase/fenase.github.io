import { Component } from '@angular/core';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: '',
    imports: [TopbarComponent, ScrollTopModule, RouterOutlet]
})
export class AppComponent {
  title = 'fenase.github.io';
}
