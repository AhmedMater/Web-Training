
//TODO: no need for Data in CourseDetailsData
import {OptionsDropList} from "./optionDrobList";

export class CourseDetailsData {
  courseName : string;
  duration: number;
  startDate : Date;
  typeID : OptionsDropList;
  levelID : number;
  description : string;
}
