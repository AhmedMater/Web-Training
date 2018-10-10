import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LocalStorageService} from "./core/services/local-storage.service";
import {Languages} from "./core/data/enums/languages.enum";

@Component({
  selector: 'amt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translateService: TranslateService){
    LocalStorageService.setLanguage(Languages.EN);
    this.translateService.use(Languages.EN);
  }
}
