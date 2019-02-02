import {Action} from "./action";
import {Page} from "./page";

//TODO: change class labelEN to Role
export class Role {
   id :number ;
  //TODO: wrong text
   labelEN : string ;
  //TODO: use normal Array[] instead of Object Array
  actionList :Action[];
  //TODO: use normal Array[] instead of Object Array
  pageList:Page[] ;
}
