import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EssaysService {

  constructor(private http: HttpClient) { }

  getDiscussions() {
    return this.http.get<any>('/api/github-discussions').pipe(
      catchError(error => {
        console.error('Error fetching discussions:', error);
        return throwError(() => new Error('Failed to fetch discussions'));
      })
    );
  }
}
