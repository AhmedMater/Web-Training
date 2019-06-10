
export enum AngularFullRoutes {
  LOGIN = "/login",
}

export function replaceUserID(route:string, userID) {
  return route.replace("${userID}",userID);
}
