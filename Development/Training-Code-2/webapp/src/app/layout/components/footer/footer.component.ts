import { Component, OnInit } from '@angular/core';
import {FullRoutes} from "../../../core/data/enums/full-routes.enum";

@Component({
  selector: 'amt-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  ROUTES: typeof FullRoutes = FullRoutes;

  constructor() { }

  ngOnInit() {
  }

}
