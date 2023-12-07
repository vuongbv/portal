import { Component, OnInit, Input } from '@angular/core';
import { Action } from 'src/api-service/iot-services/models';
import { ActionType, SeverityType } from 'src/api-service/iot-services/models';
import { ActionTypeSelect, SeverityTypeSelect } from 'src/helpers/enum';
@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.scss']
})
export class AddActionComponent implements OnInit {
  @Input() action: Action = {
   
  };
  actiontype = ActionTypeSelect;
  selectedactiontype?: ActionType;

  severitytype = SeverityTypeSelect;
  selecteseveritytype?: SeverityType;
  
  @Input() actionTemplates: Action[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
