import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { CanGuard } from './guard/can.guard';
import { RaghuComponent } from './raghu/raghu.component';
import { StudentFileComponent } from './student-file/student-file.component';

const routes: Routes = [

  {
    path: 'login' ,canLoad:[CanGuard], loadChildren: () => import('./login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'raghu',
    component:RaghuComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
