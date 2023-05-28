import CreatureBattleStatus from "../classes/creatureBattleStatus";

export default class Rest {
  static meditationRest(target: CreatureBattleStatus) {
    target.rest(target.initialStatus.stamina * 0.2);
  }
}
