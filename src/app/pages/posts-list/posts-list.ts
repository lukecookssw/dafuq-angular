import { Component, inject, OnInit } from '@angular/core';
import { GitHubDiscussionsService } from '../../services/github-discussions.service';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';


import { Discussion } from '../../models/discussion.interface';
import { PageHeader } from '../../components/page-header/page-header';
import { TextQuote } from '../../components/text-quote/text-quote';
import { Observable, tap } from 'rxjs';
import { PostBlurb } from './post-blurb/post-blurb';
import { Loading } from '../../components/loading/loading';

@Component({
  selector: 'app-posts-list',
  imports: [CommonModule, PageHeader, TextQuote, PostBlurb, MatDividerModule, Loading],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.scss'
})
export class PostsList implements OnInit {
private discussionsService = inject(GitHubDiscussionsService);
  discussions$!: Observable<Discussion[]>;
  loading = true;
  errorText = '';

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.discussions$ = this.discussionsService
    .getDiscussions_local()
    .pipe(tap(() => { this.loading = false }));
  }
}
