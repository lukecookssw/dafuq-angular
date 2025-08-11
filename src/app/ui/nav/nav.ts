import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {
  isDarkTheme = signal(true);

  toggleTheme() {
    this.isDarkTheme.update(value => !value);
    // Apply theme classes to body
    if (this.isDarkTheme()) {
      document.body.style.colorScheme = 'dark';
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.style.colorScheme = 'light';
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }

    this.notifyThemeChange();
  }

  private notifyThemeChange() {
    // Dispatch a custom event that Giscus components can listen for
    window.dispatchEvent(new CustomEvent('theme-changed'));
  }
}
