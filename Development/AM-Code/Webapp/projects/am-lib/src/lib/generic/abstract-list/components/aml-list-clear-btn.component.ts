import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'aml-list-clear-btn',
  template: `
    <button type="submit" class="btn btn-danger ml-1 mr-1" (click)="forwardEvent()">
      <i class="fa fa-eraser"></i> {{'amLib.abstractList.filter.btn.clear' | translate}}
    </button>
  `
})
export class AmlListClearBtnComponent implements OnInit {
  @Output() click = new EventEmitter();
  
  forwardEvent(){
    this.click.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
