import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CourseDTO} from "./data/course/course-dto.data";
import {ConfigParam} from "../../../infrastructure/common/config-param";
import {CorType} from "./data/cor-type.data";
import {CorLevel} from "./data/cor-level";

@Injectable()
export class CourseService {
  BASE_URL : string = ConfigParam.APP_BASE_URL + "/course";
  constructor(private http:HttpClient) { }

  saveCorReferences(data:CourseDTO) {
    return this.http.post(this.BASE_URL +"/2/reference", data);
  }

  addNewSections(data : CourseDTO) {
    return this.http.post( this.BASE_URL +"/1/section", data);

  }

  createNewCourse(detail : CourseDTO ){
    return this.http.post(this.BASE_URL+"/mainDetails", detail);

  }



}
