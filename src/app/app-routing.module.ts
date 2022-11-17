import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'products',
    loadChildren: () => import('./Components/cards/cards.module').then(m => m.CardsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./Components/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./Components/cart/cart.module').then(m => m.CartModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
