import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserList} from "./data/user-filter.data";
import {College} from "./data/college";
import {University} from "./data/university";
import {Country} from "./data/country";
import {Page} from "./data/page";
import {Role} from "./data/role";
import {ConfigParam} from "../../../infrastructure/common/config-param";
import {UserVTO} from "./data/user-vto.data";


@Injectable()
export class UserService {

  BASE_URL: string = ConfigParam.APP_BASE_URL + "/lookup";
  constructor(private http:HttpClient){
  }
  getRoles()
  {
    return this.http.get<Role[]>(this.BASE_URL + '/roles' );
  }

  //TODO: function labelEN to be camelCase
  getPages()
  {
    return this.http.get<Page[]>(
      this.BASE_URL + '/page'
    ) ;
  }

  filter(data:UserList){
    return this.http.post("http://localhost:8080/api/user/filter",data);

  }

    findallcollege(){
     return this.http.get<College[]>("http://localhost:8080/api/user/colleges");

   }

   findalluniversity(){
    return this.http.get<University[]>("http://localhost:8080/api/user/university")
   }

   findallcountry(){
    return this.http.get<Country[]>("http://localhost:8080/api/user/country")
   }

  findAll(){
    return this.http.get<UserVTO[]>("http://localhost:8080/api/user/find")
  }
}
