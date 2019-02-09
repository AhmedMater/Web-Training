import {ConfigParam} from "../../../infrastructure/common/config-param";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CorRefType} from "../../../modules/course/shared/data/cor-ref-type-dto.data";
@Injectable()

export  class LookupService {
  BASE_URL : string = ConfigParam.APP_BASE_URL + "/lookup";


  constructor(private http:HttpClient) {
  }

  findCorRefTypes() {
    return this.http.get<CorRefType[]>(this.BASE_URL + "/corRefType")

  }

}
