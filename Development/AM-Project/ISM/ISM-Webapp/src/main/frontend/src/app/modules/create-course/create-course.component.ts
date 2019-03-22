import { Component, OnInit } from '@angular/core';
import {AuthActions} from "../../infrastructure/directives/authorization/data/auth-actions.enum";

@Component({
  selector: 'create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  AUTH_ACTIONS: typeof AuthActions = AuthActions;
  constructor() { }

  ngOnInit() {
  }

}
