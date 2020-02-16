import { Component, OnInit, AfterViewInit } from '@angular/core';
/* Services */
import { AccountService } from '../services/account.service';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements AfterViewInit {

  displayedColumns: string[] = ['account', 'description', 'status', 'fleets', 'routes', 'vehicles'];
  data: any;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadAccounts();
  }

  loadAccounts() {
    this.accountService.getAccounts()
    .subscribe(data => {
      this.data = data;
      console.log("Load Accounts success! " );
    });
  }

}
