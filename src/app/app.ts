import { Component, OnDestroy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './ui/nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dafuq');

  constructor() {
    document.body.style.colorScheme = 'dark';
    document.body.classList.add('dark-theme');
  }
}
