import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { PanelService } from 'src/app/services/panel.service';
import { UserInfoService } from 'src/app/services/user.service';
import { LayoutService } from '../layout.service';
import { LeftMenuDto } from 'src/api-service/share-services/models';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  items: MenuItem[] = [];
  appMenu: MegaMenuItem[] = [];
  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;
  showMenu = true;
  userName: any;
  tenant = '';
  isNusUser: boolean = true;
  applications: any[] = [];
  isTenantAdmin = false;
  isAdmin = false;
  adminUrl = window.location.origin + '/admin/';
  displayAppName: string = '';
  appId: string = '';
  constructor(
    public layoutService: LayoutService,
    private userService: UserInfoService,
    private panelService: PanelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const menustore = localStorage.getItem('leftMenu');
    const urls = this.router.url.split('/');

    if (menustore) {
      let menu = JSON.parse(menustore) as LeftMenuDto[];

      if (urls[1] == 'apps') {
        if (urls[2] && urls[2].indexOf('#') > 0) {
          this.appId = urls[2]
            .slice(0, urls[2].indexOf('#'))
            .replace(/([A-Z])/g, ' $1');
        } else {
          this.appId = urls[2]?.replace(/([A-Z])/g, ' $1');
        }
      }

      menu.find((item) => {
        if (item.app_id === this.appId) {
          this.displayAppName = String(item.app_name);
        }
      });

      this.getUserName();
      this.applications = JSON.parse(localStorage.getItem('applications')!).map(
        (i: string) => {
          const name = i.replace(/([A-Z])/g, ' $1');
          let appId;
          menu.find((item) => {
            if (item.app_id === name) {
              appId = item.app_name;
            }
          });
          return { name: appId, value: i };
        }
      );
      // if (this.userService.checkRole(['TenantAdmin'])) {
      //   this.items.push({
      //     label: 'Tenants',
      //     icon: 'pi pi-fw pi-id-card',
      //     routerLink: ['admins/tenants'],
      //   });
      // }
      if (this.userService.checkRole(['TenantAdmin','Admin'])) {
        if (this.userService.checkRole(['TenantAdmin'])){
          this.isTenantAdmin = true;
        }
        if (this.userService.checkRole(['Admin'])){
          this.isAdmin = true;
        }
        this.items.push(
          // {
          //   label: 'Update',
          //   icon: 'pi pi-refresh',
          // },
          // {
          //   label: 'Delete',
          //   icon: 'pi pi-times',
          // },
          {
            label: 'Save page setting',
            icon: 'pi pi-check',
            command: () => {
              this.panelService.setPanelId('saveNewPosition');
            },
          }
        );
      }
      this.items.push(
        // {
        //   label: 'Update',
        //   icon: 'pi pi-refresh',
        // },
        // {
        //   label: 'Delete',
        //   icon: 'pi pi-times',
        // },
        // {
        //   label: 'Save page setting',
        //   icon: 'pi pi-check',
        //   command: () => {
        //     this.panelService.setPanelId('saveNewPosition');
        //   },
        // },
        {
          label: 'Sign out',
          icon: 'pi pi-sign-out',
          command: () => {
            this.userService.signOutRedirect();
          },
        }
      );
    }
  }

  onMenuToggle() {
    this.layoutService.onMenuToggle();
    this.showMenu = !this.showMenu;
    window.dispatchEvent(new Event('resize'))
    //this.panelService.resizePanel();
  }

  getUserName(): void {
    this.userName = localStorage.getItem('user');
    if (this.userName) {
      this.userName = JSON.parse(this.userName);
    }
  }
  onCheckShow(tenant: string) {
    return this.userService.getTenantName() == tenant;
  }
}
