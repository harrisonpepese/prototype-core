import CreatureBattleStatus from "../classes/creatureBattleStatus";

export default class Damage {
  static calcBaseAttackDamage(
    targetBattleStatus: CreatureBattleStatus,
    actionPower: number,
    defBonus?: number
  ) {
    const defense = targetBattleStatus.currentDefensePower + (defBonus || 0);
    const damage = actionPower - defense;
    if (damage <= 0) {
      targetBattleStatus.damage(1);
    }
    targetBattleStatus.damage(damage);
  }
}
