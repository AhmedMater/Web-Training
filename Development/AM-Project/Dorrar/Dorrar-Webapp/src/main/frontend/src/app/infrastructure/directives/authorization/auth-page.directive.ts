import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {LocalStorageService} from '../../../services/local-storage.service';
import {AuthPages} from "./data/auth-page.data";

@Directive({
  selector: '[authorizePage]'
})
export class AuthorizePageDirective implements OnInit {
  authPages: string [];

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef,
              private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {

  }

  @Input()
  set authorizePage(pageList: AuthPages[]) {
    if (pageList != undefined && pageList != null && pageList.length != 0) {
      // this.authPages = this.localStorageService.getUserPages();
      let found = false;

      for(let i=0; i< pageList.length; i++) {
        if (this.authPages.includes(pageList[i])) {
          found = true;
          break;
        }
         else
          this.viewContainerRef.clear();
      }
      if (found)
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      else
        this.viewContainerRef.clear();
    }
  }
}
