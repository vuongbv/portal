import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { UserDto } from 'src/api-service/share-services/models';
import { Role } from 'src/api-service/share-services/models/role';

import { UsersPermissionsUser } from 'src/api-service/strapi-services/models';
import { HandleLastActiveService } from './handle-last-active.service';
import { LastActiveService } from './last-active.service';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor(
    private authService: MsalService,
    private router: Router,
    private lastActiveService:LastActiveService
    ) {}
  static isAdmin: any;
  getTenantName() {
    const userInlocal = localStorage.getItem('user');
    const userLoginProvider = localStorage.getItem('user_login_provider');
    if (userInlocal) {
      if (userLoginProvider == 'strapi') {
        const user: UsersPermissionsUser = JSON.parse(userInlocal);
        return user.tenant.name;
      } else {
        const user: UserDto = JSON.parse(userInlocal);
        return user.tenant_name!;
      }
    }
    return '';
  }
  isAdmin() {
    const userInlocal = localStorage.getItem('user');
    const userLoginProvider = localStorage.getItem('user_login_provider');
    if (userInlocal) {
      if (userLoginProvider == 'strapi') {
        const user: UsersPermissionsUser = JSON.parse(userInlocal);
        return user.role?.name == 'Admin';
      } else {
        const user: UserDto = JSON.parse(userInlocal);
        return user.roles?.some((i: Role) => i.name == 'Admin');
      }
    }
    return false;
  }

  checkRole(role: string[]) {

    const userInlocal = localStorage.getItem('user');
    const userLoginProvider = localStorage.getItem('user_login_provider');

    if (userInlocal) {
      if (userLoginProvider == 'strapi') {
        const user: UsersPermissionsUser = JSON.parse(userInlocal);
        return role.some((i) => i == user.role?.name);
      } else {
        const user: UserDto = JSON.parse(userInlocal);
        const checkRole = user.roles?.filter((i: Role) =>
          role.includes(i.name!)
        );
        return checkRole && checkRole.length > 0;
      }
    }
    return false;
  }

  signOut() {
    const userLoginProvider = localStorage.getItem('user_login_provider');

    if (userLoginProvider == 'microsoft') {
      this.authService
        .logoutPopup({ mainWindowRedirectUri: '/' })
        .subscribe((i) => {
          localStorage.clear();
          this.router.navigate(['/auth']);
        });
    } else {
      localStorage.clear();
      this.router.navigate(['/auth']);
    }
  }

  signOutRedirect() {

    const userLoginProvider = localStorage.getItem('user_login_provider');

    if (userLoginProvider == 'microsoft') {

      this.authService
        .logoutRedirect()
        .subscribe((i) => {
          localStorage.clear();
          this.router.navigate(['/auth']);
        });

    } else
    {
      localStorage.clear();
      this.router.navigate(['/auth']);
    }
  }
}
