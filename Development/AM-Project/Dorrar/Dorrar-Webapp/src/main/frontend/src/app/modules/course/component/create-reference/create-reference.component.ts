import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
  formData:FormGroup = this.formBuilder.group({
    refName: [  '' , [Validators.required,Validators.maxLength(15)]],
    refTypeID: [  '' , [Validators.required]],
    refUrl: [  '' , [Validators.required]]
  });



  constructor(private formBuilder: FormBuilder,
              private  courseService: CourseService) {
  }

  refTypes: CorRefType[] = [];
  ngOnInit() {



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
    this.courseService.saveCorReferences(data).subscribe(
      res => {
        console.log('request succed')
      },
      error1 => {
        console.log(error1)
      }
    );

  }

  // TODO: Hala - remove unused functions
  isclick() {
  }


  // TODO: Hala - remove unused functions
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
    data.refName = this.formData.get('refName').value;
    data.refTypeID = this.formData.get('refTypeID').value;
    data.refUrl = this.formData.get('refUrl').value;

    this.dataList.push(data);

    this.formData.reset({
      "refName": '',
      "refTypeID": '',
      "refUrl": ''
    });
    this.isEditMode=false;
    // this.formData.get('referenceName').reset('Enter new Value');
  }

  clear(): void {
    this.formData.reset();
  }
  // TODO: Hala - function name should be Camelcase
  removerow(index):void{
    // let index=this.dataList.indexOf(row);
    if(index!==-1){
      this.dataList.splice(index,1)
    }


  }

  onEditRow(index):void{
    // var index=this.dataList.indexOf(row);
    this.formData.get('refName').reset(this.dataList[0].refName);
    this.formData.get('refTypeID').reset(this.dataList[0].refTypeID);
    this.formData.get('refUrl').reset(this.dataList[0].refUrl);
    if(index!==-1){
      this.dataList.splice(index,1)
    }

    this.isEditMode = true;


  }
}


