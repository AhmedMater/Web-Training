import {Component, Input} from '@angular/core';
import {Languages} from "../../language/language.enum";
import {NgControl} from "@angular/forms";
import {LanguageService} from "../../language/language.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'aml-date-picker',
  template: `
    <div class="form-group">
      <label [attr.for]="idd">{{label | translate}}</label>
      <mat-form-field>
        <input id="{{idd}}" class="form-control" matInput
               [formControl]="ngControl.control"
               [matDatepicker]="expiryDateFrom">
        <mat-datepicker-toggle matSuffix [for]="expiryDateFrom"></mat-datepicker-toggle>
        <mat-datepicker #expiryDateFrom></mat-datepicker>
        <span class="fa fa-times clickable" (click)="clearField()" *ngIf="ngControl.control?.value != null"
              [ngClass]="{'date-close-ar': CURRENT_LANG == LANG.AR, 'date-close-en': CURRENT_LANG == LANG.EN }"></span>
      </mat-form-field>
    </div>
  `,
  styleUrls: ['./aml-date-picker.component.scss']
})
export class AMLDatePickerComponent{
  
  CURRENT_LANG: Languages;
  LANG: typeof Languages = Languages;
  
  @Input() idd = "";
  @Input() label = "";
  
  constructor(public ngControl: NgControl,
              private languageService: LanguageService,
              private translateService: TranslateService) {
    this.CURRENT_LANG = this.languageService.getCurrentLanguage();
    this.translateService.onLangChange.subscribe(res => this.CURRENT_LANG = this.languageService.getCurrentLanguage());
  }
  
  clearField() {
    this.ngControl.control.reset();
  }
}
