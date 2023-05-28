import { BattleActionEnum } from "../enums/action.enum";
import Damage from "../math/damage.static";
import Dodge from "../math/dodge.static";
import Heal from "../math/heal.static";
import Rest from "../math/rest.static";
import Weary from "../math/weary.static";
import { BattleAction } from "../types/battleAction";
import { BattlePlayer } from "../types/battlePlayers";
import CreatureBattleStatus from "./creatureBattleStatus";

export type TRoundExecute = {
  id: string;
  player: BattlePlayer;
  action: BattleAction;
};
export default class BattleRound {
  constructor() {}
  private _actions: BattleAction[];

  get actions() {
    return this._actions;
  }

  pushAction(action: BattleAction) {
    if (this.actions.find((x) => x.originId === action.originId)) {
      return;
    }
    this._actions.push(action);
  }

  executeRound(players: BattlePlayer[]) {
    this.sortByVelocity();
    const battleExecutes = this.buildBattleExecute(players);
    for (const execute of battleExecutes) {
      this.affectCreature(
        execute,
        battleExecutes.find((x) => x.id === execute.action.targetId)
      );
    }
  }

  buildBattleExecute(players: BattlePlayer[]): TRoundExecute[] {
    return this._actions.map((action) => {
      action.power = this.calcActionPower(
        action,
        players.find((x) => x.id === action.originId)
          ?.battleStatus as CreatureBattleStatus
      );
      const player = players.find(
        (x) => x.id === action.originId
      ) as BattlePlayer;
      return {
        id: action.originId,
        player: player,
        action: action,
      };
    });
  }

  affectCreature(origin: TRoundExecute, target?: TRoundExecute) {
    if (origin.action.type === BattleActionEnum.baseAttack) {
      if (target?.action.type === BattleActionEnum.defensivePosition) {
        Damage.calcBaseAttackDamage(
          target.player.battleStatus,
          origin.action.power,
          target.action.power
        );
      }
      if (target?.action.type === BattleActionEnum.tryToDodge) {
        const hasDodge = Dodge.targetHasDodge(
          origin.player.battleStatus.currentSpeed,
          target.player.battleStatus.currentSpeed
        );
        if (hasDodge) {
          Weary.wearyAfterDodge(
            target.player.battleStatus,
            origin.action.power
          );
        } else {
          Damage.calcBaseAttackDamage(
            target.player.battleStatus,
            origin.action.power
          );
          Weary.wearyAfterDodgeFail(
            target.player.battleStatus,
            origin.action.power
          );
        }
      }
    }
    if (origin.action.type === BattleActionEnum.meditation) {
      Heal.meditationHeal(origin.player.battleStatus);
      Rest.meditationRest(origin.player.battleStatus);
    }
  }

  calcActionPower(
    battleAction: BattleAction,
    battleStatus: CreatureBattleStatus
  ) {
    switch (battleAction.type) {
      case BattleActionEnum.baseAttack:
        return battleStatus.currentAttackPower;
      case BattleActionEnum.defensivePosition:
        return battleStatus.currentDefensePower * 0.5;
      case BattleActionEnum.tryToDodge:
        return battleStatus.currentSpeed;
      case BattleActionEnum.meditation:
        return 0;
      default:
        return 0;
    }
  }
  sortByVelocity() {
    this._actions.sort((a, b) => a.originSpeed - b.originSpeed);
  }
}
