import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aml-unauthorized',
  template: `
    <div class="col-md-9">
      <div class="create-mail">
        <div class="section-details tab-content-details p-0">
          <h5 class="mt-3">
            <span class="nav-link-text"></span>
            {{'emptyPage.unAuthorized' | translate}}
          </h5>
        </div>
      </div>
    </div>
  `
})
export class UnauthorizedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
