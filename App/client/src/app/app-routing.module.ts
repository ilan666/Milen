import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './card/product-details/product-details.component';
import { RegisterComponent } from './nav-bar/Account/register/register.component';
import { MenComponent } from './StoreComponents/men/men.component';
import { WomenComponent } from './StoreComponents/women/women.component';
import { AllCollectionComponent } from './StoreComponents/allCollection/allCollection.component';
import { ChildrenComponent } from './StoreComponents/children/children.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent },
  { path: 'allcollection', component: AllCollectionComponent },
  { path: 'children', component: ChildrenComponent },
  { path: 'men/product-details', component: ProductDetailsComponent },
  { path: 'women/product-details', component: ProductDetailsComponent },
  { path: 'allcollecion/product-details', component: ProductDetailsComponent },
  { path: 'children/product-details', component: ProductDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
