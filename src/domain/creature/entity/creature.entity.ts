import { ElementEnum } from "../../@shared/enums/element.enum";
import CreatureSameNameOnchangeError from "../error/sameNameOnChange.error";
import { CreatureAttribute } from "../valueObjects/attribute";
import { CreatureAttributePoints } from "../valueObjects/attributePoints";
export type CreatureProps = {
  id: string;
  name: string;
  experiencePoints: number;
  level: number;
  element: ElementEnum;
  attributePoints: CreatureAttributePoints;
  baseAttribute: CreatureAttribute;
  selectableAttributes: CreatureAttribute;
};
export default class Creature {
  constructor(init?: CreatureProps) {
    if (init) {
      this._id = init.id;
      this._name = init.name;
      this._experiencePoints = init.experiencePoints;
      this._element = init.element;
      this._attributePoints = init.attributePoints;
      this._baseAttribute = init.baseAttribute;
      this._selectableAttributes = init.selectableAttributes;
    }
  }
  private _id: string;
  private _name: string;
  private _experiencePoints: number;
  private _level: number;
  private _element: ElementEnum;
  private _attributePoints: CreatureAttributePoints;
  private _baseAttribute: CreatureAttribute;
  private _selectableAttributes: CreatureAttribute;

  public get id(): string {
    return this._id;
  }
  public get name(): string {
    return this._name;
  }
  public get experiencePoints(): number {
    return this._experiencePoints;
  }
  public get level(): number {
    return this._level;
  }
  public get element(): ElementEnum {
    return this._element;
  }
  public get attributePoints(): CreatureAttributePoints {
    return this._attributePoints;
  }
  public get baseAttribute(): CreatureAttribute {
    return this._baseAttribute;
  }
  public get selectableAttributes(): CreatureAttribute {
    return this._selectableAttributes;
  }
  public get totalAttributes(): CreatureAttribute {
    let result: CreatureAttribute = {} as CreatureAttribute;
    for (const key of Object.keys(this.baseAttribute)) {
      result[key as keyof CreatureAttribute] =
        this.baseAttribute[key as keyof CreatureAttribute] +
        this.selectableAttributes[key as keyof CreatureAttribute];
    }
    return result;
  }
  public get experienceToLevelup(): number {
    return this.level * 100;
  }
  changeName(newName: string) {
    if (newName === this.name) {
      throw CreatureSameNameOnchangeError;
    }
    this._name = newName;
  }
  gainExperience(value: number) {
    this._experiencePoints += value;
    if (this._experiencePoints >= this.experienceToLevelup) {
      this._experiencePoints -= this.experienceToLevelup;
      this.levelUp();
    }
  }
  levelUp() {
    this._level++;
    this._attributePoints.total++;
    this._attributePoints.avaliable++;
  }
  useAttributePoints(attributeName: keyof CreatureAttribute) {
    if (this._attributePoints.avaliable > 0) {
      this._selectableAttributes[attributeName] += 1;
      this._attributePoints.avaliable--;
    }
  }
  resetAttributePoints() {
    for (const key of Object.keys(
      this._baseAttribute
    ) as unknown as keyof CreatureAttribute) {
      this._selectableAttributes[key as keyof CreatureAttribute] = 0;

      this._attributePoints.avaliable = this.attributePoints.total;
    }
  }
}
