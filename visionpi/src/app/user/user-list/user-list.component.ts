import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { UserService } from '../user.service';
import { User } from '../models/user'

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit  {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  displayedColumns: string[] = ['user', 'firstname', 'lastname', 'email', 'profile', 'created'];
  /*dataSource = new MatTableDataSource<User>(ELEMENT_DATA);*/
  //data = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  data: any;
  hide = true;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.userService.getAll()
    .subscribe(data => {
      this.data = new MatTableDataSource<User>(data);
      this.data.paginator = this.paginator;
      console.log("user admin service: " + this.data)
    });
  }

  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();

    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }

  private updateUsers() {
    this.userService.getAll()
    .subscribe(data => {
      this.data = data;
      console.log("update users");
    });
  }

}
