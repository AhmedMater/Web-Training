import {ListRS} from "./data/list-resultset.data";
import {FormGroup} from "@angular/forms";
import {ExportTypes} from "./data/export-types.enum";
import {Languages} from "../../data/language.enum";


export interface IList<U, F> {
  listRS: ListRS<U>;
  formData: FormGroup;
  filters: F;

  EXPORT_TYPES: typeof ExportTypes;
  CURRENT_LANG: Languages;
  LANG: typeof Languages;

  onClear();
  loadFiltersFromFormData();
  mapQueryParamsToFormData();
  // getHttpParameters();

  onChangePage(pageNum)
  onChangePageSize(pageSize);
  onSorting(sortBy, sort);
  onSearch();
  onExport();
}
