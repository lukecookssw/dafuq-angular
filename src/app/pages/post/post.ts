import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { GitHubDiscussionsService } from '../../services/github-discussions.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Loading } from '../../components/loading/loading';
import { PageHeader } from '../../components/page-header/page-header';
import { GiscusComponent } from '../../components/giscus/giscus.component';

@Component({
  selector: 'app-post',
  imports: [CommonModule, Loading, PageHeader, GiscusComponent],
  templateUrl: './post.html',
  styleUrl: './post.scss',
  encapsulation: ViewEncapsulation.None // so the styles are applied to the injected HTML
})
export class Post implements OnInit {
  discussionId: string = '';
  discussion$!: Observable<any>; // Replace with actual type if available
  loading = true;

  discussionService = inject(GitHubDiscussionsService);
  private route = inject(ActivatedRoute);

  constructor() {}

  ngOnInit() {
    this.discussionId = this.route.snapshot.paramMap.get('id') || '';
    if (this.discussionId) {
      this.getPost();
    } else {
      console.error('Discussion ID is not provided');
    }
  }

  getPost() {
    this.discussion$ = this.discussionService
    .getDiscussionById(this.discussionId)
    .pipe(tap(() => { this.loading = false; }));
  }
}
