import {CourseReference} from "./course-ref-dto.data";
import {SectionData} from "./section-data";
import {CorMainDetail} from "./cor-main-detail.data";


//TODO: Youssef - rename class to CourseDTO
//TODO: Youssef - rename file to course-dto.data
export class CourseDTO {
  //TODO: Hala - should be references
  references: CourseReference[] = [];

  //TODO: Yara - should be sections
  sections : SectionData[] = [];

  //TODO: Youssef - should have mainDetails Object here
  detail : CorMainDetail ;
}

