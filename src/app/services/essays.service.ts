import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EssaysService {

  constructor(private http: HttpClient) { }

  getDiscussions(): Observable<Discussion[]> {
    return this.http.get<any>('/api/github-discussions').pipe(
      map(response => response.data.repository.discussions.nodes),
      catchError(error => {
        console.error('Error fetching discussions:', error);
        return throwError(() => new Error('Failed to fetch discussions'));
      })
    );
  }
}


export interface Discussion {
  title: string;
  bodyHtml: string;
  url: string;
  author: Author;
}

export interface Author {
  login: string;
}