import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  imports: [],
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss'
})
export class PageHeader {
  title = input<string>();
  
  constructor() {
    // Initialization logic can go here if needed
  }
}
