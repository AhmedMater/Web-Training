import { Component, OnInit } from '@angular/core';
import {SectionData} from "../../shared/data/section-data";
import {FormBuilder, Validators} from "@angular/forms";
import {CourseService} from "../../shared/course.service";
import {CourseDTO} from "../../shared/data/course/course-dto.data";

@Component({
  selector: 'create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.scss'],
  providers : [FormBuilder , CourseService]
})
export class CreateSectionComponent implements OnInit {

  dataList: SectionData[] = [];
  formData = this.formBuilder.group({

    name: ['', [Validators.required, Validators.maxLength(15)]],
    description: ['', Validators.required],
  });

 // courseID : string ;

  constructor(private formBuilder: FormBuilder, private userService: CourseService) {

    //this.route.params.subscribe(params => {this.courseID = params.get("courseID")})

  }

  ngOnInit() {

  }

  addRow(): void {
    let data: SectionData = new SectionData();
    data.name = this.formData.get('name').value;
    data.description = this.formData.get('description').value;
    this.dataList.push(data);
    this.formData.reset();
    this.isEditMode = false;
  }

  reset(): void {
    this.formData.reset();
  }

  isEditMode: boolean = false;

  editRow(index): void {
    this.formData.get('name').reset(this.dataList[0].name);
    this.formData.get('description').reset(this.dataList[0].description);
    this.dataList.splice(index, 1);
    this.isEditMode = true;
  };

  saveData() {
    let data: CourseDTO = new CourseDTO();
    data.sections = this.dataList;
    console.log(data);

    this.userService.addNewSections(data).subscribe(
      response => {
        console.log('request sucessed');
      },
      err => {
        console.log(err);
      }
    );

  };

  removeRow(index) {
    this.dataList.splice(index, 1);
  }
}
