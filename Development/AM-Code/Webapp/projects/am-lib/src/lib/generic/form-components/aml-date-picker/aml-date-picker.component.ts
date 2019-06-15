import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {Languages} from "../../../services/language/language.enum";
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR, NgControl,
  ValidationErrors,
  Validator
} from "@angular/forms";
import {MatDatepickerInputEvent} from "@angular/material";
import {Moment} from "moment";
import {DateService} from "../../../services/date/date.service";

@Component({
  selector: 'aml-date-picker',
  template: `
    <div class="form-group">
      <label [attr.for]="idd">{{label}}</label>
      <mat-form-field>
        <input id="{{idd}}" class="form-control" #dateInput matInput
               [formControl]="ngControl.control"
               [matDatepicker]="expiryDateFrom">
        <mat-datepicker-toggle matSuffix [for]="expiryDateFrom"></mat-datepicker-toggle>
        <mat-datepicker #expiryDateFrom></mat-datepicker>
        <span class="fa fa-times clickable" (click)="clearField()" *ngIf="ngControl.control?.value != null"
              [ngClass]="{
              'date-close-ar': CURRENT_LANG == LANG.AR,
              'date-close-en': CURRENT_LANG == LANG.EN }"></span>
        <!--<aml-date-picker-remove [language]="CURRENT_LANG"-->
        <!--[formCont]="ngControl.control"></aml-date-picker-remove>-->
      </mat-form-field>
    </div>

    <!--<div class="form-group">-->
      <!--<label [attr.for]="idd">{{label}}</label>-->
      <!--<mat-form-field>-->
        <!--<input id="{{idd}}" class="form-control" #dateInput matInput-->
               <!--(dateInput)="onChange($event)" (dateChange)="onChange($event)"-->
               <!--[matDatepicker]="expiryDateFrom" (blur)="onChange(input.value)">-->
        <!--<mat-datepicker-toggle matSuffix [for]="expiryDateFrom"></mat-datepicker-toggle>-->
        <!--<mat-datepicker #expiryDateFrom></mat-datepicker>-->
        <!--&lt;!&ndash;<aml-date-picker-remove [language]="CURRENT_LANG"&ndash;&gt;-->
        <!--&lt;!&ndash;[formContName]="'expiryDateFrom'"></aml-date-picker-remove>&ndash;&gt;-->
      <!--</mat-form-field>-->
    <!--</div>-->
  `,
  styleUrls: ['./aml-date-picker.component.scss']//,
  // providers: [{
  //   provide: NG_VALUE_ACCESSOR,
  //   useExisting: AmlDatePickerComponent,
  //   multi: true
  // },
  //   {
  //     provide: NG_VALIDATORS,
  //     useExisting: forwardRef(() => AmlDatePickerComponent),
  //     multi: true,
  //   } ]
})
export class AmlDatePickerComponent{// implements ControlValueAccessor, Validator, AfterViewInit, OnChanges  {
  CURRENT_LANG: Languages;
  LANG: typeof Languages = Languages;
  //
  @Input() idd = "";
  @Input() label = "";
  
  
  clearField() {
    this.ngControl.control.reset();
  }
  // // @Input() placeHolder:string;
  // // @Input() dateFormControl:FormControl = new FormControl();
  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   console.log(event.value);
  // }
  // //The internal data model for form control value access
  // private innerValue: any = '';
  //
  // // get reference to the input element
  // @ViewChild('dateInput')  inputRef:ElementRef;
  //
  // // errors for the form control will be stored in this array
  // errors:Array<any> = ['This field is required'];
  //
  constructor(public ngControl: NgControl) { }
  //
  // ngOnInit() {
  // }
  //
  //
  // //Lifecycle hook. angular.io for more info
  // ngAfterViewInit(){
  //   // set placeholder default value when no input given to placeHolder property
  //   // if(this.placeHolder === undefined){
  //   //   this.placeHolder = "Enter " + this.label;
  //   // }
  //   //
  //   // RESET the custom input form control UI when the form control is RESET
  //   // this.dateFormControl.valueChanges.subscribe(
  //   //   () => {
  //   //     // check condition if the form control is RESET
  //   //     if (this.dateFormControl.value == "" || this.dateFormControl.value == null || this.dateFormControl.value == undefined) {
  //   //       this.innerValue = "";
  //   //       this.inputRef.nativeElement.value = "";
  //   //     }
  //   //   }
  //   // );
  // }
  //
  // // event fired when input value is changed . later propagated up to the form control using the custom value accessor interface
  // onChange(event){
  //   console.log(event);
  //   this.innerValue = event.value;
  //   this.propagateChange(this.innerValue);
  // }
  //
  // //propagate changes into the custom form control
  // propagateChange = (_: any) => {
  //   console.log(_)
  // };
  //
  // //From ControlValueAccessor interface
  // writeValue(value: any) {
  //   this.innerValue = value;
  // }
  //
  // //From ControlValueAccessor interface
  // registerOnChange(fn: any) {
  //   this.propagateChange = fn;
  //   console.log(fn);
  // }
  //
  // //From ControlValueAccessor interface
  // registerOnTouched(fn: any) {
  //   console.log(fn);
  //
  // }
  //
  //
  //
  //
  //
  // //get accessor
  // get value(): any {
  //   return this.innerValue;
  // };
  //
  // //set accessor including call the onchange callback
  // set value(v: any) {
  //   if (v !== this.innerValue) {
  //     this.innerValue = v;
  //   }
  // }
  //
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  //
  // }
  //
  // setDisabledState(isDisabled: boolean): void {
  // }
  //
  // registerOnValidatorChange(fn: () => void): void {
  //   console.log(fn);
  // }
  //
  // validate(control: AbstractControl): ValidationErrors | null {
  //   console.log(control);
  //   // console.log(control.va);
  //   return null;
  // }
}
