import { Component } from '@angular/core';
import { PageHeader } from '../../components/page-header/page-header';
import { TextQuote } from '../../components/text-quote/text-quote';

@Component({
  selector: 'app-tech',
  imports: [PageHeader, TextQuote],
  templateUrl: './tech.html',
  styleUrl: './tech.scss'
})
export class Tech {

}
