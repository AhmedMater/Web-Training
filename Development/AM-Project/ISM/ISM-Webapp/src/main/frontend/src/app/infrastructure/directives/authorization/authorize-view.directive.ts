import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthActions} from "./data/auth-actions.enum";
import {LocalStorageService} from "../../services/local-storage.service";
import {AuthViews} from "./data/auth-views.enum";

@Directive({
  selector: '[authorizeView]'
})
export class AuthorizeViewDirective {

  constructor(private templateRef: TemplateRef<any>,
              private view: ViewContainerRef,
              private localStorageService: LocalStorageService) {

  }

  @Input()
  set authorizeView(views: AuthViews[]){
    let userViews: number[] = this.localStorageService.getCurrentUser().viewIDs;

    let isFound: boolean = false;
    for(let i=0; i<views.length; i++){
      if(userViews.includes(views[i])) {
        isFound = true;
        break;
      }
    }

    if(isFound)
      this.view.createEmbeddedView(this.templateRef);
    else
      this.view.clear();
  }
}
