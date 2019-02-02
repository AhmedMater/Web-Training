import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserList} from "./data/user-filter.data";
import {College} from "./data/college";
import {University} from "./data/university";
import {Country} from "./data/country";

@Injectable()
export class UserService {
  constructor(private http:HttpClient){

  }
  filter(data:UserList){
    return this.http.post("http://localhost:8080/api/user/filter",data);

  }
    findallcollege(){
     return this.http.get<College[]>("http://localhost:8080/api/user/filter/colleges");

   }
   findalluniversity(){
    return this.http.get<University[]>("http://localhost:8080/api/user/filter/university")
   }
   findallcountry(){
    return this.http.get<Country[]>("http://localhost:8080/api/user/filter/country")
   }
}
