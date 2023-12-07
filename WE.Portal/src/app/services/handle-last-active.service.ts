import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { BehaviorSubject, Observable, timer, filter, fromEvent, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LastActiveService } from './last-active.service';
import { UserInfoService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class HandleLastActiveService {

  private inactivityLogoutTimeoutS: number = environment.TimeInSecond;
  private timerTickMs: number = 500;

  private localStorageKey: string = '__loggedIn';

  private loggedIn: BehaviorSubject<boolean>;
  public loggedIn$: Observable<boolean>;

  constructor(
    private lastActiveService: LastActiveService,
    private userService: UserInfoService,
    private router: Router
    ) {
    this.loggedIn = new BehaviorSubject(
      this.getLoggedInFromLocalStorage() ?? false
    );
    this.loggedIn$ = this.loggedIn.asObservable();
  }


  public logIn() {
    localStorage.setItem(this.localStorageKey, 'true');
    this.loggedIn.next(true);
  }

  private logOut() {
    localStorage.removeItem(this.localStorageKey);
    this.loggedIn.next(false);
  }

  public resetup(){
    console.log("resetup");
    this.setUp();
  }

  public setUp() {

    timer(0, this.timerTickMs)
      .pipe(filter(_ =>
        {
          return   this.router.url !== '/auth';
        }))
      .subscribe(_ => {
        const currentDate = moment(new Date());
        const lastActiveDate = this.lastActiveService.getLastActiveDate();

        let currentPage =  (this.router.url !== '/auth' && this.router.url !== '/');

        let token = localStorage.getItem("token");

        let isNeedLoggout = currentPage && (token != null);


        if (moment.duration(currentDate.diff(lastActiveDate)).asSeconds() > this.inactivityLogoutTimeoutS && isNeedLoggout) {
          this.userService.signOutRedirect();
        }
      });

      fromEvent<StorageEvent>(window, 'storage')
      .pipe(
        filter(event => event.storageArea === localStorage
          && event.key === this.localStorageKey),
        map(event => !!event.newValue)
      )
      .subscribe(loggedIn => {
        this.loggedIn.next(loggedIn);
      });
  }

  private getLoggedInFromLocalStorage(): boolean | null {
    const valueFromStorage = localStorage.getItem(this.localStorageKey);
    if (!valueFromStorage) {
      return null;
    }

    return !!valueFromStorage;
  }
}
