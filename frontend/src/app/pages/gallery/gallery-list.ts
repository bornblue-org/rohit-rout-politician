import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { albums, galleryNote, videosNote } from '../../data/site';

type GalleryTab = 'photos' | 'videos';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.html',
})
export class GalleryList {
  readonly lang = inject(LanguageService);
  readonly videosNote = videosNote;
  readonly galleryNote = galleryNote;
  readonly tab = signal<GalleryTab>('photos');
  readonly active = signal<string | null>(null);
  readonly photos = computed(() => albums.flatMap((album) => album.images));

  setTab(tab: GalleryTab): void {
    this.tab.set(tab);
  }
}
