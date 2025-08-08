import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Discussion } from '../models/discussion.interface';

@Injectable({
  providedIn: 'root'
})
export class GitHubDiscussionsService {

  constructor(private http: HttpClient) { }

  getDiscussions(): Observable<Discussion[]> {
    return this.http.get<any>('/api/github-discussions').pipe(
      catchError(error => {
        console.error('Error fetching discussions:', error);
        return throwError(() => new Error('Failed to fetch discussions'));
      })
    );
  }

  getDiscussionById(id: string): Observable<Discussion> {
    return this.http.get<any>(`/api/github-discussion-by-id?id=${id}`).pipe(
      catchError(error => {
        console.error('Error fetching discussion by ID:', error);
        return throwError(() => new Error('Failed to fetch discussion by ID'));
      })
    );
  }
}


