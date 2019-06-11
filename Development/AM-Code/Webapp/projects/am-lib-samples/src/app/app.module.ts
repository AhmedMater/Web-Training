///<reference path="app.component.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbstractListSampleComponent } from './components/abstract-list-sample/abstract-list-sample.component';
import {AMLibModule} from "../../../am-lib/src/lib/am-lib.module";
import {LocalStorageService} from "../../../am-lib/src/lib/services/local-storage.service";
import {LanguageService} from "../../../am-lib/src/lib/services/language/language.service";

@NgModule({
  declarations: [
    AppComponent,
    AbstractListSampleComponent
  ],
  imports: [
    BrowserModule, AMLibModule,
    AppRoutingModule
  ],
  providers: [LanguageService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
