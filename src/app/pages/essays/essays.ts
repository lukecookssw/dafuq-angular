import { Component, inject, OnInit } from '@angular/core';
import { EssaysService } from '../../services/essays.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-essays',
  imports: [],
  templateUrl: './essays.html',
  styleUrl: './essays.scss',
})
export class Essays implements OnInit {

    private essaysService = inject(EssaysService);

    discussions$!: Observable<any>;

    ngOnInit() {
        this.discussions$ = this.essaysService.getDiscussions();
    }
}
