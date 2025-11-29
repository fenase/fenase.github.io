import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { PrimeTemplate } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { ButtonDirective } from 'primeng/button';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
    imports: [PanelModule, PrimeTemplate, AvatarModule, TranslocoDirective, ButtonDirective, TranslocoPipe]
})
export class LandingComponent {

}
