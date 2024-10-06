import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publisher } from '../types/publisher';

@Injectable({
  providedIn: 'root',
})
export class PublisherService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  get(): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(`${this.apiUrl}/publisher`);
  }

  getById(id: number): Observable<Publisher> {
    return this.http.get<Publisher>(`${this.apiUrl}/publisher/${id}`);
  }
}
