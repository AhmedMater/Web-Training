import {SectionData} from "./section-data";
import {CourseRefDTO} from "./course-ref-dto.data";


//TODO: Youssef - rename class to CourseDTO
//TODO: Youssef - rename file to course-dto.data
export class CourseData {
  //TODO: Hala - should be references
  references: CourseRefDTO[] = [];

  //TODO: Yara - should be sections
  sections : SectionData[] = [];

  //TODO: Youssef - should have mainDetails Object here
}

