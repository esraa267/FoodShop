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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
