import Random from "../../@shared/utils/Random.utils";

export default class Dodge {
  static targetHasDodge(originSpeed: number, targetSpeed: number): boolean {
    const seed = Random.random();
    if (originSpeed === targetSpeed) {
      return seed < 0.5 ? true : false;
    }
    const max = Math.max(originSpeed, targetSpeed);
    const originChance = originSpeed / max;
    const targetChance = targetSpeed / max;
    if (originChance > targetChance) {
      if (seed > targetChance) {
        return false;
      }
      return true;
    } else {
      if (seed < originChance) {
        return false;
      }
      return true;
    }
  }
}
