import { Component, inject, OnInit } from '@angular/core';
import { EssaysService } from '../../services/essays.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-essays',
  imports: [CommonModule],
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
