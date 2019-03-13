import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../../infrastructure/services/local-storage.service";
import {AuthUserVTO} from "../security/shared/data/auth-user-vto.data";
import {SecurityService} from "../security/shared/security.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SecurityService]
})
export class HomeComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService,
              private securityService: SecurityService) { }

  ngOnInit() {
    let authUser: AuthUserVTO = this.localStorageService.getCurrentUser();
    console.log(authUser);
  }

  onClick(){
    this.securityService.test().subscribe(res=>{});
  }

}
