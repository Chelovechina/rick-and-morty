import { ISortState } from "./ISortState";
import { ICharacter } from "./ICharacter";
import { IInfo } from "./IInfo";
import { IFullCharacter } from "./IFullCharacter";

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
  currentCharacter: IFullCharacter;
}
