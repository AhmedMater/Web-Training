// import {Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from "@angular/core";
// import {ValData} from "./validator-input.data";
// import {TranslateService} from "@ngx-translate/core";
// import {Languages} from "../../data/enums/Languages";
// import {LanguageService} from "../../../services/language.service";
// import {ErrorData} from "./error.data";
// import {LocalStorageService} from "../../../services/local-storage.service";
//
// @Directive({
//   selector: '[validate]',
//   providers: [LanguageService]
// })
// export class ValidatorDirective implements OnInit, OnChanges {
//   @Input("validatorInput") valid: ValData;
//
//   private controlErrors: ErrorData[] = [
//     new ErrorData("required"),       new ErrorData("pattern"),     new ErrorData("emptyStr"),
//     new ErrorData("maxlength"),      new ErrorData("minlength"),   new ErrorData("invalidWords"),
//     new ErrorData("min"),            new ErrorData("max"),         new ErrorData("invalidFromDept"),
//     new ErrorData("inPast"),         new ErrorData("isHoliday"),   new ErrorData("repeatedChars"),
//     new ErrorData("notInSequence"),  new ErrorData("notUnique"),   new ErrorData("invalidEmail"),
//     new ErrorData("notInFuture"),  new ErrorData("notInPast"), new ErrorData("invalidDueDate"),
//     new ErrorData("invalidReportID")
//   ];
//
//   private formControlName: string;
//
//   private translationKey: string;
//   private translatedTxt: string;
//
//   private isNgOnInitCalled: boolean = false;
//
//   constructor(private renderer: Renderer2,
//               private el: ElementRef,
//               private localStorageService: LocalStorageService,
//               private translateService: TranslateService,
//               private langService: LanguageService) {
//   }
//
//   ngOnInit() {
//     this.evaluateFormControlName();
//     this.isNgOnInitCalled = true;
//   }
//
//   ngOnChanges(changes: SimpleChanges) {
//     if (this.isNgOnInitCalled) {
//       this.evaluateFormControlName();
//       this.validate();
//     }
//   }
//
//   evaluateFormControlName(){
//     let tagAttributes = this.el.nativeElement.attributes;
//     if(tagAttributes['formcontrolname'] != null)
//       this.formControlName = tagAttributes['formcontrolname'].nodeValue;
//
//   }
//   createErrorTag(error: ErrorData, currentLang: Languages) {
//     let errorDivID = this.formControlName + "_ValDiv_" + error.error + "_" + currentLang;
//     this.translationKey = this.inputData.localizationPrefix + "." + this.formControlName
//       + ".formError." + error.error;
//
//     const div = this.renderer.createElement('div');
//     this.renderer.setAttribute(div, 'id', errorDivID);
//     this.renderer.setAttribute(div, 'class', 'invalid-feedback');
//
//     this.translateService.use(currentLang).subscribe();
//     this.translateService.get(this.translationKey).subscribe(res => {
//       this.translatedTxt = res;
//
//       if (this.translatedTxt == null)
//         return;
//
//       const text = this.renderer.createText(this.translatedTxt);
//       this.renderer.appendChild(div, text);
//       // if (this.el.nativeElement.attributes['matinput'] != null &&
//       //   this.el.nativeElement.attributes['ng-reflect-autocomplete'] != null) {
//       //   this.renderer.appendChild(this.el.nativeElement.parentElement.parentElement.parentElement, div);
//       // }else{
//         this.renderer.appendChild(this.el.nativeElement.parentElement, div);
//       // }
//
//       if(currentLang == Languages.AR) {
//         error.arCreated = true;
//         error.arDivID = errorDivID;
//       } else if(currentLang == Languages.EN) {
//         error.enCreated = true;
//         error.enDivID = errorDivID;
//       }
//     });
//   }
//
//   validate() {
//     if(this.inputData != undefined) {
//       if(this.formControlName == null)
//         this.evaluateFormControlName();
//
//       const currentLang: Languages = this.localStorageService.getCurrentLanguage();
//       let tags: HTMLCollection = this.el.nativeElement.parentElement.children;
//
//       for (let error of this.controlErrors) {
//         if (error.arCreated)
//           this.renderer.setAttribute(tags[error.arDivID], "hidden", "true");
//         if (error.enCreated)
//           this.renderer.setAttribute(tags[error.enDivID], "hidden", "true");
//       }
//
//       this.toggleValidClass(true);
//
//       for (let error of this.controlErrors) {
//         if (this.inputData.formData.get(this.formControlName).dirty
//           && this.inputData.formData.get(this.formControlName).hasError(error.error)) {
//
//           if (currentLang == Languages.AR){
//             if(!error.arCreated)
//               this.createErrorTag(error, currentLang);
//             else
//               this.renderer.removeAttribute(tags[error.arDivID], "hidden");
//           }
//           else if (currentLang == Languages.EN){
//             if(!error.enCreated)
//               this.createErrorTag(error, currentLang);
//             else
//               this.renderer.removeAttribute(tags[error.enDivID], "hidden");
//           }
//
//           this.toggleValidClass(false);
//           break;
//         }
//       }
//     }
//   }
//
//   toggleValidClass(valid: boolean){
//     if(valid) {
//       // This Condition is for the Material Auto-Complete
//       if (this.el.nativeElement.attributes['matinput'] != null &&
//         this.el.nativeElement.attributes['ng-reflect-autocomplete'] != null) {
//         this.renderer.removeClass(this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, "is-invalid");
//         this.renderer.addClass(this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, "is-valid");
//         // This Condition is for the Material DatePicker
//       } else if (this.el.nativeElement.attributes['ng-reflect-mat-datepicker'] != null) {
//         this.renderer.removeClass(this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, "is-invalid");
//         this.renderer.addClass(this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, "is-valid");
//       }else {
//         this.renderer.removeClass(this.el.nativeElement.parentElement.parentElement, "is-invalid");
//         this.renderer.addClass(this.el.nativeElement.parentElement.parentElement, "is-valid");
//       }
//     }else{
//       // This Condition is for the Material Auto-Complete
//       if (this.el.nativeElement.attributes['matinput'] != null && this.el.nativeElement.attributes['ng-reflect-autocomplete'] != null) {
//         this.renderer.removeClass(this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, "is-valid");
//         this.renderer.addClass(this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, "is-invalid");
//         // This Condition is for the Material DatePicker
//       } else if (this.el.nativeElement.attributes['ng-reflect-mat-datepicker'] != null) {
//         this.renderer.removeClass(this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, "is-valid");
//         this.renderer.addClass(this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, "is-invalid");
//       } else {
//         this.renderer.removeClass(this.el.nativeElement.parentElement.parentElement, "is-valid");
//         this.renderer.addClass(this.el.nativeElement.parentElement.parentElement, "is-invalid");
//       }
//
//     }
//   }
//
//   @HostListener('change') change() {
//     // console.log('change');
//     this.validate();
//   }
//   @HostListener('select') select() {
//     // console.log('select');
//     this.validate();
//   }
//   @HostListener('onSelect') onSelect() {
//     // console.log('onSelect');
//     this.validate();
//   }
//   @HostListener('onSelectionChange') onSelectionChange() {
//     // console.log('onSelectionChange');
//     this.validate();
//   }
//   @HostListener('ngModelChange') ngModelChange() {
//     // console.log('ngModelChange');
//     this.validate();
//   }
//   @HostListener('optionSelected') optionSelected() {
//     // console.log('optionSelected');
//     this.validate();
//   }
//   @HostListener('blur') onblur() {
//     // console.log('blur');
//     this.validate();
//   }
//   @HostListener('click') onClick() {
//     // console.log('click');
//     this.validate();
//   }
//   @HostListener('monthSelected') onMonthSelected() {
//     // console.log('monthSelected');
//     this.validate();
//   }
//   @HostListener('closedStream') onClosedStream() {
//     // console.log('closedStream');
//     this.validate();
//   }
//   @HostListener('openedStream') onOpenedStream() {
//     // console.log('openedStream');
//     this.validate();
//   }
//   @HostListener('dateChange') onDateChange() {
//     // console.log('dateChange');
//     this.validate();
//   }
//   @HostListener('dateInput') onDateInput() {
//     // console.log('dateInput');
//     this.validate();
//   }
//
// }
//
