
import {OptionsDropList} from "./optionDrobList";

//TODO: Youssef - rename class name to CorMainDetail
//TODO: Youssef - rename file name to cor-main-detail.data
export class CourseDetailsData {
  courseName : string;
  duration: number;
  startDate : Date;
  //TODO: Youssef - rename variable name to corTypeID of type number
  typeID : OptionsDropList;
  //TODO: Youssef - rename variable name to corLevelID of type number
  levelID : number;
  description : string;
}
