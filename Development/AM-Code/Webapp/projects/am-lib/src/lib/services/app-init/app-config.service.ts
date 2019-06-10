import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppInit} from "./app-init.model";
import {ConfigParam} from "../../common/config-param";

@Injectable()
export class AppConfigService {
  static DEV_ENV: string = ConfigParam.ASSETS_CONFIG + '/dev-env-config.json';
  static TEST_ENV: string = ConfigParam.ASSETS_CONFIG + '/test-env-config.json';
  private configs: AppInit;

  constructor(private http: HttpClient) {
  }

  loadAppConfig(env: string) {
    return this.http.get<AppInit>(env).toPromise().then(data => {
      this.configs = data;
      ConfigParam.APP_BASE_URL = data.DORRAR_URL;
    });
  }

  getConfig() {
    return this.configs;
  }
}
