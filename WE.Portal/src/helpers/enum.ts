import {
  DataResultType,
  RecepientType,
  Operator,
  ActionType,
  SeverityType,
} from 'src/api-service/iot-services/models';
import {
  AlarmAuditStatus,
  AlarmAuditType,
  ChartType,
  DataAggregateType,
  Periodicity,
  UserAuditStatus,
  WidgetType,
} from 'src/api-service/share-services/models';

export const WidgetTypes: {
  key: string;
  value: string;
}[] = Object.entries(WidgetType).map(([key, value]) => ({ key, value }));

export const ChartTypes: {
  key: string;
  value: string;
}[] = Object.entries(ChartType).map(([key, value]) => ({ key, value }));

export const aggregateTypes: {
  key: string;
  value: string;
}[] = Object.entries(DataAggregateType).map(([key, value]) => ({ key, value }));
export const ResultTypes: {
  key: string;
  value: string;
}[] = Object.entries(DataResultType).map(([key, value]) => ({ key, value }));

export const Periodicities: {
  key: string;
  value: string;
}[] = Object.entries(Periodicity).map(([key, value]) => ({ key, value }));

export const AlarmAuditStatuses: {
  key: string;
  value: string;
}[] = Object.entries(AlarmAuditStatus).map(([key, value]) => ({ key, value }));

export const AlarmAuditTypes: {
  key: string;
  value: string;
}[] = Object.entries(AlarmAuditType).map(([key, value]) => ({ key, value }));
export const UserAuditStatuses: {
  key: string;
  value: string;
}[] = Object.entries(UserAuditStatus).map(([key, value]) => ({ key, value }));
export const RecepientTypes: {
  key: string;
  value: string;
}[] = Object.entries(RecepientType).map(([key, value]) => ({ key, value }));

export const OperatorType: {
  key: string;
  value: string;
}[] = Object.entries(Operator).map(([key, value]) => ({ key, value }));

export const ActionTypeSelect: {
  key: string;
  value: string;
}[] = Object.entries(ActionType).map(([key, value]) => ({
  key: key == 'Sms' ? key.toUpperCase() : key,
  value,
}));

export const SeverityTypeSelect: {
  key: string;
  value: string;
}[] = Object.entries(SeverityType).map(([key, value]) => ({ key, value }));
