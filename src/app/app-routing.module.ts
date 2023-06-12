import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Modules/layout/layout.module').then(
        (m) => m.LayoutModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Modules/login/login.module').then((m) => m.LoginModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
