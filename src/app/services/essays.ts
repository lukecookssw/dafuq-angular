import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EssaysService {

  constructor(private http: HttpClient) {}

  getDiscussions() {
  return this.http.get<any>('/api/github-discussions');
}
}
