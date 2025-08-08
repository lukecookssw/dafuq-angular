import { Component } from '@angular/core';
import { PageHeader } from '../../components/page-header/page-header';
import { TextQuote } from '../../components/text-quote/text-quote';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-bio',
  imports: [PageHeader, TextQuote, MatGridListModule, MatDividerModule],
  templateUrl: './bio.html',
  styleUrl: './bio.scss'
})
export class Bio {

}
