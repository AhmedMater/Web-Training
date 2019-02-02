import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CorRefType} from "./data/cor-ref-type-dto.data";
import {CourseData} from "./data/course-data-dto.data";

@Injectable()
export class CourseService {

  constructor(private http:HttpClient) { }

  //TODO: Rename function to saveCorReferences
  //TODO: Save all Course References using Course DTO Object
  references(data:CourseData){
    return this.http.post("http://localhost:8080/api/user/reference",data)


  }
  // findData(){
  //   return this.http.get<ReferenceTypeData>("http://localhost:8080/api/user/findData")
  //
  // }
  findCorRefTypes() {
    return this.http.get<CorRefType[]>("http://localhost:8080/api/user/findData")

  }
}
