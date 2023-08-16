import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const childRoutes: Routes = [  
  {
    path: 'register-eps',
    loadChildren: () => import('mf-eps-afiliation/AfiliationModule').then(m => m.AfiliationModule)
  },
  {
    path: 'register-compensation-box',
    loadChildren: () => import('mf-cc-afiliation/AfiliationModule').then(m => m.AfiliationModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
