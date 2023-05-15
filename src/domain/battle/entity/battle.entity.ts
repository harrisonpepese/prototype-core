import { BattleStatus } from "../enums/status.enum";
import { BattlePlayer } from "../types/battlePlayers";

export default class Battle {
  id: string;
  state: BattleStatus;
  players: BattlePlayer[];
  rounds: [];
}
