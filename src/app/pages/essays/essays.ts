import { Component, inject } from '@angular/core';
import { EssaysService } from '../../services/essays';

@Component({
  selector: 'app-essays',
  imports: [],
  templateUrl: './essays.html',
  styleUrl: './essays.scss',
})
export class Essays {

    private essaysService = inject(EssaysService);

    discussions$ = this.essaysService.getDiscussions();
}
