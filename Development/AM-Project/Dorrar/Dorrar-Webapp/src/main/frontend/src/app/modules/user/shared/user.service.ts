import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserList} from "./data/user-filter.data";
import {College} from "./data/college";
import {University} from "./data/university";
import {Country} from "./data/country";


@Injectable()
export class UserService {
  constructor(private httpClient:HttpClient){
  }

  filter(data:UserList){
    return this.httpClient.post("http://localhost:8080/api/user/filter",data);

  }

    findallcollege(){
     return this.httpClient.get<College[]>("http://localhost:8080/api/user/filter/colleges");

   }

   findalluniversity(){
    return this.httpClient.get<University[]>("http://localhost:8080/api/user/filter/university")
   }

   findallcountry(){
    return this.httpClient.get<Country[]>("http://localhost:8080/api/user/filter/country")
   }


}
