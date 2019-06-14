import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {ResultSet} from "../../data/result-set.model";

@Component({
  selector: 'aml-pagination',
  styleUrls: ['./aml-pagination.component.scss'],
  template: `
    <div class="pagination-block" *ngIf="resultSet.data?.length != 0">
      <div class="page-size-block">
        <select (change)="_onChangePageSize()" class="form-control" [(ngModel)]="pageSize">
          <option [ngValue]="5">5</option>
          <option [ngValue]="10">10</option>
          <option [ngValue]="20">20</option>
          <option [ngValue]="25">25</option>
        </select>
      </div>
      <label>{{resultSet.total}} Records</label>
      <pagination-controls class="pagination justify-content-center" id="{{paginationID}}"
                 (pageChange)="_onChangePageNum($event)"
                 previousLabel="Previous" nextLabel="Next">
      </pagination-controls>
    </div>
    
  `
})
export class AMLPaginationComponent implements OnInit {

  @Output() changePageSize = new EventEmitter<number>();
  @Output() changePage = new EventEmitter();
  @Input() paginationID: string;
  @Input() resultSet : ResultSet;

  pageSize: number = 5;

  constructor(){}

  ngOnInit(){}

  _onChangePageSize(){
    this.changePageSize.emit(this.pageSize);
  }

  _onChangePageNum(data){
    this.changePage.emit(data-1);
  }
}
