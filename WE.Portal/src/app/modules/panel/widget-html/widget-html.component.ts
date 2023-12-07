import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.scss'],
})
export class WidgetHtmlComponent implements OnInit, AfterViewInit {
  @Input() content?: string;
  @Input() widget_under_title_description?: string | null;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    (<any>window).twttr.widgets.load();
  }
}
