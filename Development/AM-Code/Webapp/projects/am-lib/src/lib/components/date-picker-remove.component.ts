import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {Languages} from "../services/language/language.enum";

@Component({
  selector: 'aml-date-picker-discard',
  template: `
    <span class="fa fa-times clickable" (click)="clearField()" *ngIf="formGroup.getRawValue()[formContName] != null"
          [ngClass]="{ 
              'cancelDateSelectionAR ml-4': language == LANG.AR,
              'cancelDateSelectionEN mr-4': language == LANG.EN }"></span>
  `
})
export class DatePickerRemoveComponent{
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
