import { Component, input } from '@angular/core';

@Component({
  selector: 'app-text-quote',
  imports: [],
  templateUrl: './text-quote.html',
  styleUrl: './text-quote.scss'
})
export class TextQuote {
  quoteText = input<string>();
  author = input<string>();
}
