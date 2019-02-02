import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CourseService} from "../../shared/course.service";

import {CorRefType} from "../../shared/data/cor-ref-type-dto.data";
import {CourseData} from "../../shared/data/course-data-dto.data";
import {CourseReference} from "../../shared/data/course-ref-dto.data";


@Component({
  selector: 'course-reference',
  templateUrl: './course-reference.component.html',
  styleUrls: ['./course-reference.component.scss'],
  providers: [FormBuilder, CourseService]
})
export class CreateReferenceComponent implements OnInit {
  dataList: CourseReference[] = [];
  formData: FormGroup;

  // TODO: Remove Uneeded variables

  //TODO: There will be list for CorRefType[] Array


  constructor(private formBuilder: FormBuilder,
              private  courseService: CourseService) {
  }

  refTypes: CorRefType[] = [];
  ngOnInit() {

    //TODO: FormControl names to be Camelcase
    //TODO: Add Form Validations
    this.formData = this.formBuilder.group({
      referenceName: null,
      referenceType: null,
      referenceUrl: null,
      items: this.formBuilder.array([])

    });

    this.courseService.findCorRefTypes().subscribe(
      res => {
        this.refTypes = res;
        console.log(this.refTypes);
      }
    );

  }

  //TODO: Rename function to saveCorReferences
  //TODO: add Reference List into CourseData Object and send it to Backend
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
  removerow(row):void{
    var index=this.dataList.indexOf(row);
    if(index!==-1){
      this.dataList.splice(index,1)
    }


  }
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


