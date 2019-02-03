import { Component, OnInit } from '@angular/core';
import {Page} from "../../shared/data/page";
import {Role} from "../../shared/data/role";
import {UserService} from "../../shared/user.service";

@Component({
  selector: 'user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})
export class UserRoleComponent implements OnInit {

  //TODO: use normal Array[] instead of Object Array
  //TODO: labelEN of variable to be roleList
  public roleList :Role[]  ;
  //TODO: use normal Array[] instead of Object Array
  //TODO: labelEN of variable to be pageList
  public pageList :Page[] ;
  isChecked:boolean = false ;
  //TODO: variable labelEN to be camelCase
  constructor(private privligeService:UserService) {
  }

  onCheckRoles(rol:Role)
  {
    for(let i of rol.actionList)
    {
      for(let j of this.pageList)
      {
        for(let k of j.actionList)
        {
          if(i.labelEN==k.labelEN)
          {
            k.isChecked =!k.isChecked ;
          }
        }
      }
    }
  }

  //TODO: function labelEN to be camelCase
  onGetRoles() {
    // this.privligeService.getRoles()
    //   .subscribe(res=>
    //     {
    //       console.log(res);
    //       this.roleList = res;
    //       //TODO: no need for return
    //       // return this.roleList ;
    //     }
    //   )
  }

  //TODO: function labelEN to be camelCase
  onGetPages() {
    // this.privligeService.getPages().subscribe((res: Page[]) => {
    //   console.log(res);
    //   this.pageList = res;
    //   //TODO: no need for return
    //   // return this.pageList;
    // })
  }


  ngOnInit() {
    //TODO: call the Rest Services here to load on the opening of the Page
    this.onGetRoles();
    this.onGetPages();
  }

}
