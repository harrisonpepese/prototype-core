import { ElementEnum } from "../../@shared/enums/element.enum";
import Creature from "../entity/creature.entity";
import { CreatureAttribute } from "../valueObjects/attribute";

export const baseAttributeMock: CreatureAttribute = {
  strength: 5,
  defense: 5,
  intelligence: 5,
  agility: 5,
  vitality: 5,
};
export const creatureMock: Creature = new Creature({
  id: "mongodb_hash",
  name: "creature",
  experiencePoints: 20,
  level: 5,
  element: ElementEnum.fire,
  attributePoints: {
    total: 5,
    avaliable: 5,
  },
  baseAttribute: baseAttributeMock,
  selectableAttributes: {
    strength: 0,
    defense: 0,
    intelligence: 0,
    agility: 0,
    vitality: 0,
  },
});
