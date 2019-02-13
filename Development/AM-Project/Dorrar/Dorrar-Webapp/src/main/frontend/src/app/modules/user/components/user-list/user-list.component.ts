import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../shared/user.service";
import {UserList} from "../../shared/data/user-filter.data";
import {College} from "../../shared/data/college";
import {University} from "../../shared/data/university";
import {Country} from "../../shared/data/country";
import {UserVTO} from "../../shared/data/user-vto.data";


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers:[FormBuilder,UserService]
})
export class UserListComponent implements OnInit {
  userList:UserVTO[]=[];
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
    this.userService.findAll().subscribe(
      res=> this.userList=res
    )

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

}
  clear(): void {
    this.formData.reset();
  }
}
