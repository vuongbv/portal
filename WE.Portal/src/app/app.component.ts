import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleLastActiveService } from './services/handle-last-active.service';
import { LastActiveService } from './services/last-active.service';
import { SignalrMeasurementService } from './services/signalr.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'share-service-portal';

  public loggedIn$: Observable<boolean>;
  
  constructor(
    private handleLastActiveService: HandleLastActiveService,
    private lastActive: LastActiveService,
    private titleService: Title,
    ) {
    this.loggedIn$ = handleLastActiveService.loggedIn$;
  }
  
  ngOnInit(){
  
  }

}
