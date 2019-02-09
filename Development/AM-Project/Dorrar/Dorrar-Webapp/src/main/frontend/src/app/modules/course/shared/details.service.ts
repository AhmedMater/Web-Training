import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CorType } from "./data/cor-type.data";
import {CorLevel} from "./data/cor-level";
import {CourseDTO} from "./data/course-dto.data";

@Injectable()
export class DetailsService {

  constructor(private http : HttpClient) {
  }

  //TODO: Youssef - Move this function to course/shared/course.service
  //TODO: Youssef - Use Base_URL same as in course.service
  createNewCourse(detail : CourseDTO ){
    return this.http.post("http://localhost:8080/api/course/mainDetails", detail);

  }

  //TODO: Youssef - Move this function to app/layout/shared/services/lookup.service
  //TODO: Youssef - Use Base_URL same as in course.service
  //TODO: Youssef - rename function to findCorTypes
  findType(){
    return this.http.get<CorType[]>("http://localhost:8080/api/course/corType");
  }
  //TODO: Youssef - Return CorLevel
  //TODO: Youssef - Use Base_URL same as in course.service
  //TODO: Youssef - rename function to findCorLevels
  findLevel(){
    return this.http.get<CorLevel[]>("http://localhost:8080/api/course/corLevel");
  }

}
