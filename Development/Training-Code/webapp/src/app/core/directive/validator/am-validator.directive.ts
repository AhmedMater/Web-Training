import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges
} from "@angular/core";
import {FormGroup, ValidationErrors} from "@angular/forms";
import {forEach} from "@angular/router/src/utils/collection";
import {TranslateService} from "@ngx-translate/core";
import {LocalStorageService} from "../../services/local-storage.service";
import {AMError} from "./data/am-error.data";
import {ValidatorInput} from "./data/validator-input.data";
import {Languages} from "../../data/enums/languages.enum";

@Directive({
  selector: '[am-validate]',
  providers: [TranslateService]
})
export class AMValidatorDirective implements OnInit, OnChanges {
  @Input("data") inputData: ValidatorInput;
  @Input("parent") parentFormControl: string = null;
  @Input("isParent") isParentFormGroup: boolean = false;

  private controlErrors: AMError[] = [
    new AMError("required"),    new AMError("pattern"),
    new AMError("maxlength"),   new AMError("minlength"),
    new AMError("min"),         new AMError("max"),
    new AMError("email"),       new AMError("emptyStr"),        new AMError("noMatch"),
    new AMError("inPast"),      new AMError("notInSequence")
  ];

  private isInGroupForm: boolean = false;
  private formControlName: string;

  private translationKey: string;
  private translatedTxt: string;

  private isNgOnInitCalled: boolean = false;
  private parentClass = {
    invalid: ["has-feedback", "has-error"],
    valid: ["has-success"]
  };

  constructor(private renderer: Renderer2,
              private el: ElementRef,
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

  private validate() {
    if(this.inputData != undefined) {
      if (this.formControlName == null)
        this.evaluateFormControlName();

      const currentLang: Languages = LocalStorageService.getCurrentLanguage();
      let tags: HTMLCollection;

      if(this.isParentFormGroup)
        tags = this.el.nativeElement.children;
      else
        tags = this.el.nativeElement.parentElement.children;

      for (let error of this.controlErrors)
        if (error.isCreated[currentLang])
          this.renderer.setAttribute(tags[error.divID[currentLang]], "hidden", "true");

      this.toggleValidClass(true);

      for (let error of this.controlErrors) {
        if (this.validateSimpleField(error)) {

          if(!error.isCreated[currentLang])
            this.createErrorTag(error, currentLang);
          else
            this.renderer.removeAttribute(tags[error.divID[currentLang]], "hidden");

          this.toggleValidClass(false);
          break;
        }
      }
    }
  }

  private validateSimpleField(error: AMError): boolean{
    let isValid: boolean = false;

    if(!this.isInGroupForm)
      isValid = this.inputData.formData.get(this.formControlName).touched
        && this.inputData.formData.get(this.formControlName).hasError(error.error);
    else
      isValid = this.inputData.formData.get(this.parentFormControl).get(this.formControlName).touched
        && this.inputData.formData.get(this.parentFormControl).get(this.formControlName).hasError(error.error);

    return isValid;
  }

  private createErrorTag(error: AMError, currentLang: Languages) {
    let errorDivID = this.formControlName + "_ValDiv_" + error.error + "_" + currentLang;
    this.translationKey = this.inputData.localizationPrefix + "." + this.formControlName
      + ".formError." + error.error;

    const div = this.renderer.createElement('div');
    this.renderer.setAttribute(div, 'id', errorDivID);
    this.renderer.setAttribute(div, 'class', 'form-text');
    this.renderer.setAttribute(div, 'class', 'text-muted');
    this.renderer.setAttribute(div, 'class', 'text-danger');

    this.translateService.use(currentLang).subscribe(res=>console.log(res));
    this.translateService.get(this.translationKey).subscribe(res => {
      this.translatedTxt = res;

      if (this.translatedTxt == null)
        return;

      const text = this.renderer.createText(this.translatedTxt);
      this.renderer.appendChild(div, text);

      if(this.isParentFormGroup)
        this.renderer.appendChild(this.el.nativeElement, div);
      else
        this.renderer.appendChild(this.el.nativeElement.parentElement, div);

      error.isCreated[currentLang] = true;
      error.divID[currentLang] = errorDivID;
    });
  }
  private evaluateFormControlName(){
    if(this.parentFormControl != null)
      this.isInGroupForm = true;

    if(this.isParentFormGroup) {
      let tagAttributes = this.el.nativeElement.attributes;
      if (tagAttributes['formGroupName'] != null)
        this.formControlName = tagAttributes['formGroupName'].nodeValue;
    } else{
      let tagAttributes = this.el.nativeElement.attributes;
      if (tagAttributes['formcontrolname'] != null)
        this.formControlName = tagAttributes['formcontrolname'].nodeValue;
    }

  }
  private toggleValidClass(valid: boolean)  {
    let parent;

    if(this.isParentFormGroup){
      parent = this.el.nativeElement;
    }else {
      // This Condition is for the Material Auto-Complete
      if (this.el.nativeElement.attributes['matinput'] != null &&
        this.el.nativeElement.attributes['ng-reflect-autocomplete'] != null)
        parent = this.el.nativeElement.parentElement.parentElement.parentElement.parentElement
          .parentElement.parentElement.parentElement.parentElement;

      // This Condition is for the Material DatePicker
      else if (this.el.nativeElement.attributes['ng-reflect-mat-datepicker'] != null)
        parent = this.el.nativeElement.parentElement.parentElement.parentElement.parentElement
          .parentElement.parentElement;
      else
        parent = this.el.nativeElement.parentElement.parentElement;
    }

    if(valid){
      this.changeParentClasses(parent, this.parentClass.invalid, true);
      this.changeParentClasses(parent, this.parentClass.valid, false);
    } else {
      this.changeParentClasses(parent, this.parentClass.valid, true);
      this.changeParentClasses(parent, this.parentClass.invalid, false);
    }
  }
  private changeParentClasses(element, _classes: string[], remove: boolean){
    if(remove)
      for(let _class of _classes)
        this.renderer.removeClass(element, _class);
    else
      for(let _class of _classes)
        this.renderer.addClass(element, _class);
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

