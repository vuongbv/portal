import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { PanelDto } from 'src/api-service/share-services/models';
import { PanelService } from 'src/api-service/share-services/services';



import { ToastService } from 'src/helpers/services/toast.service';
import { PageFormComponent } from '../page-form/page-form.component';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss'],
})
export class PageListComponent implements OnInit {
  panels: PanelDto[] = [];

  pageindex = 1;
  pagesize = 10;
  total = 0;
  constructor(
    private panelService: PanelService,
    private dialogservice: DialogService
  ) {}

  ngOnInit(): void {}
  loadUsers() {
    this.panelService
      .apiPanelGet({
        page_size: this.pagesize,
        page_index: this.pageindex,
      })
      .subscribe((i) => {
        this.panels = i.items!;
        this.total = i.total_count!;
      });
  }
  lazyLoadTabel(event: LazyLoadEvent) {
    this.pageindex = event.first != 0 ?event.first! / event.rows! + 1 : 1;
    this.pagesize = event.rows!;
    this.loadUsers();
  }
  edit(id: string) {
    this.opendialog(id);
  }

  addNew() {
    this.opendialog(null);
  }

  onSearch() {
    this.loadUsers();
  }

  private opendialog(id: string | null) {
    const ref = this.dialogservice.open(PageFormComponent, {
      data: { id: id  },
      header: 'Edit Page',
      width: '50%',
      position: 'top',
      maximizable: true,
    });
    ref.onClose.subscribe((r) => {
      if (r) {
        this.pageindex = 1
        this.loadUsers();
      }
    });
  }
}
