import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';
import {ComponentsComponent} from './components.component';
import {UserComponent} from './user/user.component';
import {HouseListComponent} from './user/house-list/house-list.component';
import {AddHouseComponent} from './user/add-house/add-house.component';
import {EditHouseComponent} from './user/edit-house/edit-house.component';
import {ShowDetailsComponent} from './homepage/show-details/show-details.component';
import {HomeListComponent} from './user/home-list/home-list.component';
import {ShowDetailHouseComponent} from './user/show-detail-house/show-detail-house.component';
import {LoginComponent} from './user/login/login.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {ShowDetailUserComponent} from './user/show-detail-user/show-detail-user.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';

const routes: Routes = [{ path: '', component: HomepageComponent },
  {path: 'views/:id', component: ShowDetailsComponent},
  {path: 'user/:id', component: HomeListComponent},
  {path: 'user/house/:id', component: HouseListComponent},
  {path: 'user/add/:id', component: AddHouseComponent},
  {path: 'user/house-details/:id', component: ShowDetailHouseComponent},
  {path: 'user/edit/:id', component: EditHouseComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'show-detail-user/:id', component: ShowDetailUserComponent},
  {path: 'edit-user/:id', component: EditUserComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
