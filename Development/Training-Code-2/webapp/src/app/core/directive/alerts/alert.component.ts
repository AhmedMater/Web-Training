import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {AlertInput} from "./data/alert-input";
import {TranslateService} from "@ngx-translate/core";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  providers: [TranslateService]
})
export class AlertComponent implements OnInit, OnChanges {

  @Input() alertInput: AlertInput;
  isOnInitCalled: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private translateService: TranslateService){

  }

  ngOnInit(){
    this.isOnInitCalled = true;
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.isOnInitCalled){
      if(changes.alertInput != null){
        this.alertInput = changes.alertInput.currentValue;
        if(this.alertInput.appear) {
          this.translateService.use(LocalStorageService.getCurrentLanguage()).subscribe(res => {});
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
