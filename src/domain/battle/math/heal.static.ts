import CreatureBattleStatus from "../classes/creatureBattleStatus";

export default class Heal {
  static meditationHeal(target: CreatureBattleStatus) {
    target.heal(target.initialStatus.life * 0.2);
  }
}
