import { CreatureAttribute } from "../types/attribute";
export default class CreatureStatus {
  constructor(attributes: CreatureAttribute) {
    this._life = 20 + attributes.vitality * 2;
    this._stamina = 10 + attributes.intelligence * 2;
    this._attackPower = 5 + attributes.strength * 2;
    this._defensePower = 5 + attributes.defense * 2;
    this._speed = 5 + attributes.agility * 2;
  }
  private _life: number;
  private _stamina: number;
  private _attackPower: number;
  private _defensePower: number;
  private _speed: number;

  get life() {
    return this._life;
  }
  get stamina() {
    return this._stamina;
  }
  get attackPower() {
    return this._attackPower;
  }
  get defensePower() {
    return this._defensePower;
  }
  get speed() {
    return this._speed;
  }
}
