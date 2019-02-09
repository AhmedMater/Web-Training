import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../shared/course.service";

import {CorRefType} from "../../shared/data/cor-ref-type-dto.data";
import {CourseRefDTO} from "../../shared/data/course-ref-dto.data";
import {LookupService} from "../../shared/lookup.service";
import {CourseDTO} from "../../shared/data/course-dto.data";


@Component({
  selector: 'course-reference',
  templateUrl: './create-reference.component.html',
  styleUrls: ['./create-reference.component.scss'],
  providers: [FormBuilder, CourseService,LookupService]
})
export class CreateReferenceComponent implements OnInit {
  dataList: CourseRefDTO[] = [];
  formData:FormGroup = this.formBuilder.group({
    refName: [  '' , [Validators.required,Validators.maxLength(15)]],
    refTypeID: [  '' , [Validators.required]],
    refUrl: [  '' , [Validators.required]]
  });



  constructor(private formBuilder: FormBuilder,
              private  courseService: CourseService,
              private  lookupService: LookupService) {
  }

  refTypes: CorRefType[] = [];
  ngOnInit() {



    this.lookupService.findCorRefTypes().subscribe(
      res => {
        this.refTypes = res;
        console.log(this.refTypes);
      }
    );

  }

  saveCorReferences() {
    let data: CourseDTO = new CourseDTO();
    data.references = this.dataList;
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








  isEditMode:boolean=false;

  addItem(): void {
    let data: CourseRefDTO = new CourseRefDTO();
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


