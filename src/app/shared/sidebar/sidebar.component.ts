import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Input()
  public menuItems!: MenuItem[];

}

