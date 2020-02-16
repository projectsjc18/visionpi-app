import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitoringComponent } from './monitoring.component';
import { AdministrationComponent } from './administration/administration.component';


const routes: Routes = [
  {
    path: '',
    component: MonitoringComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: 'administration', component: AdministrationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitoringRoutingModule { }
