import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SectionData} from "./data/section-data";
import {CourseData} from "../../course/shared/data/course-data-dto.data";


@Injectable()
export class  SectionsService {

  BASE_URL : string ="http://localhost:8080/api/course";

  constructor(private http : HttpClient ) {
  }

  //TODO: Yara - Move function to course/shared/course.service
  addNewSections( data : CourseData) {
    return this.http.post( this.BASE_URL +"/1/section", data);

  }
}
