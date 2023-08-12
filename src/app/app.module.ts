import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import {  MatSnackBar } from '@angular/material/snack-bar';
import {MatSnackBarConfig} from '@angular/material/snack-bar'
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { ShopsComponent } from './shops/shops.component';
import {MatChipsModule} from '@angular/material/chips';
import { ChennaiComponent } from './chennai/chennai.component';
import { AvatarModule } from 'ngx-avatar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ShopsComponent,
    ChennaiComponent,
    NavBarComponent,
    HotelsComponent,
    HotelCardComponent,
    HotelComponent,
    DropdownComponent,
    CartItemComponent,
    MenuItemComponent,
    SearchBarComponent
    
  ],
  imports: [
    BrowserModule,
    MatChipsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatStepperModule,
    MatTooltipModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatBadgeModule,
    MatDividerModule,
    MatSidenavModule,
    MatCardModule,
    AvatarModule,
    MatButtonModule,
    MatSnackBar,
    MatSnackBarConfig
    

    
  ],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}],

  bootstrap: [AppComponent]
})
export class AppModule { }