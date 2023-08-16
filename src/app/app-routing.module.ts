import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
      canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('mf-auth/AuthModule').then((m) => m.AuthModule),
    canActivate: [NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
