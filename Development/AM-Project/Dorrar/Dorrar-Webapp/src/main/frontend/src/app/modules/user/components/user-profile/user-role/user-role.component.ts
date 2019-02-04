import { Component, OnInit } from '@angular/core';
import {Page} from "../../../shared/data/page";
import {UserService} from "../../../shared/user.service";
import {Role} from "../../../shared/data/role";

@Component({
  selector: 'user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})
export class UserRoleComponent implements OnInit {

  public roleList :Role[]  ;

  public pageList :Page[] ;

  constructor(private privligeService:UserService) {
  }

  onCheckRoles(rol:Role)
  {
    for(let roleAction of rol.actionList)
    {
      for(let page of this.pageList)
      {
        for(let pageAction of page.actionList)
        {
          if(roleAction.labelEN==pageAction.labelEN)
          {
            pageAction.isChecked =!pageAction.isChecked ;
          }
        }
      }
    }

    for(let rolPage of rol.pageList)
    {
      for(let page of this.pageList)
      {
        if(rolPage.labelEN ==page.labelEN)
        {
          page.isChecked =!page.isChecked ;
        }
      }
    }
  }

  onGetRoles() {
    this.privligeService.getRoles()
      .subscribe(res=>
        {
          console.log(res);
          this.roleList = res;
        }
      )
  }

  onGetPages() {
    this.privligeService.getPages().subscribe((res: Page[]) => {
      console.log(res);
      this.pageList = res;
    })
  }

  ngOnInit() {
    this.onGetRoles();
    this.onGetPages();
  }

}
