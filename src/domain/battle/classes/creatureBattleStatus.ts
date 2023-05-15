import CreatureStatus from "../../creature/classes/creatureStatus";
import { CreatureAttribute } from "../../creature/types/attribute";

export default class CreatureBattleStatus {
  constructor(creatureStatus: CreatureStatus) {
    this._initialStatus = creatureStatus;
    this.initValues();
  }
  private _initialStatus: CreatureStatus;

  private _currentLife: number;
  private _currentStamina: number;
  private _currentAttackPower: number;
  private _currentDefensePower: number;
  private _currentSpeed: number;

  public get currentLife(): number {
    return this._currentLife;
  }
  public get currentStamina(): number {
    return this._currentStamina;
  }
  public get currentAttackPower(): number {
    return this._currentAttackPower;
  }
  public get currentDefensePower(): number {
    return this._currentDefensePower;
  }
  public get currentSpeed(): number {
    return this._currentSpeed;
  }
  private initValues() {
    this._currentLife = this._initialStatus.life;
    this._currentStamina = this._initialStatus.stamina;
    this._currentAttackPower = this._initialStatus.attackPower;
    this._currentDefensePower = this._initialStatus.defensePower;
    this._currentSpeed = this._initialStatus.speed;
  }
  damage(value: number) {
    this._currentLife -= value;
  }
  heal(value: number) {
    this._currentLife += value;
  }
  weary(value: number) {
    this._currentStamina -= value;
  }
  rest(value: number) {
    this._currentStamina += value;
  }
}
