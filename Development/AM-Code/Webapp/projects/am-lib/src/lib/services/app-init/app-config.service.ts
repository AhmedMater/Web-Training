import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppInit} from "./app-init.model";
import {ConfigParam} from "../../common/config-param";

@Injectable()
export class AppConfigService {
  static DEV_ENV: string =  '/dev-env-config.json';
  static TEST_ENV: string = '/test-env-config.json';
  
  config: AppInit;

  constructor(private http: HttpClient) {
  }

  loadAppConfig(env: string) {
    return this.http.get<AppInit>(ConfigParam.ASSETS_CONFIG + env).toPromise().then(data => {
      this.config = data;
    });
  }
}
