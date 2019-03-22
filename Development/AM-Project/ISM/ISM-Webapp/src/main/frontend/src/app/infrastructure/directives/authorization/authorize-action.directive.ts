import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthActions} from "./data/auth-actions.enum";
import {LocalStorageService} from "../../services/local-storage.service";

@Directive({
  selector: '[authorizeAction]'
})
export class AuthorizeActionDirective {

  constructor(private templateRef: TemplateRef<any>,
              private view: ViewContainerRef,
              private localStorageService: LocalStorageService) {

  }

  @Input()
  set authorizeAction(actions: AuthActions[]){
    let userActions: number[] = this.localStorageService.getCurrentUser().actionIDs;

    let isFound: boolean = false;
    for(let i=0; i<actions.length; i++){
      if(userActions.includes(actions[i])) {
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
