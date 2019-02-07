import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CorRefType} from "./data/cor-ref-type-dto.data";
import {CourseData} from "./data/course-data-dto.data";

@Injectable()
export class CourseService {
  BASE_URL : string ="http://localhost:8080/api/course";
  constructor(private http:HttpClient) { }

  saveCorReferences(data:CourseData) {
    //TODO: Hala - Use App_base_url such as in User Service
    return this.http.post("http://localhost:8080/api/course/reference", data);
  }
  //   saveCorReferences(data:CourseData) {
  //   return this.http.post("http://localhost:8080/api/course/reference", data)
  //
  //
  // }

  //TODO: Hala - Use App_base_url such as in User Service

  findCorRefTypes() {
    return this.http.get<CorRefType[]>("http://localhost:8080/api/course/findData")

  }
  //TODO: Yara - Use App_base_url such as in User Service

  addNewSections( data : CourseData) {
    return this.http.post( this.BASE_URL +"/1/section", data);

  }


}
