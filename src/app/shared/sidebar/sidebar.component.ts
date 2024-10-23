import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Input()
  public menuItems!: MenuItem[];

  private possibleClasses: string[][] = [
    ["sidebar", "sidebar-inactive"],
    ["sidebar", "sidebar-active"]
  ]
  private possibleButtons: string[] = [
    "pi pi-ellipsis-v",
    "pi pi-arrow-left"
  ]

  public classList: string[] = this.possibleClasses[0];

  public buttonIcon: string = this.possibleButtons[0];

  public sidebarActive: boolean = false;

  public buttonActive: boolean = true;

  public toggleSidebar(open?: boolean): void {
    if (!this.buttonActive) { return; }
    this.buttonActive = false;

    if (open === true || open === false) {
      // force falue
      this.sidebarActive = open;
    } else {
      // toggle
      this.sidebarActive = !this.sidebarActive;
    }

    this.classList = this.possibleClasses[this.sidebarActive ? 1 : 0]
    this.buttonIcon = this.possibleButtons[this.sidebarActive ? 1 : 0]

    setTimeout(() => {
      this.buttonActive = true;
    }, 150);
  }
}

