import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MonitoringService } from '../monitoring.service'

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements AfterViewInit {

  displayedColumns: string[] = ['account', 'device', 'type', 'event', 'status', 'created'];
  data: any;

  constructor(public monitoringService: MonitoringService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadEvents();
  }

  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();

    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }

  loadEvents() {
    this.monitoringService.getAllEvents()
    .subscribe(data => {
      this.data = data;
      console.log("Reload events success! " );
    });
  }

}
