import { ISortState } from "./ISortState";
import { ICharacter } from "./ICharacter";
import { IInfo } from "./IInfo";

export enum StatusEnum {
  LOADING = "LOADING",
  FULLFILLED = "FULLFILLED",
  ERROR = "ERROR",
}

export interface IState {
  info: IInfo;
  characters: ICharacter[];
  sort: ISortState;
  errorMessage: string;
  status: StatusEnum;
}
