import { Component, HostBinding, effect, signal, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-oracle';
  darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ? 'false' : 'true')
  );
  constructor() {
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    });
  }
  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }
  toggleDarkMode() {
    this.darkMode.set(!this.darkMode());
  }
}
