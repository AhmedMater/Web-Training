import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CorType } from "./data/cor-type.data";
import {CorLevel} from "./data/cor-level";
import {CourseDTO} from "./data/course-dto.data";

@Injectable()
export class DetailsService {

  constructor(private http : HttpClient) {
  }

  createNewCourse(detail : CourseDTO ){
    return this.http.post("http://localhost:8080/api/course/mainDetails", detail);

  }

  //TODO: Youssef - Move this function to app/layout/shared/services/lookup.service
  findType(){
    return this.http.get<CorType[]>("http://localhost:8080/api/course/corType");
  }
  //TODO: Youssef - Return CorLevelList
  findLevel(){
    return this.http.get<CorLevel[]>("http://localhost:8080/api/course/corLevel");
  }

}
