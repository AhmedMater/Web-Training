import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'aml-list-search-btn',
  template: `
    <button type="submit" class="btn btn-success ml-1 mr-1">
      <i class="fa fa-search"></i> {{'amLib.abstractList.filter.btn.search' | translate}}
    </button>
  `
})
export class AmlListSearchBtnComponent implements OnInit {
  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
