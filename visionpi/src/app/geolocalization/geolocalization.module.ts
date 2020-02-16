import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeolocalizationRoutingModule } from './geolocalization-routing.module';
import { AdministrationComponent } from './administration/administration.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { GeolocalizationComponent } from './geolocalization.component';
import { MapComponent } from './map/map.component';
import { TrackerComponent } from './tracker/tracker.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule }    from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { RegisterSuccessComponent } from './messages/register-success/register-success.component';
import { AccountListComponent } from './account-list/account-list.component';
import { TrackAccountComponent } from './track-account/track-account.component';
import { TrackAccountsComponent } from './track-accounts/track-accounts.component';
import { TrackAccountsSearchComponent } from './messages/track-accounts-search/track-accounts-search.component';

@NgModule({
  declarations: [
    AdministrationComponent,
    ConfigurationComponent,
    GeolocalizationComponent,
    MapComponent,
    TrackerComponent,
    AccountRegisterComponent,
    RegisterSuccessComponent,
    AccountListComponent,
    TrackAccountComponent,
    TrackAccountsComponent,
    TrackAccountsSearchComponent
  ],
  imports: [
    CommonModule,
    GeolocalizationRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAayFvx8P7QhqlUt-GbyOZ6InBVNNZPa5k'
    }),
  ],
  entryComponents: [RegisterSuccessComponent, TrackAccountsSearchComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GeolocalizationModule { }
