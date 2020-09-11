import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminguardGuard } from './adminguard.guard';

const routes: Routes = [
  { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AdminguardGuard] },
  { path: 'admin/login', component: LoginComponent },
  {
    path: '',
    redirectTo: 'admin/login',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
