import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: 'user',
        loadChildren: () => import('../user/user.module').then(mod => mod.UserModule)
      },
      {
        path: 'monitoring',
        loadChildren: () => import('../monitoring/monitoring.module').then(mod => mod.MonitoringModule)
      },
      {
        path: 'geolocalization',
        loadChildren: () => import('../geolocalization/geolocalization.module').then(mod => mod.GeolocalizationModule)
      }
      /*{
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'crises', component: ManageCrisesComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
