import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { NewsItem, NewsPage } from '../data/types';

const PAGE_SIZE = 9;

@Injectable({ providedIn: 'root' })
export class NewsService {
  private readonly http = inject(HttpClient);

  page(page = 1, pageSize = PAGE_SIZE): Observable<NewsPage> {
    return this.http.get<NewsPage>('/api/news', { params: { page, pageSize } }).pipe(
      catchError(() => this.sampleStories().pipe(
        map((items) => ({ items: items.slice((page - 1) * pageSize, page * pageSize), page, pageSize, total: items.length })),
      )),
    );
  }

  get(id: string): Observable<NewsItem | undefined> {
    return this.http.get<NewsItem>(`/api/news/${id}`).pipe(
      catchError(() => this.sampleStories().pipe(map((items) => items.find((item) => item.id === id)))),
    );
  }

  /** Bundled placeholder stories, shown only while the backend API is unreachable — see public/api/news.json. */
  private sampleStories(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>('/api/news.json').pipe(catchError(() => of([])));
  }
}
