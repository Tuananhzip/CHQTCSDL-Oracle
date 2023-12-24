import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isDropdown = false;
  onDropdown() {
    this.isDropdown = !this.isDropdown;
  }
}
