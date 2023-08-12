import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../app/user/user.component';
import {LoginComponent} from '../app/login/login.component';
import { ShopsComponent } from './shops/shops.component';
import { ChennaiComponent } from './chennai/chennai.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HotelComponent } from './components/hotel/hotel.component';

const routes: Routes = [
  { path: 'shops', component: ShopsComponent},
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chennai', component: ChennaiComponent },
 // {path : '', component : LoginComponent}
  { path:'chennai', redirectTo: '/hotels', pathMatch: 'full'},
  { path: 'hotels', component: HotelsComponent },
  { path: 'hotels/:id', component: HotelComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }