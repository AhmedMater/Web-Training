import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../shared/user.service";
import {UserList} from "../../shared/data/user-filter.data";
import {College} from "../../shared/data/college";
import {University} from "../../shared/data/university";
import {Country} from "../../shared/data/country";


@Component({
  selector: 'user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss'],
  providers:[FormBuilder,UserService]
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
  public collegeArrayList :College[];
  public universityArrayList:University[];
  public countryArrayList:Country[];
  constructor(private formBuilder:FormBuilder ,private userService:UserService) { }

  ngOnInit() {

  }

  filter(){
    let data : UserList =new UserList();
    data.fullname=this.formData.get('fullname').value;
    data.college=this.formData.get('college').value;
    data.university=this.formData.get('university').value;
    data.country=this.formData.get('country').value;
    data.birthdatefrom=this.formData.get('birthdatefrom').value;
    data.birthdateto=this.formData.get('birthdateto').value;


    console.log(data);

    this.userService.filter(data).subscribe(
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


     this.userService.findallcollege().subscribe(res =>
    {
      console.log(res);
      this.collegeArrayList=res;
   })
   }
  findalluniversity(){
    this.userService.findalluniversity().subscribe(res=> {
      console.log(res);
      this.universityArrayList=res;

    })
  }
  findallcountry(){
    this.userService.findallcountry().subscribe(res=> {
      console.log(res);
      this.countryArrayList = res;


    })

}}
