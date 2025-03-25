import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Resource {
  id?: number;
  title: string;
  description: string;
  category_id: number;
  scripture: string;
  created_at?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiUrl = 'http://localhost:5000/api/resources';

  constructor(private http: HttpClient) {}

  getResourceById(id: number): Observable<Resource> {
    return this.http.get<Resource>(`${this.apiUrl}/${id}`);
  }

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.apiUrl);
  }

  getResource(id: number): Observable<Resource> {
    return this.http.get<Resource>(`${this.apiUrl}/${id}`);
  }

  createResource(resource: Resource): Observable<any> {
    return this.http.post(this.apiUrl, resource);
  }

  updateResource(id: number, resource: Resource): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, resource);
  }

  deleteResource(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
