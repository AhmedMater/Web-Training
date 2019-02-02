// import {Component, Input, OnInit} from '@angular/core';
// import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
// import {sectionData} from "../../shared/data/SectionData";
// import {UserService} from "../../shared/sections.service";
// import {CourseDto} from "../../shared/data/course-dto";
// import {UserService} from "../../shared/sections.service";
//
//
//
// @Component({
//   selector: 'sectionData',
//   templateUrl: './new-course-section.html',
//   styleUrls: ['./new-course-section.scss'],
//   providers : [FormBuilder , UserService],
// })
// export class NewCourseSection implements OnInit {
//
//
//   dataList: sectionData[] = [];
//   formData= this.formBuilder.group({
//
//     name : [  '' , [Validators.required,Validators.maxLength(15)]],
//     description :[ '' , Validators.required ],
//     id :[null],
//     items: this.formBuilder.array([])
//   });
//
//
//   constructor(private formBuilder : FormBuilder , private userService : UserService) {
//
//
//   }
//
//   ngOnInit() {
//
//   }
//
//   addRow(): void {
//     let data: sectionData = new sectionData();
//     data.name = this.formData.get('name').value;
//     data.description = this.formData.get('description').value;
//     this.dataList.push(data);
//     this.formData.reset();
//     this.isEditMode=false;
//   }
//   reset():void {
//     this.formData.reset();
//   }
//
//   isEditMode : boolean = false ;
//   editRow(row):void{
//
//     var index = this.dataList.indexOf(row);
//     this.formData.get('name').reset(this.dataList[0].name);
//     this.formData.get('description').reset(this.dataList[0].description);
//     if (index !== -1) {
//       this.dataList.splice(index, 1);
//       this.isEditMode = true;
//     }
//   };
//   saveData()
//   {
//     let data : CourseDto = new CourseDto();
//     data.item = this.dataList;
//     console.log(data);
//
//     this.userService.addNewSections(data).subscribe(
//       response=>{console.log('request sucessed') ;},
//       err=>{console.log(err) ;}
//
//     );
//
//   };
//
//   removeRow(row){
//     var index = this.dataList.indexOf(row);
//     if (index !== -1) {
//       this.dataList.splice(index, 1);
//
//     }};
//
//
// }
