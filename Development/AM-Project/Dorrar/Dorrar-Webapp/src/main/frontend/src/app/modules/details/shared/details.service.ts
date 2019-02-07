import {Injectable} from "@angular/core";
import {CourseDetailsData} from "./data/course-details.data";
import {HttpClient} from "@angular/common/http";
import {OptionsDropList} from "./data/optionDrobList";
import {LevelDropList} from "./data/LevelDropList";

@Injectable()
export class DetailsService {

  constructor(private http : HttpClient) {
  }

  //TODO: use CourseDTO instead
  creatNewCourse(data : CourseDetailsData){
    return this.http.post("http://localhost:8080/api/course/new", data);

  }
  findType(){
    return this.http.get<OptionsDropList[]>("http://localhost:8080/api/course/findType");
  }
  findLevel(){
    return this.http.get<LevelDropList[]>("http://localhost:8080/api/course/findLevel")
  }

}
