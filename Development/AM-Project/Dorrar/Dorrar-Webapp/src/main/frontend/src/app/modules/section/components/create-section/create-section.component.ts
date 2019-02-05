import { Component, OnInit } from '@angular/core';
import {sectionData} from "../../shared/data/section-data";
import {FormBuilder, Validators} from "@angular/forms";
import {SectionsService} from "../../shared/sections.service";
import {CourseData} from "../../../course/shared/data/course-data-dto.data";


@Component({
  selector: 'create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.scss'],
  providers : [FormBuilder , SectionsService],

})
export class CreateSectionComponent implements OnInit {

  dataList: sectionData[] = [];
  formData= this.formBuilder.group({

    name : [  '' , [Validators.required,Validators.maxLength(15)]],
    description :[ '' , Validators.required ],
  });


  constructor(private formBuilder : FormBuilder , private userService : SectionsService) {


  }

  ngOnInit() {

  }

  addRow(): void {
    let data: sectionData = new sectionData();
    data.name = this.formData.get('name').value;
    data.description = this.formData.get('description').value;
    this.dataList.push(data);
    this.formData.reset();
    this.isEditMode=false;
  }
  reset():void {
    this.formData.reset();
  }

  isEditMode : boolean = false ;
  editRow(row):void{

    let index = this.dataList.indexOf(row);
    this.formData.get('name').reset(this.dataList[0].name);
    this.formData.get('description').reset(this.dataList[0].description);
    if (index !== -1) {
      this.dataList.splice(index, 1);
      this.isEditMode = true;
    }
  };
  saveData()
  {
    let data : CourseData = new CourseData();
    data.section = this.dataList;
    console.log(data);

    this.userService.addNewSections(data).subscribe(
      response =>{console.log('request sucessed') ;},
      err=>{console.log(err) ;}

    );

  };

  removeRow(row){
    let index = this.dataList.indexOf(row);
    if (index !== -1) {
      this.dataList.splice(index, 1);

    }};



}
