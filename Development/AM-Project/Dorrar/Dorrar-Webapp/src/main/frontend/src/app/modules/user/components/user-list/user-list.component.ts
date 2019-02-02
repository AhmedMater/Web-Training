import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
//import {FilterUserData} from "../../shared/filter-user.data";
import {UserServices} from "../../shared/user.service";
//import {College} from "../../shared/college";

@Component({
  selector: 'user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss'],
  providers:[FormBuilder,UserServices]
})
export class UserFilterComponent implements OnInit {
  formData :FormGroup=this.formBuilder.group({
    fullname:[null,[Validators.required,Validators.maxLength(20)]],
    college:[null,[Validators.required]],
    university:[null,[Validators.required]],
    country:[null,[Validators.required]],
    birthdatefrom:[null,[Validators.required]],
    birthdateto:[null,[Validators.required]],
  })
  //public collegeArrayList :College[];
  constructor(private formBuilder:FormBuilder ,private userServices:UserServices) { }

  ngOnInit() {

  }
  filter(){
    let data : FilterUserData =new FilterUserData();
    data.fullname=this.formData.get('fullname').value;
    data.college=this.formData.get('college').value;
    data.university=this.formData.get('university').value;
    data.country=this.formData.get('country').value;
    data.birthdatefrom=this.formData.get('birthdatefrom').value;
    data.birthdateto=this.formData.get('birthdateto').value;


    console.log(data);

    this.userServices.filter(data).subscribe(
      res=>
      {
        console.log('Request Succeeded');
      },
      err=>
      {
        console.log(err);
      }
    );
  }
  findallcollege(){
    // let data:College=new College();
    // data.id=this.formData.get('id').value;
    // data.labelEN=this.formData.get('labelEN').value;

    this.userServices.findallcollege().subscribe(res =>
    {
      console.log(res);
      this.collegeArrayList=res;
    })
  }

}
