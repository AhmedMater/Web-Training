import {Component, Input, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {Languages} from "../../../services/language/language.enum";

@Component({
  selector: 'aml-date-picker-remove',
  styles: [`
    .date-close-ar {
        position: relative;
        left: 20px !important;
    }
    .date-close-en {
        position: relative;
        right: 20px !important;
    }
  `],
  template: `
  
  `
})
export class AmlDatePickerClearComponent{
  @Input() language: Languages;
  @Input() formContName: string;
  @Input() formGroup: FormGroup;
  LANG: typeof Languages = Languages;

  constructor(){
  }

  clearField() {
    this.formGroup.get(this.formContName).reset();
  }
}
