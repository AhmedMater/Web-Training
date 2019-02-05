import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {sectionData} from "./data/section-data";
import {CourseData} from "../../course/shared/data/course-data-dto.data";


@Injectable()
export class  SectionsService {

  constructor(private http : HttpClient ) {
  }

  //TODO: Yara - Use App_base_url such as in User Service
  addNewSections( data : CourseData) {
    return this.http.post('http://localhost:8080/api/course/5/section', data);

  }
}
