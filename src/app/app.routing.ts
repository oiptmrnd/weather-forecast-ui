import {Routes} from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

export const Approute : Routes = [
  {
    path:'',
    component : HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
];
