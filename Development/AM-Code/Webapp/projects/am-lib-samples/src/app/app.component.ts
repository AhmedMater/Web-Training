import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  title = 'am-lib-samples';
  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  
  }
  ngOnInit(): void {
  }
}
