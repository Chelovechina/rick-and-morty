import { ISortState } from "./ISortState";
import { ICharacter } from "./ICharacter";

export interface IState {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: ICharacter[];
  sort: ISortState;
  error: Error | null;
  status: "loading" | "";
}
