import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeolocalizationComponent } from './geolocalization.component';
import { AdministrationComponent } from './administration/administration.component';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { AccountListComponent } from './account-list/account-list.component';
import { TrackerComponent } from './tracker/tracker.component';
import { TrackAccountComponent } from './track-account/track-account.component';
import { TrackAccountsComponent } from './track-accounts/track-accounts.component';

const routes: Routes = [
  {
    path: '',
    component: GeolocalizationComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: 'administration',
        component: AdministrationComponent,
        children: [
          {
            path: 'account',
            component: AccountRegisterComponent
          },
          {
            path: 'account-list',
            component: AccountListComponent
          },
          {
            path: 'tracker',
            component: TrackerComponent,
            children: [
              {
                path: 'track-account',
                component: TrackAccountComponent
              },
              {
                path: 'track-accounts',
                component: TrackAccountsComponent
              }
            ]
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeolocalizationRoutingModule { }
