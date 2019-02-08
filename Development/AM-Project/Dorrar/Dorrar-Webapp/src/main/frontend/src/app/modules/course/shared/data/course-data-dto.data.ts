import {CourseReference} from "./course-ref-dto.data";
import {SectionData} from "./section-data";


//TODO: Youssef - rename class to CourseDTO
//TODO: Youssef - rename file to course-dto.data
export class CourseData {
  //TODO: Hala - should be references
  reference: CourseReference[] = [];

  //TODO: Yara - should be sections
  sections : SectionData[] = [];

  //TODO: Youssef - should have mainDetails Object here
}

