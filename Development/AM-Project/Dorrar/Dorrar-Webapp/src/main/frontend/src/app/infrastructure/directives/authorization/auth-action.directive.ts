import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from "@angular/core";
import {AuthActions} from "./data/auth-action.data";
import {LocalStorageService} from "../../services/local-storage.service";

@Directive({
  selector: '[authorizeAction]'
})
export class AuthorizeActionDirective implements OnInit {
  authActions: string [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
  }

  @Input()
  set authorizeAction(actionList: AuthActions[]) {
    if (actionList != undefined && actionList != null && actionList.length != 0) {
      // this.authActions = this.localStorageService.getUserActions();
      let found = false;

      for(let i=0; i<actionList.length; i++) {
        if (this.authActions.includes(actionList[i])) {
          found = true;
          break;
        }else
          this.viewContainerRef.clear();
      }

      if (found)
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      else
        this.viewContainerRef.clear();
    }
  }
}
