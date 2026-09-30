import { Component, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { map, startWith, switchMap } from 'rxjs';
import { NewsService } from '../../core/news.service';
import { LanguageService } from '../../core/language.service';
import { NewsItem, Text } from '../../data/types';

const YOUTUBE_ID = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{6,})/;

@Component({
  selector: 'app-news-detail',
  imports: [RouterLink],
  templateUrl: './news-detail.html',
})
export class NewsDetail {
  readonly lang = inject(LanguageService);
  readonly id = input('');
  private readonly newsApi = inject(NewsService);
  private readonly sanitizer = inject(DomSanitizer);
  readonly state = toSignal(
    toObservable(this.id).pipe(
      switchMap((id) =>
        this.newsApi.get(id).pipe(
          map((item) => ({ ready: true, item })),
          startWith({ ready: false, item: undefined as NewsItem | undefined }),
        ),
      ),
    ),
    { initialValue: { ready: false, item: undefined as NewsItem | undefined } },
  );

  paragraphs(description: Text): string[] {
    return this.lang.t(description).split(/\n\n+/).filter((part) => part.trim().length > 0);
  }

  youtubeEmbedUrl(url: string): SafeResourceUrl | null {
    const id = YOUTUBE_ID.exec(url)?.[1];
    if (!id) {
      return null;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}`);
  }
}
