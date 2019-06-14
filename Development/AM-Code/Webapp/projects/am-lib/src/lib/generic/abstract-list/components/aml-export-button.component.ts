import {Component, EventEmitter, Output} from "@angular/core";
import {ExportTypes} from "../data/export-types.enum";


@Component({
  selector: 'aml-export-button',
  styles: [`
      .fa {
          padding-right: 10px;
      }
  `],
  template: `
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle ml-1 mr-1" type="button" id="exportDropdownBtn"
              data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
        <i class="fa fa-external-link"></i> {{'amLib.abstractList.filter.export.btnLabel' | translate}}
      </button>
      
      <div class="dropdown-menu" aria-labelledby="exportDropdownBtn">
        <a class="dropdown-item clickable" (click)="onExport(EXPORT_TYPES.PDF)">
          <i class="fa fa-file-pdf-o"></i>{{'amLib.abstractList.filter.export.pdf' | translate}}
        </a>
        <a class="dropdown-item clickable" (click)="onExport(EXPORT_TYPES.WORD)">
          <i class="fa fa-file-word-o"></i>{{'amLib.abstractList.filter.export.doc' | translate}}
        </a>
        <a class="dropdown-item clickable" (click)="onExport(EXPORT_TYPES.EXCEL)">
          <i class="fa fa-file-excel-o"></i>{{'amLib.abstractList.filter.export.xls' | translate}}
        </a>
        <a class="dropdown-item clickable" (click)="onExport(EXPORT_TYPES.EXCEL)">
          <i class="fa fa-file-excel-o"></i>{{'amLib.abstractList.filter.export.csv' | translate}}
        </a>
      </div>
    </div>
  `
})
export class AMLExportButtonComponent {
  EXPORT_TYPES: typeof ExportTypes = ExportTypes;
  @Output() click = new EventEmitter<ExportTypes>();
  
  onExport(type){
    this.click.emit(type);
  }
}