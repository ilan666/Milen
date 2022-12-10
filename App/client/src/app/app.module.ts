import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './nav-bar/Account/login/login.component';
import { CartNavComponent } from './nav-bar/cart-nav/cart-nav.component';
import { RegisterComponent } from './nav-bar/Account/register/register.component';
// import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { CardComponent } from './card/card.component';
import { SidenavComponent } from './nav-bar/sidenav/sidenav.component';
import { MatCardModule } from '@angular/material/card';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProductDetailsComponent } from './card/product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MenComponent } from './StoreComponents/men/men.component';
import { WomenComponent } from './StoreComponents/women/women.component';
import { AllCollectionComponent } from './StoreComponents/allCollection/allCollection.component';
import { ChildrenComponent } from './StoreComponents/children/children.component';
import { CartComponent } from './cart/cart.component';
import { MatTableModule } from '@angular/material/table';
import { AccountComponent } from './nav-bar/Account/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CardComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    MenComponent,
    WomenComponent,
    AllCollectionComponent,
    ChildrenComponent,
    SidenavComponent,
    CartNavComponent,
    CartComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatRippleModule,
    MatCardModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
