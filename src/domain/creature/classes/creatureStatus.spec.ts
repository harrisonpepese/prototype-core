import CreatureStatus from "./creatureStatus";

describe("Creature Status test", () => {
  it("constructor", () => {
    const entity = new CreatureStatus({
      strength: 2,
      defense: 2,
      intelligence: 2,
      agility: 2,
      vitality: 2,
    });
    expect(entity.attackPower).toBe(9);
    expect(entity.defensePower).toBe(9);
    expect(entity.life).toBe(24);
    expect(entity.stamina).toBe(14);
    expect(entity.speed).toBe(9);
  });
});
