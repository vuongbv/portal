import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-title-tooltip',
  templateUrl: './title-tooltip.component.html',
  styleUrls: ['./title-tooltip.component.scss'],
})
export class TitleTooltipComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() date?: Date;
  @Input() widget_under_title_description?: string | null;
  constructor() {}
  subtitle?: string;
  ngOnInit(): void {
    this.title = this.title
      .replace(
        '[CurrentDateTime]',
        moment(new Date()).format('DD-MM-yyyy HH:mm')
      )
      .replace(
        '[PrevDateTime]',
        moment(new Date()).subtract(1, 'days').format('DD-MM-yyyy HH:mm')
      );
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.date) {
      this.subtitle = 'as of ' + moment(this.date).format('DD MMM, HH:mm');
    }
    if (this.widget_under_title_description) {
      this.subtitle = this.widget_under_title_description;
    }
  }
}
