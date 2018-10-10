import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {AlertInput} from "./alert-input";
import {LocalStorageService} from "../../services/local-storage.service";
import {TranslateService} from "@ngx-translate/core";
import {UniversalService} from "../../services/universal.service";

@Directive({
  selector: '[requestResponse]'
})
export class RequestResponse implements OnInit, OnChanges{

  @Input() alertInput: AlertInput;
  isOnInitCalled: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private translateService: TranslateService,
    private universalService: UniversalService,
    private renderer: Renderer2,
    private el: ElementRef){
  }

  ngOnInit(){
    const div = this.renderer.createElement('div');
    this.renderer.setAttribute(div, 'class', 'alert');
    this.renderer.setAttribute(div, 'class', 'alert-dismissible');
    this.renderer.setAttribute(div, 'class', 'fade');
    this.renderer.setAttribute(div, 'class', 'show');

    const closeBtn = this.renderer.createElement('button');
    this.renderer.setAttribute(div, 'class', 'close');
    this.isOnInitCalled = true;
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.isOnInitCalled){
      if(changes.alertInput != null){
        this.alertInput = changes.alertInput.currentValue;
        if(this.alertInput.appear) {
          this.translateService.use(LocalStorageService.getCurrentLanguage()).subscribe(res=>{});
          this.translateService.get(this.alertInput.localizationKey).subscribe(
            res => this.alertInput.message = res,
            error1 => console.log(error1)
          );
        }
      }
    }
  }

  onCloseAlert(){
    this.alertInput.appear = false;
  }
}
