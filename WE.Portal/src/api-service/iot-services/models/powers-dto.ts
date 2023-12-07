/* tslint:disable */
/* eslint-disable */
import { PowerDto } from './power-dto';
export interface PowersDto {
  all?: null | Array<string>;
  id?: null | string;
  zones?: null | Array<PowerDto>;
}
