import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseDetailsData} from "../../shared/data/course-details.data";
import {OptionsDropList} from "../../shared/data/optionDrobList";
import {DetailsService} from "../../shared/details.service";
import {LevelDropList} from "../../shared/data/LevelDropList";

@Component({
  selector: 'course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
//TODO: Youssef - This Component should be in course/components/main-details
export class CourseDetailsComponent implements OnInit {


  //TODO: Youssef - User camelcase for Formcontrol names
  formData: FormGroup = this.formBuilder.group({
    Name: [null, [Validators.required, Validators.maxLength(15)]],
    Duration: [null, [Validators.required, Validators.min(1)]],
    Date: [null, Validators.required], //TODO: Youssef - should be in Future

    //TODO: Youssef - should be corTypeID
    Type: [null, Validators.required],
    //TODO: Youssef - should be corLevelID
    Level: [null, Validators.required],
    Description: [null, Validators.maxLength(200)]

  });

  constructor(private formBuilder: FormBuilder,
              private details: DetailsService) {
  }

  //TODO: Youssef - should be corTypes
  optionList: OptionsDropList[] = [];
  //TODO: Youssef - should be corLevels
  levelList : LevelDropList [] = [];
  ngOnInit() {
    this.details.findType().subscribe(
      res => {
        this.optionList = res;
        console.log(this.optionList);
      }
    );
    this.details.findLevel().subscribe(
      res =>{this.levelList = res;
      console.log(this.levelList);}
    );
  }

  //TODO: Youssef - creat is worng spelling
  creatNewCourse() {

    let data: CourseDetailsData = new CourseDetailsData();
    let option: OptionsDropList = new OptionsDropList();
    data.courseName = this.formData.get('Name').value;
    data.duration = this.formData.get('Duration').value;
    data.startDate = this.formData.get('Date').value;
    data.typeID = this.formData.get('Type').value;
    data.levelID = this.formData.get('Level').value;
    data.description = this.formData.get('Description').value;
    console.log(data);
    this.details.creatNewCourse(data).subscribe(
      res => {
        console.log(" Res succeeded");
      },
      err => {
        console.log(err);
      }
    );

  }
}
