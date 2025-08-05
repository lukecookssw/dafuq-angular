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
    // Apply theme to body
    if (this.isDarkTheme()) {
      document.body.style.colorScheme = 'dark';
    } else {
      document.body.style.colorScheme = 'light';
    }
  }
}
