import {Component, OnInit} from '@angular/core';
import {ConfigParam} from "../common/config-param";

@Component({
  selector: 'aml-not-found',
  template: `
    <div class="alert no-result mt-5">
      <img [src]="imgPath" alt="">
      <h3>Page Not Found</h3>
    </div>
  `
})
export class NotFoundComponent implements OnInit {
  imgPath: string = '../../..' + ConfigParam.ASSETS_IMG + '/no-data.svg';

  constructor() { }

  ngOnInit() {
  }

}
