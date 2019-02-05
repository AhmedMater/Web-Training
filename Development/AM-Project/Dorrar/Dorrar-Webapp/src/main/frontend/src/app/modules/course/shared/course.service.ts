import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CorRefType} from "./data/cor-ref-type-dto.data";
import {CourseData} from "./data/course-data-dto.data";

@Injectable()
export class CourseService {

  constructor(private http:HttpClient) { }

  //TODO: Hala - Rename function to saveCorReferences
  //TODO: Hala - Use App_base_url such as in User Service
  references(data:CourseData) {
    return this.http.post("http://localhost:8080/api/course/reference", data)


  }

  //TODO: Hala - Use App_base_url such as in User Service
  findCorRefTypes() {
    return this.http.get<CorRefType[]>("http://localhost:8080/api/course/findData")

  }
}
