import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { catchError, Observable } from 'rxjs';
import { UserInfoService } from 'src/app/services/user.service';
import { ErrorResponse } from '../models/error_response';
import { ToastService } from '../services/toast.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private toastSevice: ToastService,
    private jwtservice: JwtHelperService,
    private ngxService: NgxUiLoaderService,
    private userinfoService: UserInfoService,
    private router: Router
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var token = this.jwtservice.tokenGetter();
    if (token) {
      // Apply the headers
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
    }

    // Also handle errors globally
    return next.handle(req).pipe(
      catchError((e: HttpErrorResponse) => {
        const error = e.error as ErrorResponse;
        this.ngxService.stopAll();
        if (e.status == 401 || e.status == 403) {
          this.userinfoService.signOutRedirect();
        }
        if (e.status == 409 || e.status == 406) {
          this.toastSevice.error(error.message);
        }
        if (e.status == 400) {
          var errors = JSON.parse(e.error);
          if (errors.Errors) {
            errors.Errors.forEach((i: any) => {
              this.toastSevice.error(i.ErrorMessage);
            });
          } else {
            for (let value in errors.errors) {
              const item = errors.errors[value];
              if (item.length) {
                item.forEach((i: any) => {
                  this.toastSevice.error(i);
                })
              }
            }
          }
        }

        if (e.status == 500) {
          this.toastSevice.error(error.message);
        }
        return new Observable<HttpEvent<any>>();
      })
    );
  }
}
