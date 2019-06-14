import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigParam} from "../../../../../am-lib/src/lib/common/config-param";
import {UserVTO} from "./data/user-vto.model";
import {ResultSet} from "../../../../../am-lib/src/lib/generic/abstract-list/data/result-set.model";
import {AppConfigService} from "../../../../../am-lib/src/lib/services/app-init/app-config.service";
import {ListOptions} from "../../../../../am-lib/src/lib/generic/abstract-list/data/list-options.model";

@Injectable({
  providedIn: 'root'
})
export class AbstractListService {
  
  readonly BASE_URL: string = this.config.config.BACKEND_URL + '/abstractList';

  constructor(private http: HttpClient,
              private config: AppConfigService) { }
  
  findAll(filters: {
  
  }, options?: ListOptions){
    return this.http.get<ResultSet<UserVTO>>(this.BASE_URL);
  }
}
