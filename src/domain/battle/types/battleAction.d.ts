import CreatureStatus from "../../creature/classes/creatureStatus";
import Creature from "../../creature/entity/creature.entity";
import { BattleActionEnum } from "../enums/action.enum";

export type BattleAction = {
  originId: string;
  targetId: string;
  originSpeed: number;
  type: BattleActionEnum;
  power: number;
};
