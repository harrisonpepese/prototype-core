import { BattleActionEnum } from "../enums/action.enum";

export type BattleAction = {
  originId: string;
  targetId: string;
  actionType: BattleActionEnum;
};
