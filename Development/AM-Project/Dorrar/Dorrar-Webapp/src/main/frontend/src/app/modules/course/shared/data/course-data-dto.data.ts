import {CourseReference} from "./course-ref-dto.data";
import {sectionData} from "../../../section/shared/data/section-data";


<!-- TODO: Youssef - should be CourseDTO-->
export class CourseData {
  <!-- TODO: Hala - should be references-->
  reference: CourseReference[] = [];

  <!-- TODO: Yara - should be sections-->
  section : sectionData[] = [];
}

