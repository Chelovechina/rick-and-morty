import { ICharacter } from "./ICharacter";
import { IEpisode } from "./IEpisode";

export interface IFullCharacter extends ICharacter {
  firstEpisode: IEpisode;
  lastEpisode: IEpisode;
}
