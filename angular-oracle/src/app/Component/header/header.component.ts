import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isMenu: boolean = false;
  @Input() darkMode: boolean = false;
  @Output() toggleDarkMode = new EventEmitter<void>();
  onToggleMenu() {
    this.isMenu = !this.isMenu;
  }
  onToggleDarkMode() {
    this.toggleDarkMode.emit();
  }
}
