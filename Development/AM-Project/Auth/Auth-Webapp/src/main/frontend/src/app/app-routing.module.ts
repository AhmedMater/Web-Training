import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SimpleLayout} from "./layout/simple-layout/simple-layout.component";
import {FullLayout} from "./layout/full-layout/full-layout.component";
import {HomeComponent} from "./modules/home/home.component";
import {LoginComponent} from "./modules/authentication/components/login/login.component";
import {RegisterComponent} from "./modules/authentication/components/register/register.component";
import {UserProfileComponent} from "./modules/user-profile/user-profile.component";


const ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '', component: SimpleLayout, children:[
      {path:'', children: [
          {path: 'login', component: LoginComponent},
          {path: 'register', component: RegisterComponent}
        ]
      }
    ]
  },
  {path: '', component: FullLayout, children: [
      {path: 'home', component: HomeComponent},
      {path: 'profile', component: UserProfileComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
