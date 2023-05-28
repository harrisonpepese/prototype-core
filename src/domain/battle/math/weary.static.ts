import CreatureBattleStatus from "../classes/creatureBattleStatus";

export default class Weary {
  static wearyAfterDodge(target: CreatureBattleStatus, actionPower: number) {
    target.weary(actionPower * 0.5);
  }
  static wearyAfterDodgeFail(
    target: CreatureBattleStatus,
    actionPower: number
  ) {
    target.weary(actionPower * 0.3);
  }
}
