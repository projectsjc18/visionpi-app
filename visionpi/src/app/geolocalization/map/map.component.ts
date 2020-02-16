import { Component, OnInit, Input } from '@angular/core';
import { GeolocalizationService } from './../services/geolocalization.service';
import { Checkpoint } from './../models/checkpoint';
import { map } from 'rxjs/operators';
//import * as io from "socket.io-client";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() public routeName: string;
  @Input() public operator: string;
  @Input() public checkpointsList: Checkpoint[] = [];

  zoom: number = 15;
  center: string;
  checkpoints: Checkpoint[] = [];
  checkpointsLines: Checkpoint[] = [];
  chats: any;
  joinned: boolean = false;
  newUser = { user: '', fleet: '' };
  msgData = { fleet: '', user: '', checkpoint: '' };
  //socket = io(environment.apiUrl);
  newCheckpoint: Checkpoint;
  lastCheckpoint: Checkpoint;
  lat: number;
  lng: number;

  constructor(private geolocalizationService: GeolocalizationService) {

  }

  ngOnInit() {
    //this.joinRoom();
    var user = JSON.parse(localStorage.getItem("currentUser"));
    /*this.socket.on('event', function (data) {
      if(data.message.user === user.username && data.message.route == this.routeId) {
        this.newCheckpoint = data.message;
        this.checkpoints.push(this.newCheckpoint);
      }
    }.bind(this));*/

  	this.loadCheckpoints();

  }

  loadCheckpoints() {
    this.checkpoints = this.checkpointsList,
    this.checkpointsLines = this.checkpointsList,
    this.lastCheckpoint = this.checkpointsList[this.checkpointsList.length - 1];
    this.lat = this.lastCheckpoint.lat;
    this.lng = this.lastCheckpoint.lng;
    this.center = this.checkpointsList[0].lat + ", " + this.checkpointsList[0].lng;
  }

  joinRoom() {
    var date = new Date();
    var user = JSON.parse(localStorage.getItem("currentUser"));
    this.joinned = true;
    //this.socket.emit('connectionUserGpx', { room: user.username, username: user.username, message: 'Join this room', updated_at: date });
  }

}
