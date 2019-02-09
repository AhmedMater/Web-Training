import {SectionData} from "./section-data";
import {CorMainDetail} from "./cor-main-detail.data";
import {CourseRefDTO} from "./course-ref-dto.data";


//TODO: Youssef - move to shared/data/course/
export class CourseDTO {
  references: CourseRefDTO[] = [];
  sections : SectionData[] = [];
  detail : CorMainDetail ;
}

