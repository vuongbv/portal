import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LazyLoadEvent } from 'primeng/api';

import {
  AlarmSettingService,
  TenantSettingService,
} from 'src/api-service/iot-services/services';
import { ToastService } from 'src/helpers/services/toast.service';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss'],
})
export class TariffComponent implements OnInit {
  tenant = {};
  id?: string;
  tariffs: any[] = [];
  pageIndex = 0;
  pageSize = 3;
  total: number = 0;
  value: number = 0;
  unit: string = '';
  constructor(
    private toastService: ToastService,
    private tariffService: TenantSettingService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.tariffService.tenantsettingGet({ key: 'Tariff' }).subscribe((i) => {
      if (i) {
        this.unit = i.tariff_unit;
        this.value = i.tariff_value;
        this.id = i.id!;
      }
    });
  }
  loadTariff(event: LazyLoadEvent) {
    this.ngxService.startLoader('mainLoader')
    var pageIndex = event.first! / event.rows!;
    this.tariffService
      .tenantsettingTariffGet({
        page_index: pageIndex,
        page_size: event.rows,
      })
      .subscribe((i) => {
        this.ngxService.stopLoader('mainLoader')
        this.tariffs = i.items!;
        this.total = i.total_count!;
      });
  }
  save() {
    this.ngxService.startLoader('mainLoader')
    this.tariffService
      .tenantsettingPost({
        body: { unit: this.unit, value: this.value },
        key: 'Tariff',
      })
      .subscribe((i) => {
        this.ngxService.stopLoader('mainLoader')
        this.toastService.success('update tariff successfull');
      });
  }
}
