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

const routes: Routes = [{ path: '', component: HomepageComponent },
  {path: 'views/:id', component: ShowDetailsComponent},
  {path: 'user', component: HomeListComponent},
  {path: 'user/house', component: HouseListComponent},
  {path: 'user/add', component: AddHouseComponent},
  {path: 'user/house-details/:id', component: ShowDetailHouseComponent},
  {path: 'user/edit/:id', component: EditHouseComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
