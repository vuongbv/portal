import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {
  DevicePowerModel,
  DevicePowerStatus,
} from 'src/api-service/iot-services/models';
import {
  DeviceService,
  OperationService,
} from 'src/api-service/iot-services/services';
import { ToastService } from 'src/helpers/services/toast.service';

@Component({
  selector: 'app-widget-operation',
  templateUrl: './widget-operation.component.html',
  styleUrls: ['./widget-operation.component.scss'],
})
export class WidgetOperationComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() device_id?: string;
  @Input() data_aggregate_type?: string;
  @Input() widget_id = '';
  @Input() pin_number?:string|null;
  @Input() widget_under_title_description?: string | null;
  turnOffForm!: FormGroup;
  deviceName: string = '';
  dateFormat = 'dd/mm/yy';
  gtDeviceCommands: any;

  constructor(
    private fb: FormBuilder,
    private deviceService: DeviceService,
    private operationService: OperationService,
    private toastService: ToastService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getOperationStatus();
    this.loadOperationByDeviceId();
  }

  get fc() {
    return this.turnOffForm.controls;
  }

  initForm(): void {
    this.turnOffForm = this.fb.group({
      status: [true],
      fromDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  submitOnOffForm(): void {
    if (this.turnOffForm.valid && this.device_id && this.data_aggregate_type) {
      const params: DevicePowerModel = {
        pin_number: this.pin_number,
        pin_state: this.fc['status'].value
          ? DevicePowerStatus.On
          : DevicePowerStatus.Off,

        start_date: this.fc['fromDate'].value,
        end_date: this.fc['endDate'].value,
      };

      if(!this.pin_number) {
        this.toastService.error('Device without PinNumber!');
        return;
      }

      this.ngxService.startLoader(this.widget_id);
      this.operationService
        .operationDevicePost({
          device: this.device_id,
          body: params,
        })
        .subscribe((res) => {
          this.toastService.success('Update Device Status Successfully!');
        });
      this.ngxService.stopLoader(this.widget_id);
    }
  }

  getOperationStatus(): void {
    if (this.device_id) {
      this.ngxService.startLoader(this.widget_id);
      this.deviceService
        .deviceSourceIdSourceGet({ source_id: this.device_id })
        .subscribe((res) => {
          this.ngxService.stopLoader(this.widget_id);
          this.deviceName = res.name!;
          if (res.operation_status === 'On') {
            this.fc['status'].setValue(true);
          } else {
            this.fc['status'].setValue(false);
          }
        });
    }
  }

  loadOperationByDeviceId() {
     this.operationService.operationIdGet({id:this.device_id ? this.device_id : ''}).subscribe((res) => {
      if (!res) return;

      this.gtDeviceCommands = res.gt_device_commands;
    });
  }

  cancelOperation(cno: string) {
    const params = {
      cno
    }

    this.operationService.operationCancelCnoGet(params).subscribe((res)=>{
      if (!res) return;

      this.toastService.success(res);
      this.loadOperationByDeviceId();
    });
  }
}
