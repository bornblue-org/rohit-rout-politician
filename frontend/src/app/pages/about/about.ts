import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { aboutLead, awards, campus, experience, institutions, profile, socialWork, universityWork } from '../../data/site';
import { Text } from '../../data/types';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
})
export class About {
  readonly lang = inject(LanguageService);
  readonly profile = profile;
  readonly lead = aboutLead;
  readonly timelineTitle: Text = { mr: 'संघटनात्मक कार्य', en: 'Organisational roles' };
  readonly timeline = experience;
  readonly blocks: { title: Text; icon: string; items: Text[] }[] = [
    { title: { mr: 'सिनेट निवडणूक अनुभव', en: 'Senate election experience' }, icon: 'fa-graduation-cap', items: institutions },
    { title: { mr: 'प्रमुख आंदोलने', en: 'Major agitations' }, icon: 'fa-bullhorn', items: campus },
    { title: { mr: 'सामाजिक कार्य', en: 'Social work' }, icon: 'fa-hands-holding-child', items: socialWork },
    { title: { mr: 'निवडणूक कार्य २०२४', en: 'Election work 2024' }, icon: 'fa-flag', items: universityWork },
  ];
  readonly awards = awards;
}
