import { Player } from "../../player/entity/player.entity";
import CreatureBattleStatus from "../classes/creatureBattleStatus";

export type BattlePlayer = {
  id: string;
  player: Player;
  selectedCreature: Creature;
  battleStatus: CreatureBattleStatus;
};
