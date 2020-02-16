import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  fillerNav = [];

  titleHome: String = 'VisionPi';
  user: any;
  options: any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public homeService: HomeService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    //this.loadConfigurationUser();
  }

  ngOnInit() {
    this.loadConfigurationUser();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  loadConfigurationUser(): void {
    const session = JSON.parse(localStorage.getItem('session'));
    this.homeService.getInfoUser(session.clientId)
    .subscribe(data => {
      this.user = data;
      this.options = data.platforms.web.options;
      console.log("home service: " + this.user)
    });
  }

}
