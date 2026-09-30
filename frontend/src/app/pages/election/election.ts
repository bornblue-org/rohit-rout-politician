import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../core/language.service';
import { districts, manifestoIntro, manifestoPoints } from '../../data/manifesto';
import { stats } from '../../data/site';

@Component({
  selector: 'app-election',
  templateUrl: './election.html',
})
export class Election {
  readonly lang = inject(LanguageService);
  readonly intro = manifestoIntro;
  readonly points = manifestoPoints;
  readonly districts = districts;
  readonly stats = stats;
  readonly activeId = signal(manifestoPoints[0].id);
  readonly active = computed(() => this.points.find((point) => point.id === this.activeId()) ?? this.points[0]);

  constructor() {
    const fragment = inject(ActivatedRoute).snapshot.fragment;
    if (fragment && manifestoPoints.some((point) => point.id === fragment)) {
      this.activeId.set(fragment);
    }
  }

  setActive(id: string): void {
    this.activeId.set(id);
  }
}
