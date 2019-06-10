import {Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {FormGroup} from "@angular/forms";
import {ErrorModel} from "./error.model";
import {LocalStorageService} from "../../services/local-storage.service";
import {Languages} from "../../common/language.enum";

@Directive({
  selector: '[validate]'
})
export class ValidatorDirective implements OnInit, OnChanges {
  @Input() form: FormGroup;
  @Input() localPrefix: string;
  @Input() revalidate: boolean;

  private controlErrors: ErrorModel[] = [
    new ErrorModel("required"),       new ErrorModel("pattern"),     new ErrorModel("emptyStr"),
    new ErrorModel("maxlength"),      new ErrorModel("minlength"),   new ErrorModel("invalidWords"),
    new ErrorModel("min"),            new ErrorModel("max"),         new ErrorModel("invalidFromDept"),
    new ErrorModel("inPast"),         new ErrorModel("isHoliday"),   new ErrorModel("repeatedChars"),
    new ErrorModel("notInSequence"),  new ErrorModel("notUnique"),   new ErrorModel("invalidEmail"),
    new ErrorModel("notInFuture"),    new ErrorModel("notInPast"),   new ErrorModel("invalidDueDate"),
    new ErrorModel("invalidInteger"), new ErrorModel("maxDate"),     new ErrorModel("minDate"),
    new ErrorModel("invalidReportID")
  ];

  private formControlName: string;

  private translationKey: string;
  private translatedTxt: string;

  private isNgOnInitCalled: boolean = false;

  constructor(private renderer: Renderer2,
              private el: ElementRef,
              private localStorageService: LocalStorageService,
              private translateService: TranslateService) {
  }

  ngOnInit() {
    this.evaluateFormControlName();
    this.isNgOnInitCalled = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.isNgOnInitCalled) {
      this.evaluateFormControlName();
      this.validate();
    }
  }

  evaluateFormControlName(){
    let tagAttributes = this.el.nativeElement.attributes;
    if(tagAttributes['formcontrolname'] != null)
      this.formControlName = tagAttributes['formcontrolname'].nodeValue;

  }
  createErrorTag(error: ErrorModel, currentLang: Languages) {
    let errorDivID = this.formControlName + "_ValDiv_" + error.error + "_" + currentLang;
    this.translationKey = this.localPrefix + "." + this.formControlName + "." + error.error;

    const div = this.renderer.createElement('div');
    this.renderer.setAttribute(div, 'id', errorDivID);
    this.renderer.setAttribute(div, 'class', 'invalid-feedback');

    this.translateService.use(currentLang).subscribe();
    this.translateService.get(this.translationKey).subscribe(res => {
      this.translatedTxt = res;

      if (this.translatedTxt == null)
        return;

      const text = this.renderer.createText(this.translatedTxt);
      this.renderer.appendChild(div, text);
      this.renderer.appendChild(this.el.nativeElement.parentElement, div);

      if(currentLang == Languages.AR) {
        error.arCreated = true;
        error.arDivID = errorDivID;
      } else if(currentLang == Languages.EN) {
        error.enCreated = true;
        error.enDivID = errorDivID;
      }
    });
  }

  validate() {
    if(this.form != undefined) {
      if(this.formControlName == null)
        this.evaluateFormControlName();

      const currentLang: Languages = this.localStorageService.getCurrentLanguage();
      let tags: HTMLCollection = this.el.nativeElement.parentElement.children;

      for (let error of this.controlErrors) {
        if (error.arCreated)
          this.renderer.setAttribute(tags[error.arDivID], "hidden", "true");
        if (error.enCreated)
          this.renderer.setAttribute(tags[error.enDivID], "hidden", "true");
      }

      this.toggleValidClass(true);

      for (let error of this.controlErrors) {
        if ( (this.form.get(this.formControlName).dirty || this.form.get(this.formControlName).touched)
          && this.form.get(this.formControlName).hasError(error.error)) {

          if (currentLang == Languages.AR){
            if(!error.arCreated)
              this.createErrorTag(error, currentLang);
            else
              this.renderer.removeAttribute(tags[error.arDivID], "hidden");
          }
          else if (currentLang == Languages.EN){
            if(!error.enCreated)
              this.createErrorTag(error, currentLang);
            else
              this.renderer.removeAttribute(tags[error.enDivID], "hidden");
          }

          this.toggleValidClass(false);
          break;
        }
      }
    }
  }

  toggleValidClass(valid: boolean){
    if(valid) {
      // This Condition is for the Material Auto-Complete
      if (this.el.nativeElement.attributes['matinput'] != null &&
        this.el.nativeElement.attributes['ng-reflect-autocomplete'] != null) {
        this.renderer.removeClass(this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, "is-invalid");
        this.renderer.addClass(this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, "is-valid");
        // This Condition is for the Material DatePicker
      } else if (this.el.nativeElement.attributes['ng-reflect-mat-datepicker'] != null) {
        this.renderer.removeClass(this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, "is-invalid");
        this.renderer.addClass(this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, "is-valid");
      }else {
        this.renderer.removeClass(this.el.nativeElement.parentElement.parentElement, "is-invalid");
        this.renderer.addClass(this.el.nativeElement.parentElement.parentElement, "is-valid");
      }
    }else{
      // This Condition is for the Material Auto-Complete
      if (this.el.nativeElement.attributes['matinput'] != null && this.el.nativeElement.attributes['ng-reflect-autocomplete'] != null) {
        this.renderer.removeClass(this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, "is-valid");
        this.renderer.addClass(this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, "is-invalid");
        // This Condition is for the Material DatePicker
      } else if (this.el.nativeElement.attributes['ng-reflect-mat-datepicker'] != null) {
        this.renderer.removeClass(this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, "is-valid");
        this.renderer.addClass(this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, "is-invalid");
      } else {
        this.renderer.removeClass(this.el.nativeElement.parentElement.parentElement, "is-valid");
        this.renderer.addClass(this.el.nativeElement.parentElement.parentElement, "is-invalid");
      }

    }
  }

  @HostListener('change') change() {
    // console.log('change');
    this.validate();
  }
  @HostListener('select') select() {
    // console.log('select');
    this.validate();
  }
  @HostListener('onSelect') onSelect() {
    // console.log('onSelect');
    this.validate();
  }
  @HostListener('onSelectionChange') onSelectionChange() {
    // console.log('onSelectionChange');
    this.validate();
  }
  @HostListener('ngModelChange') ngModelChange() {
    // console.log('ngModelChange');
    this.validate();
  }
  @HostListener('optionSelected') optionSelected() {
    // console.log('optionSelected');
    this.validate();
  }
  @HostListener('blur') onblur() {
    // console.log('blur');
    this.validate();
  }
  @HostListener('click') onClick() {
    // console.log('click');
    this.validate();
  }
  @HostListener('monthSelected') onMonthSelected() {
    // console.log('monthSelected');
    this.validate();
  }
  @HostListener('closedStream') onClosedStream() {
    // console.log('closedStream');
    this.validate();
  }
  @HostListener('openedStream') onOpenedStream() {
    // console.log('openedStream');
    this.validate();
  }
  @HostListener('dateChange') onDateChange() {
    // console.log('dateChange');
    this.validate();
  }
  @HostListener('dateInput') onDateInput() {
    // console.log('dateInput');
    this.validate();
  }

}

