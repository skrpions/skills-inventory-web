import { Component } from '@angular/core';
import { SettingsService } from '@core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  template: `
    <button mat-icon-button class="matero-toolbar-button" [matMenuTriggerFor]="menu">
      <mat-icon>translate</mat-icon>
    </button>

    <mat-menu #menu="matMenu">
      <button mat-menu-item *ngFor="let lang of langs | keyvalue" (click)="useLanguage(lang.key)">
        <span>{{ lang.value }}</span>
      </button>
    </mat-menu>
  `,
  styles: [],
})
export class TranslateComponent {
  langs = {
    'en-US': 'English',
    'es-ES': 'Español',
    'zh-CN': '中文简体',
    'zh-TW': '中文繁体',
  };

  constructor(private translate: TranslateService, private settings: SettingsService) {
    translate.addLangs(['en-US', 'es-ES','zh-CN', 'zh-TW']);
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.settings.setLanguage(language);
  }
}
