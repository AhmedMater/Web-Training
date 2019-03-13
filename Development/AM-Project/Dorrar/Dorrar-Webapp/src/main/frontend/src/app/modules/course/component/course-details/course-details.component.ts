import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CorLevel} from "../../shared/data/cor-level";
import {CorType} from "../../shared/data/cor-type.data";
import {CorMainDetail} from "../../shared/data/course/cor-main-detail.data";
import {CourseDTO} from "../../shared/data/course/course-dto.data";
import {CourseService} from "../../shared/course.service";
import {LookupService} from "../../../../infrastructure/services/lookup.service";

@Component({
  selector: 'course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
  providers: [CourseService ,LookupService]
})
export class CourseDetailsComponent implements OnInit {
  formData: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required, Validators.maxLength(15)]],
    duration: [null, [Validators.required, Validators.min(1)]],
    //TODO: Youssef - should be in Future
    startDate: [null, Validators.required],
    corTypeID: [null, Validators.required],
    corLevelID: [null, Validators.required],
    description: [null, Validators.maxLength(200)]

  });

  constructor(private formBuilder: FormBuilder,
              private details: CourseService,
              private lookUp: LookupService) {
  }

  corTypes: CorType [] = [];
  corLevels : CorLevel [] = [];
  ngOnInit() {
    this.lookUp.findCorTypes().subscribe(
      res => {
        this.corTypes = res;
        console.log(this.corTypes);
      }
    );
    this.lookUp.findCorLevels().subscribe(
      res =>{this.corLevels = res;
      console.log(this.corLevels);}
    );
  }

  createNewCourse() {

    let data: CorMainDetail = new CorMainDetail();
    let dto : CourseDTO = new CourseDTO();

    data.courseName = this.formData.get('name').value;
    data.duration = this.formData.get('duration').value;
    data.startDate = this.formData.get('startDate').value;
    data.corTypeID = this.formData.get('corTypeID').value;
    data.corLevelID = this.formData.get('corLevelID').value;
    data.description = this.formData.get('description').value;
    console.log(data);

      dto.detail = data;
    this.details.createNewCourse(dto).subscribe(
      res => {
        console.log(" Res succeeded");
      },
      err => {
        console.log(err);
      }
    );

  }
}
