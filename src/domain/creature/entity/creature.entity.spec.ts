import CreatureStatus from "../classes/creatureStatus";
import CreatureSameNameOnchangeError from "../error/sameNameOnChange.error";
import { creatureMock } from "../mocks/entity.mock";
import Creature from "./creature.entity";

describe("User entity tests", () => {
  const creature = new Creature(creatureMock);
  it("change name", () => {
    const name = "name";
    creature.changeName(name);
    expect(creature.name).toBe(name);
  });
  it("change name error", () => {
    try {
      const name = "name";
      creature.changeName(name);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toEqual(CreatureSameNameOnchangeError);
    }
  });
  it("getters", () => {
    expect(creature.id).toBe(creatureMock.id);
    expect(creature.element).toBe(creatureMock.element);
  });

  it("gainExperience", () => {
    const xpToGain = 30;
    const currentXp = creature.experiencePoints;
    creature.gainExperience(xpToGain);
    expect(creature.experiencePoints).toBe(currentXp + xpToGain);
  });

  it("gainExperience and level up", () => {
    const currentlevel = creature.level;
    creature.gainExperience(currentlevel * 100);
    expect(creature.level).toBe(currentlevel + 1);
  });
  it("Status", () => {
    const status = creature.status;
    expect(status).toStrictEqual(new CreatureStatus(creature.totalAttributes));
  });

  it("levelUp", () => {
    const currentlevel = creature.level;
    const totalAttrPoints = creature.attributePoints.total;
    const avaliableAttrPoints = creature.attributePoints.avaliable;
    creature.levelUp();
    expect(creature.level).toBe(currentlevel + 1);
    expect(creature.attributePoints.total).toBe(totalAttrPoints + 1);
    expect(creature.attributePoints.avaliable).toBe(avaliableAttrPoints + 1);
  });
  it("useAttributePoints", () => {
    const currentselectabeattribute = creature.selectableAttributes.strength;
    const currentTotalPointsattribute = creature.totalAttributes.strength;
    const avaliableAttrPoints = creature.attributePoints.avaliable;
    creature.useAttributePoints("strength");
    expect(creature.selectableAttributes.strength).toBe(
      currentselectabeattribute + 1
    );
    expect(creature.totalAttributes.strength).toBe(
      currentTotalPointsattribute + 1
    );
    expect(creature.attributePoints.avaliable).toBe(avaliableAttrPoints - 1);
  });
  it("resetAttributePoints", () => {
    creature.resetAttributePoints();
    expect(creature.selectableAttributes.strength).toBe(0);
    expect(creature.totalAttributes.strength).toBe(
      creature.baseAttribute.strength
    );
    expect(creature.attributePoints.avaliable).toBe(
      creature.attributePoints.total
    );
  });
});
