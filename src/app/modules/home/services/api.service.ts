import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/core/models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'assets/data/blog.json';

  constructor(private http: HttpClient) {}

  getBlogData(): Observable<Blog> {
    return this.http.get<Blog>(this.apiUrl);
  }
}
