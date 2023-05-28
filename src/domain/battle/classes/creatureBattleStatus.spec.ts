import CreatureStatus from "../../creature/classes/creatureStatus";
import CreatureBattleStatus from "./creatureBattleStatus";

describe("CreatureBattleStatus", () => {
  let creatureStatus: CreatureStatus;
  let creatureBattleStatus: CreatureBattleStatus;

  beforeEach(() => {
    creatureStatus = new CreatureStatus({
      strength: 2,
      defense: 2,
      intelligence: 2,
      agility: 2,
      vitality: 2,
    });
    creatureBattleStatus = new CreatureBattleStatus(creatureStatus);
  });

  it("should initialize with the provided CreatureStatus", () => {
    expect(creatureBattleStatus.initialStatus).toEqual(creatureStatus);
  });

  it("should initialize current stats with the initial stats", () => {
    expect(creatureBattleStatus.currentLife).toEqual(creatureStatus.life);
    expect(creatureBattleStatus.currentStamina).toEqual(creatureStatus.stamina);
    expect(creatureBattleStatus.currentAttackPower).toEqual(
      creatureStatus.attackPower
    );
    expect(creatureBattleStatus.currentDefensePower).toEqual(
      creatureStatus.defensePower
    );
    expect(creatureBattleStatus.currentSpeed).toEqual(creatureStatus.speed);
  });

  it("should decrease current life when damaged", () => {
    const initialLife = creatureBattleStatus.currentLife;
    const damageAmount = 10;

    creatureBattleStatus.damage(damageAmount);

    expect(creatureBattleStatus.currentLife).toEqual(
      initialLife - damageAmount
    );
  });

  it("should not allow current life to go below 0", () => {
    creatureBattleStatus.damage(100);

    expect(creatureBattleStatus.currentLife).toEqual(0);
  });

  it("should increase current life when healed", () => {
    creatureBattleStatus.damage(11);
    const initialLife = creatureBattleStatus.currentLife;
    const healAmount = 10;

    creatureBattleStatus.heal(healAmount);

    expect(creatureBattleStatus.currentLife).toEqual(initialLife + healAmount);
  });

  it("should not allow current life to exceed initial life", () => {
    const initialLife = creatureBattleStatus.currentLife;
    creatureBattleStatus.damage(10);
    creatureBattleStatus.heal(100);
    expect(creatureBattleStatus.currentLife).toEqual(initialLife);
  });

  it("should decrease current stamina when weary", () => {
    const initialStamina = creatureBattleStatus.currentStamina;
    const wearyAmount = 10;

    creatureBattleStatus.weary(wearyAmount);

    expect(creatureBattleStatus.currentStamina).toEqual(
      initialStamina - wearyAmount
    );
  });

  it("should not allow current stamina to go below 0", () => {
    creatureBattleStatus.weary(100);

    expect(creatureBattleStatus.currentStamina).toEqual(0);
  });

  it("should increase current stamina when rested", () => {
    creatureBattleStatus.weary(11);
    const initialStamina = creatureBattleStatus.currentStamina;
    const restAmount = 10;

    creatureBattleStatus.rest(restAmount);

    expect(creatureBattleStatus.currentStamina).toEqual(
      initialStamina + restAmount
    );
  });

  it("should not allow current stamina to exceed initial stamina", () => {
    const initialStamina = creatureBattleStatus.currentStamina;
    creatureBattleStatus.weary(10);

    creatureBattleStatus.rest(100);

    expect(creatureBattleStatus.currentStamina).toEqual(initialStamina);
  });
});
