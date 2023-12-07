import {
  Component,
  HostListener,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  KtdGridComponent,
  KtdGridLayout,
  KtdGridLayoutItem,
  ktdTrackById,
} from '@katoid/angular-grid-layout';
import { DialogService } from 'primeng/dynamicdialog';
import {
  debounceTime,
  filter,
  fromEvent,
  merge,
  Subject,
  Subscription,
  takeUntil,
} from 'rxjs';

import {
  ChartType,
  PanelDto,
  Tab,
  UpdateWidgetPositionModel,
  WidgetType,
} from 'src/api-service/share-services/models';
import { WidgetService } from 'src/api-service/share-services/services';
import { PanelService } from 'src/app/services/panel.service';
import { UserInfoService } from 'src/app/services/user.service';
import { WidgetInfoService } from 'src/app/services/widget.services';
import { environment } from 'src/environments/environment';
import { ToastService } from 'src/helpers/services/toast.service';
import { AddWidgetComponent } from '../../admin/groups/add-widget/add-widget.component';
import { LayoutService } from 'src/app/shared/layout.service';

interface HomepageTab {
  title: string;
  icon: string;
}

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit, OnDestroy {
  //listTabname: HomepageTab[] = [{ title: 'Home', icon: 'pi pi-table' }];
  listTabname?: Tab[];
  selectedTabNameIndex: number = -1;
  selectedTabName?: string;
  constructor(
    private dialogservice: DialogService,
    private widgetService: WidgetInfoService,
    private route: ActivatedRoute,
    private userInfoService: UserInfoService,
    private toastService: ToastService,
    private widgetMangerService: WidgetService,
    private router: Router,
    private panelService: PanelService
  ) {}
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth <= 768) {
      this.cols = 1;
    } else {
      this.cols = 8;
    }
    this.loadWidget();
  }
  panel?: PanelDto;
  panel_id?: string;
  cols: number = 8;
  isAdmin?: boolean;
  widgetType = WidgetType;
  chartType = ChartType;
  layout?: KtdGridLayout;
  resizeSubscription?: Subscription;
  autoResize = true;
  isHomePage = false;
  lstHideWidget:any[] = []
  @ViewChild(KtdGridComponent, { static: true }) grid?: KtdGridComponent;
  trackById = ktdTrackById;
  destroy$: Subject<boolean> = new Subject<boolean>();
  ngOnInit(): void {
    if (window.screen.width <= 768) {
      this.cols = 1;
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.isAdmin = this.userInfoService.checkRole(['TenantAdmin', 'Admin']);
    if (this.route.snapshot.params['id']) {
      this.panel_id = this.route.snapshot.params['id'];
    } else {
      const appname = this.route.snapshot.params['appname'];
      if (appname) {
        this.panel_id = this.panelService.getPanelId(appname, true);
        this.isHomePage = true;
      }
    }
    this.loadWidget();

    this.resizeSubscription = merge(
      fromEvent(window, 'resize'),
      fromEvent(window, 'orientationchange')
    )
      .pipe(
        debounceTime(200),
        filter(() => this.autoResize)
      )
      .subscribe(() => {
        this.grid?.resize();
      });

    this.panelService.savePanel$
      .pipe(takeUntil(this.destroy$))
      .subscribe((i) => {
        if (i && i !== '') {
          this.savePanel();
        }
      });

    this.panelService.currentIsResizePanel$
      .pipe(takeUntil(this.destroy$), debounceTime(200))
      .subscribe((i) => {
        //if (i) this.loadWidget();
      });
  }
  addWidget() {
    this.openDialog();
  }
  loadWidget() {
    this.panel = this.widgetService.getWidgets(this.panel_id!);
    this.panel?.widgets?.forEach(item => {
      if(item.id == "64faec7a4b45e320b54d0d15"){
          item.tab_name = "5dfb4908-af1d-4d83-8242-5bc0951ed419";
      }
    });

    if (this.panel?.widgets && this.panel.panel_name) {
      if (this.panel?.tabs && this.panel.tabs.length > 0) {
        if (this.selectedTabName) {
          this.layout = this.panel?.widgets
            ? this.panel.widgets
                .filter(
                  (i) =>
                    !i.is_hidden &&
                    i.tab_name === this.selectedTabName &&
                    (this.isAdmin || i.widget_type != WidgetType.PowerBatch)
                )
                ?.map((i) => {
                  if(i.id == "64faec7a4b45e320b54d0d15"){
                    const item: KtdGridLayoutItem = {
                      id: i.id!,
                      h: 2,
                      w: 1,
                      x: 4,
                      y: 0,
                    };
                    return item;
                  }
                  const item: KtdGridLayoutItem = {
                    id: i.id!,
                    h: i.position?.height!,
                    w: this.cols != 1 ? i.position?.width! : 1,
                    x: this.cols != 1 ? i.position?.x! : 0,
                    y: this.cols != 1 ? i.position?.y! : 0,
                  };
                  return item;
                })
            : [];
        } else {
          this.listTabname = this.panel?.tabs.sort((a, b) =>
            a.priority! > b.priority! ? 1 : b.priority! > a.priority! ? -1 : 0
          );

          this.layout = this.panel?.widgets
            ? this.panel.widgets
                .filter(
                  (i) =>
                    !i.is_hidden &&
                    i.tab_name == this.listTabname![0].id &&
                    (this.isAdmin || i.widget_type != WidgetType.PowerBatch)
                )
                ?.map((i) => {
                  if(i.id == "64faec7a4b45e320b54d0d15"){
                    const item: KtdGridLayoutItem = {
                      id: i.id!,
                      h: 2,
                      w: 1,
                      x: 4,
                      y: 0,
                    };
                    return item;
                  }
                  const item: KtdGridLayoutItem = {
                    id: i.id!,
                    h: i.position?.height!,
                    w: this.cols != 1 ? i.position?.width! : 1,
                    x: this.cols != 1 ? i.position?.x! : 0,
                    y: this.cols != 1 ? i.position?.y! : 0,
                  };

                  return item;
                })
            : [];
        }
      } else {
        this.layout = this.panel?.widgets
          ? this.panel.widgets
              .filter(
                (i) =>
                  !i.is_hidden &&
                  (this.isAdmin || i.widget_type != WidgetType.PowerBatch)
              )
              ?.map((i) => {
                if(i.id == "64faec7a4b45e320b54d0d15"){
                  const item: KtdGridLayoutItem = {
                    id: i.id!,
                    h: 2,
                    w: 1,
                    x: 4,
                    y: 0,
                  };
                  return item;
                }
                const item: KtdGridLayoutItem = {
                  id: i.id!,
                  h: i.position?.height!,
                  w: this.cols != 1 ? i.position?.width! : 1,
                  x: this.cols != 1 ? i.position?.x! : 0,
                  y: this.cols != 1 ? i.position?.y! : 0,
                };
                return item;
              })
          : [];
      }

      if (this.selectedTabNameIndex == -1) {
        this.selectedTabNameIndex = 0;
      }
    }
  }
  onLayoutUpdated(layout: KtdGridLayout) {
    console.log('on layout updated', layout);
    this.layout = layout;
  }

  openDialog(id?: string) {
    const ref = this.dialogservice.open(AddWidgetComponent, {
      data: { id: id, panel_id: this.panel_id },

      header: id ? 'Edit Widget' : 'Add Widget',
      width: '50%',
      position: 'top',
      maximizable: true,
    });
    ref.onClose.subscribe((r) => {
      this.panel?.widgets?.push(r);
    });
  }
  savePanel() {
    let updateModel = this.layout?.map((i) => {
      const item: UpdateWidgetPositionModel = {
        widget_id: i.id,
        position: { x: i.x, y: i.y, width: i.w, height: i.h },
        is_hidden: this.lstHideWidget.some(n=>n == i.id!)
      };
      return item;
    });
    const hideWidget = this.lstHideWidget.map((i) => {
      const item: UpdateWidgetPositionModel = {
        widget_id: i.id,
        position: { x: i.x, y: i.y, width: i.w, height: i.h },
        is_hidden: true
      };
      return item;
    });
    updateModel =   updateModel?.concat(hideWidget)
    this.widgetMangerService
      .widgetPositionPost({ body: updateModel })
      .subscribe((i) => {
        this.toastService.success('update panel successfully');
        this.widgetService.loadLeftMenu(this.userInfoService.getTenantName());
        this.panelService.setPanelId('');
      });
  }

  onChangeTabName(tabName?: string | null, index?: number) {
    this.selectedTabName = tabName!;
    this.selectedTabNameIndex = index!;
    if (tabName == 'null' || (this.isHomePage && tabName == 'Home')) {
      this.layout = this.panel?.widgets
        ? this.panel.widgets
            .filter(
              (i) => !i.is_hidden && (i.tab_name == null || i.tab_name === '')
            )
            ?.map((i) => {
              const item: KtdGridLayoutItem = {
                id: i.id!,
                h: i.position?.height!,
                w: this.cols != 1 ? i.position?.width! : 1,
                x: this.cols != 1 ? i.position?.x! : 0,
                y: this.cols != 1 ? i.position?.y! : 0,
              };
              return item;
            })
        : [];
    } else {
      this.layout = this.panel?.widgets
        ? this.panel.widgets
            .filter((i) => !i.is_hidden && i.tab_name == tabName)
            ?.map((i) => {
              const item: KtdGridLayoutItem = {
                id: i.id!,
                h: i.position?.height!,
                w: this.cols != 1 ? i.position?.width! : 1,
                x: this.cols != 1 ? i.position?.x! : 0,
                y: this.cols != 1 ? i.position?.y! : 0,
              };
              return item;
            })
        : [];
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  hideWidget(widget_id?: string) {
    const widgetHiden = this.layout?.find(i=>i.id == widget_id);
    this.lstHideWidget.push(widgetHiden);
    this.layout =  this.layout?.filter(i=>i.id != widget_id)
  }
  
}
