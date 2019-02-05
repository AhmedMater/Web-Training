import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CourseService} from "../../shared/course.service";

import {CorRefType} from "../../shared/data/cor-ref-type-dto.data";
import {CourseData} from "../../shared/data/course-data-dto.data";
import {CourseReference} from "../../shared/data/course-ref-dto.data";


@Component({
  selector: 'course-reference',
  templateUrl: './create-reference.component.html',
  styleUrls: ['./create-reference.component.scss'],
  providers: [FormBuilder, CourseService]
})
export class CreateReferenceComponent implements OnInit {
  dataList: CourseReference[] = [];
  //TODO: Hala - use the initialize here instead of ngOnInit
  formData: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private  courseService: CourseService) {
  }

  refTypes: CorRefType[] = [];
  ngOnInit() {

    //TODO: Hala - Add Form Validations
    //TODO: Hala - If the names are large we use abbreviation reference -> ref
    this.formData = this.formBuilder.group({
      referenceName: null,
      //TODO: Hala - this should be refTypeID
      referenceType: null,
      referenceUrl: null,
      //TODO: Hala - There is no need for items
      items: this.formBuilder.array([])

    });

    this.courseService.findCorRefTypes().subscribe(
      res => {
        this.refTypes = res;
        console.log(this.refTypes);
      }
    );

  }

  saveCorReferences() {
    let data: CourseData = new CourseData();
    data.reference = this.dataList;
    console.log(data);
    this.courseService.references(data).subscribe(
      res => {
        console.log('request succed')
      },
      error1 => {
        console.log(error1)
      }
    );

  }

  isclick() {
  }


  createItem(): FormGroup {
    return this.formBuilder.group({
      referenceName: null,
      referenceType: null,
      referenceUrl: null
    });


  }

  isEditMode:boolean=false;

  addItem(): void {
    let data: CourseReference = new CourseReference();
    data.referenceName = this.formData.get('referenceName').value;
    data.referenceType = this.formData.get('referenceType').value;
    data.referenceUrl = this.formData.get('referenceUrl').value;

    this.dataList.push(data);

    this.formData.reset({
      "referenceName": '',
      "referenceType": '',
      "referenceUrl": ''
    });
    this.isEditMode=false;
    // this.formData.get('referenceName').reset('Enter new Value');
  }

  clear(): void {
    this.formData.reset();
  }
  // TODO: Hala - Use Index instead of Total Row Object
  removerow(row):void{
    let index=this.dataList.indexOf(row);
    if(index!==-1){
      this.dataList.splice(index,1)
    }


  }

  // TODO: Hala - Use Index instead of Total Row Object
  onEditRow(row):void{
    var index=this.dataList.indexOf(row);
    this.formData.get('referenceName').reset(this.dataList[0].referenceName);
    this.formData.get('referenceType').reset(this.dataList[0].referenceType);
    this.formData.get('referenceUrl').reset(this.dataList[0].referenceUrl);
    if(index!==-1){
      this.dataList.splice(index,1)
    }

    this.isEditMode = true;


  }
}


