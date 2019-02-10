import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CorType } from "./data/cor-type.data";
import {CorLevel} from "./data/cor-level";
import {CourseDTO} from "./data/course/course-dto.data";

@Injectable()
export class DetailsService {

  constructor(private http : HttpClient) {
  }

  //TODO: Youssef - Move this function to course/shared/course.service
  //TODO: Youssef - Use Base_URL same as in course.service


  //TODO: Youssef - Move this function to app/layout/shared/services/lookup.service
  //TODO: Youssef - Use Base_URL same as in course.service
  //TODO: Youssef - rename function to findCorTypes

  //TODO: Youssef - Return CorLevel
  //TODO: Youssef - Use Base_URL same as in course.service
  //TODO: Youssef - rename function to findCorLevels


}
