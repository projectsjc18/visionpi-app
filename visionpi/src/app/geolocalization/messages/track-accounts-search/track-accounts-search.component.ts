import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'track-accounts-search',
  templateUrl: './track-accounts-search.component.html',
  styleUrls: ['./track-accounts-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrackAccountsSearchComponent implements OnInit {

  disableSearch: boolean;
  disableAccount: boolean;
  disableFleet: boolean;
  disableRoute: boolean;
  selectedAccount: string;
  selectedFleet: string;
  selectedRoute: string;
  accounts;
  fleets;
  routes;
  vehicles;

  constructor(private _bottomSheetRef: MatBottomSheetRef<TrackAccountsSearchComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit() {
    this.disableSearch = true;
    this.disableAccount = true;
    this.disableFleet = true;
    this.disableRoute = true;
    this.selectedAccount = 'none';
    this.loadAccounts();
  }

  search(event: MouseEvent): void {
    this._bottomSheetRef.dismiss(this.selectedRoute);
    event.preventDefault();
  }

  loadAccounts() {
    this.accounts = this.data.accounts;
    this.selectedFleet = 'none';
    this.disableFleet = false;
  }

  loadFleets() {
    let accountInfo = this.accounts.filter(it => it.account == this.selectedAccount);
    this.fleets = accountInfo[0].fleets;
    this.selectedRoute = 'none';
    this.disableRoute = false;
  }

  loadRoutes() {
    let fleetInfo = this.fleets.filter(it => it.id == this.selectedFleet);
    this.routes = fleetInfo[0].routes;
    this.disableSearch = false;
  }

}
