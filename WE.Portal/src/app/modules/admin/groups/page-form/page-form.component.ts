import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

import {
  CreatePanelModel,
  GroupDto,
  PanelDto,
  WidgetDto,
  WidgetTemplateDto,
} from 'src/api-service/share-services/models';
import {
  GroupsService,
  PanelService,
  SettingService,
} from 'src/api-service/share-services/services';
import { UserInfoService } from 'src/app/services/user.service';
import { WidgetInfoService } from 'src/app/services/widget.services';
import { ToastService } from 'src/helpers/services/toast.service';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.scss'],
})
export class PageFormComponent implements OnInit {
  panel: PanelDto = { widgets: [] };
  widgets: WidgetDto[] = [];
  groups: GroupDto[] = [];
  LIST_ROLE = [
    {
      name: 'Admin',
    },
    {
      name: 'Reader',
    },
    {
      name: 'Operator',
    },
  ];
  widgetTemplates: WidgetTemplateDto[] = [];
  constructor(
    private groupService: GroupsService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private toastService: ToastService,
    private panelSevice: PanelService,
    private userInfoService: UserInfoService,
    private WidgetInfoService: WidgetInfoService,
    private widgetTemplateService: SettingService
  ) {}

  ngOnInit(): void {
    this.groupService
      .tenantNameGroupsSearchGet({
        tenant_name: this.userInfoService.getTenantName(),
      })
      .subscribe((i) => (this.groups = i.items!));
    this.loadTemplate();
    if (this.config.data.id) {
      this.panelSevice
        .apiPanelIdGet({
          id: this.config.data.id,
        })
        .subscribe((i) => (this.panel = i as CreatePanelModel));
    }
  }
  loadTemplate() {
    this.widgetTemplateService
      .settingWidgettemplateGet()
      .subscribe((i) => (this.widgetTemplates = i));
  }
  save() {
    if (this.config.data.id) {
      this.panelSevice
        .apiPanelIdPut({
          id: this.config.data.id,
          body: this.panel,
        })
        .subscribe((i) => {
          this.toastService.success('Update Page successfull');
          this.ref.close();
          this.WidgetInfoService.loadLeftMenu(
            this.userInfoService.getTenantName()
          );
        });
    } else {
      this.panelSevice
        .apiPanelPost({
          body: this.panel,
        })
        .subscribe((i) => {
          this.toastService.success('Create Page successfull');
          this.WidgetInfoService.loadLeftMenu(
            this.userInfoService.getTenantName()
          );
          this.ref.close();
        });
    }
  }
  addWidget() {
    this.panel.widgets?.unshift({
      panel_id: this.panel.id,
      position: { height: 1, width: 1, x: 0, y: 0 },
    });
  }
}
