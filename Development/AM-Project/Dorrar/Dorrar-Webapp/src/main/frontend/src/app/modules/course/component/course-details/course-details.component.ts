import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DetailsService} from "../../shared/details.service";
import {CorLevel} from "../../shared/data/cor-level";
import {CorType} from "../../shared/data/cor-type.data";
import {CorMainDetail} from "../../shared/data/cor-main-detail.data";
import {CourseDTO} from "../../shared/data/course-dto.data";

@Component({
  selector: 'course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
  providers: [DetailsService]
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
              private details: DetailsService) {
  }

  corTypes: CorType [] = [];
  corLevels : CorLevel [] = [];
  ngOnInit() {
    this.details.findType().subscribe(
      res => {
        this.corTypes = res;
        console.log(this.corTypes);
      }
    );
    this.details.findLevel().subscribe(
      res =>{this.corLevels = res;
      console.log(this.corLevels);}
    );
  }

  createNewCourse() {

    let data: CorMainDetail = new CorMainDetail();
    let dto : CourseDTO = new CourseDTO();

    data.courseName = this.formData.get('Name').value;
    data.duration = this.formData.get('Duration').value;
    data.startDate = this.formData.get('Date').value;
    data.corTypeID = this.formData.get('Type').value;
    data.corLevelID = this.formData.get('Level').value;
    data.description = this.formData.get('Description').value;
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
