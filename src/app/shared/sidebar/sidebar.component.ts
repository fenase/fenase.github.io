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

  public classList: string[] = ["sidebar"];

  public buttonIcon: string = "pi pi-plus";

  private possibleClasses: string[][] = [
    ["sidebar"],
    ["sidebar", "sidebar-active"]
  ]
  private possibleButtons: string[] = [
    "pi pi-plus",
    "pi pi-minus"
  ]

  public sidebarActive: boolean = false

  public toggleSidebar(open?: boolean): void {
    if (open === true || open === false) {
      // force falue
      this.sidebarActive = open;
    } else {
      // toggle
      this.sidebarActive = !this.sidebarActive;
    }

    this.classList = this.possibleClasses[this.sidebarActive ? 1 : 0]
    this.buttonIcon = this.possibleButtons[this.sidebarActive ? 1 : 0]
  }
}

