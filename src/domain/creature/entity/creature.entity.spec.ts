import CreatureSameNameOnchangeError from "../error/sameNameOnChange.error";
import { creatureMock } from "../mocks/entity.mock";

describe("User entity tests", () => {
  it("change name", () => {
    const name = "name";
    creatureMock.changeName(name);
    expect(creatureMock.name).toBe(name);
  });
  it("change name error", () => {
    try {
      const name = "name";
      creatureMock.changeName(name);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toEqual(CreatureSameNameOnchangeError);
    }
  });
  it("gainExperience", () => {
    const xpToGain = 30;
    const currentXp = creatureMock.experiencePoints;
    creatureMock.gainExperience(xpToGain);
    expect(creatureMock.experiencePoints).toBe(currentXp + xpToGain);
  });
  it("levelUp", () => {
    const currentlevel = creatureMock.level;
    const totalAttrPoints = creatureMock.attributePoints.total;
    const avaliableAttrPoints = creatureMock.attributePoints.avaliable;
    creatureMock.levelUp();
    expect(creatureMock.level).toBe(currentlevel + 1);
    expect(creatureMock.attributePoints.total).toBe(totalAttrPoints + 1);
    expect(creatureMock.attributePoints.avaliable).toBe(
      avaliableAttrPoints + 1
    );
  });
  it("useAttributePoints", () => {
    const currentselectabeattribute =
      creatureMock.selectableAttributes.strength;
    const currentTotalPointsattribute = creatureMock.totalAttributes.strength;
    const avaliableAttrPoints = creatureMock.attributePoints.avaliable;
    creatureMock.useAttributePoints("strength");
    expect(creatureMock.selectableAttributes.strength).toBe(
      currentselectabeattribute + 1
    );
    expect(creatureMock.totalAttributes.strength).toBe(
      currentTotalPointsattribute + 1
    );
    expect(creatureMock.attributePoints.avaliable).toBe(
      avaliableAttrPoints - 1
    );
  });
  it("resetAttributePoints", () => {
    const avaliableAttrPoints = creatureMock.attributePoints.avaliable;
    creatureMock.resetAttributePoints();
    expect(creatureMock.selectableAttributes.strength).toBe(0);
    expect(creatureMock.totalAttributes.strength).toBe(
      creatureMock.baseAttribute.strength
    );
    expect(creatureMock.attributePoints.avaliable).toBe(
      creatureMock.attributePoints.total
    );
  });
});
