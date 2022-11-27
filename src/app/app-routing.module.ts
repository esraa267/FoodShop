import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Components/main/layout.module').then(
        (m) => m.LayoutModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./Components/register/register.module').then((m) => m.RegisterModule),
  },
  
  // {
  //   path: 'cart',
  //   loadChildren: () =>
  //     import('./Components/cart/cart.module').then((m) => m.CartModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
