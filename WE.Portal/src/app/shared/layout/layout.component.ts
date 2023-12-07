import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { SignalrMeasurementService } from 'src/app/services/signalr.service';
import { LayoutService } from '../layout.service';
import { MenuComponent } from '../menu/menu.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { TenantSettingService } from 'src/api-service/iot-services/services';
import { DomSanitizer, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  overlayMenuOpenSubscription: Subscription;

  menuOutsideClickListener: any;

  profileMenuOutsideClickListener: any;
  @ViewChild(MenuComponent) appMenu!: MenuComponent;
  @ViewChild(TopbarComponent) appTopbar!: TopbarComponent;
  logoUrl: any; //set by api later
 
  private favIcon: HTMLLinkElement|null = document.querySelector('#favicon');
  constructor(
    public layoutService: LayoutService,
    public renderer: Renderer2,
    public router: Router,
    private signalrMesuaService: SignalrMeasurementService,
    private tenantSettingService: TenantSettingService,
    private sanitizer: DomSanitizer,
    private titleService: Title,
  ) {
    signalrMesuaService.startConnection('');
    this.signalrMesuaService.addTransferChartDataListener();
    this.overlayMenuOpenSubscription =
      this.layoutService.overlayOpen$.subscribe(() => {
        if (!this.menuOutsideClickListener) {
          this.menuOutsideClickListener = this.renderer.listen(
            'document',
            'click',
            (event) => {
              const isOutsideClicked = !(
                this.appMenu.el.nativeElement.isSameNode(event.target) ||
                this.appMenu.el.nativeElement.contains(event.target) ||
                this.appTopbar.menuButton.nativeElement.isSameNode(
                  event.target
                ) ||
                this.appTopbar.menuButton.nativeElement.contains(event.target)
              );

              if (isOutsideClicked) {
                this.hideMenu();
              }
            }
          );
        }

        if (!this.profileMenuOutsideClickListener) {
          this.profileMenuOutsideClickListener = this.renderer.listen(
            'document',
            'click',
            (event) => {
              const isOutsideClicked = !(
                this.appTopbar.menu.nativeElement.isSameNode(event.target) ||
                this.appTopbar.menu.nativeElement.contains(event.target) ||
                this.appTopbar.topbarMenuButton.nativeElement.isSameNode(
                  event.target
                ) ||
                this.appTopbar.topbarMenuButton.nativeElement.contains(
                  event.target
                )
              );

              if (isOutsideClicked) {
                this.hideProfileMenu();
              }
            }
          );
        }

        if (this.layoutService.state.staticMenuMobileActive) {
          this.blockBodyScroll();
        }
      });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.hideMenu();
        this.hideProfileMenu();
      });
      
  }
  ngOnInit(): void {
    if(localStorage.getItem("user")){
      var user = JSON.parse(localStorage.getItem("user")!);
      if (user.tenant_title) this.titleService.setTitle(user.tenant_title);
      if(user.tenant_icon_favicon && this.favIcon) this.favIcon.href = user.tenant_icon_favicon; 
    }
    if (localStorage.getItem('logoUrl')) {
      this.logoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `data:image/png;base64, ${localStorage.getItem('logoUrl')}`) ;
    } else {
      this.getTenantLogo();
    }
  }
  private getParams(route: ActivatedRoute) {
    // route param names (eg /a/:personId) must be ditinct within
    // a route otherwise they'll be overwritten
    let params = route.snapshot.params;
    params = { ...route.snapshot.queryParams, ...params };
    if (route.children) {
      for (let r of route.children) {
        params = { ...this.getParams(r), ...params };
      }
    }
    return params;
  }

  hideMenu() {
    this.layoutService.state.overlayMenuActive = false;
    this.layoutService.state.staticMenuMobileActive = false;
    this.layoutService.state.menuHoverActive = false;
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }

  hideProfileMenu() {
    this.layoutService.state.profileSidebarVisible = false;
    if (this.profileMenuOutsideClickListener) {
      this.profileMenuOutsideClickListener();
      this.profileMenuOutsideClickListener = null;
    }
  }

  blockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
    } else {
      document.body.className += ' blocked-scroll';
    }
  }

  unblockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
    } else {
      document.body.className = document.body.className.replace(
        new RegExp(
          '(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)',
          'gi'
        ),
        ' '
      );
    }
  }

  get containerClass() {
    return {
      'layout-theme-light': this.layoutService.config.colorScheme === 'light',
      'layout-theme-dark': this.layoutService.config.colorScheme === 'dark',
      'layout-overlay': this.layoutService.config.menuMode === 'overlay',
      'layout-static': this.layoutService.config.menuMode === 'static',
      'layout-slim': this.layoutService.config.menuMode === 'slim',
      'layout-horizontal': this.layoutService.config.menuMode === 'horizontal',
      'layout-static-inactive':
        this.layoutService.state.staticMenuDesktopInactive &&
        this.layoutService.config.menuMode === 'static',
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
      'p-input-filled': this.layoutService.config.inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.config.ripple,
    };
  }

  getTenantLogo(): void {
    this.tenantSettingService
      .tenantsettingGet({ key: 'Logo' })
      .subscribe((res) => {
        this.logoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          `data:image/png;base64, ${res}`
        );
        console.log('url', this.logoUrl)
        localStorage.setItem('logoUrl', res);
      });
  }

  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }

    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }
}
