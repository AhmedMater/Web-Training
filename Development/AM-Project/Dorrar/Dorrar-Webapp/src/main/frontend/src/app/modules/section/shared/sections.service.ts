import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {sectionData} from "./data/section-data";
import {CourseData} from "../../course/shared/data/course-data-dto.data";


@Injectable()
export class  SectionsService
{

  constructor(private http : HttpClient ) {
  }

  addNewSections( data : CourseData)
  {
    return this.http.post('http://localhost:8080/api/create/section', data);


  }
}
