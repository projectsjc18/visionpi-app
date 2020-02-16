import { Component, OnInit, Input } from '@angular/core';
import { Option } from '../interfaces/option'

@Component({
  selector: 'visionpi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public title: string;
  @Input() public optionList: Option[] = [];

  constructor() { }

  ngOnInit() {
  }

}
