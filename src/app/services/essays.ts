import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Essays {

  constructor(private http: HttpClient) {}

  getDiscussions() {
  return this.http.get<any>('/api/github-discussions');
}
}
