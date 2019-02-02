import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FilterUserData} from "./data/user-filter.data";
//import {College} from "./model/college";

@Injectable()
export class CourseService {
  constructor(private http:HttpClient){

  }
  filter(data:FilterUserData){
    return this.http.post("http://localhost:8080/api/user/filter",data);

  }
  // findallcollege(){
  //   return this.http.get<College[]>("http://localhost:8080/api/user/filter/colleges");
  //
  // }
}
