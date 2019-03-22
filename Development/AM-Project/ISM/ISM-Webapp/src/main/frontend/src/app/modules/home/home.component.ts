import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../../infrastructure/services/local-storage.service";
import {AuthUserVTO} from "../security/shared/data/auth-user-vto.data";
import {SecurityService} from "../security/shared/security.service";
import {AuthActions} from "../../infrastructure/directives/authorization/data/auth-actions.enum";
import {AuthViews} from "../../infrastructure/directives/authorization/data/auth-views.enum";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SecurityService]
})
export class HomeComponent implements OnInit {

  AUTH_ACTIONS: typeof AuthActions = AuthActions;
  AUTH_VIEWS: typeof AuthViews = AuthViews;

  currentUser: AuthUserVTO;

  constructor(private localStorageService: LocalStorageService,
              private securityService: SecurityService) {
    this.currentUser = this.localStorageService.getCurrentUser();
  }

  ngOnInit() {
  }

  onClickAuthentication(){
    this.securityService.testAuthentication().subscribe(
    res=>console.log('Authentication-Successful'),
      err=> console.log(err));
  }

  onClickAction(){
    this.securityService.testAction().subscribe(
      res=>console.log('Authorization-Action-Successful'),
      err=> console.log(err));
  }

  onClickView(){
    this.securityService.testView().subscribe(
      res=>console.log('Authorization-View-Successful'),
      err=> console.log(err));
  }
}
