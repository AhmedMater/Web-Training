import {AngularFullRoutes} from "./full-routes.enum";


export class RouterService{
  replaceIDs(route: AngularFullRoutes, placeholders: string[], values: string[]) {
    let routeStr: string = route;
    
    for(let i=0; i<this.placeholders.length; i++)
      routeStr = this.routeStr.replace('${' + placeholders[i] + '}', values[i])
    
    return routeStr;
  }
}