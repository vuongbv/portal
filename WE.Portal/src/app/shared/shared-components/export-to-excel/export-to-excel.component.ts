import { Component, Input, OnInit } from '@angular/core';
import { TableUtil } from './tableUtil';
import { SelectionModel } from '@angular/cdk/collections';
import { AlarmNotificationDto } from 'src/api-service/share-services/models';
import { ToastService } from 'src/helpers/services/toast.service';

@Component({
  selector: 'app-export-to-excel',
  templateUrl: './export-to-excel.component.html',
  styleUrls: ['./export-to-excel.component.scss']
})
export class ExportToExcelComponent implements OnInit {
  // @Input() selectionItems = new SelectionModel<AlarmNotificationDto[]>(true, []);
  @Input() selectionItems: AlarmNotificationDto[] = [];
  @Input() tableName: string = "DefaultTable";
  constructor(
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
  }

  onCreateExcel() {
    if (this.selectionItems.length == 0) {
      this.toastService.info("No data to export", "Message");
      return;
    }
    TableUtil.exportArrayToExcel(this.selectionItems, this.tableName);
  }
 

}
