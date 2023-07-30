import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from './image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'https://picsum.photos/v2/list';
  constructor(private http: HttpClient ) {}

  getImages(page: number, limit: number): Observable<Image[]>{
    const url = `${this.apiUrl}?page=${page}&limit=${limit}`;
    return this.http.get<Image[]>(url);
  }
}
