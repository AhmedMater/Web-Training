import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CorRefType} from "./data/cor-ref-type-dto.data";
import {CourseDTO} from "./data/course-dto.data";
import {ConfigParam} from "../../../infrastructure/common/config-param";

@Injectable()
export class CourseService {
  BASE_URL : string = ConfigParam.APP_BASE_URL + "/course";
  constructor(private http:HttpClient) { }

  saveCorReferences(data:CourseDTO) {
    //TODO: Hala - Use App_base_url such as in User Service
    return this.http.post(this.BASE_URL +"/2/reference", data);
  }
  // "http://localhost:8080/api/course/2/reference"

  //TODO: Hala - Use App_base_url such as in User Service


  //TODO: Yara - Use App_base_url such as in User Service

  addNewSections( data : CourseDTO) {
    return this.http.post( this.BASE_URL +"/1/section", data);

  }


}
