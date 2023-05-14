import { BattleStatus } from "../enums/status.enum";

export default class Battle {
  id: string;
  state: BattleStatus;
  players: [];
  rounds: [];
}
