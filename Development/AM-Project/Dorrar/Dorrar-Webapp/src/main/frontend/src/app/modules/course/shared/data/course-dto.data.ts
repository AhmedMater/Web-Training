import {CourseReference} from "./course-ref-dto.data";
import {SectionData} from "./section-data";
import {CorMainDetail} from "./cor-main-detail.data";


export class CourseDTO {
  references: CourseReference[] = [];
  sections : SectionData[] = [];
  detail : CorMainDetail ;
}

