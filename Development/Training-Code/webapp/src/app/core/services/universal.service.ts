import {Subject} from "rxjs/internal/Subject";


export class UniversalService {
  languageSource = new Subject();
  languageChage$ = this.languageSource.asObservable();

}
