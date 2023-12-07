import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-battery-level',
  templateUrl: './battery-level.component.html',
  styleUrls: ['./battery-level.component.scss'],
})
export class BatteryLevelComponent implements OnInit {
  @Input() level = 0;

  constructor() {}

  ngOnInit(): void {}
}
