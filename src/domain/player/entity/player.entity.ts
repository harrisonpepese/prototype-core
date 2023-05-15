import * as bcript from "bcrypt";
import CantChangePasswordError from "../errors/cantChangePassword.error";
import NicknameAlredayIsItError from "../errors/nicknameAlredayIsItError.error";
import Creature from "../../creature/entity/creature.entity";
import { PlayerInventory } from "./playerInventory.entity";
export type PlayerProps = {
  id?: string;
  nickname: string;
  email: string;
  password?: string;
  creatures: Creature[];
  //inventory: PlayerInventory;
};

export class Player {
  constructor(init?: PlayerProps) {
    if (init) {
      this._id = init.id;
      this._nickname = init.nickname;
      this._email = init.email;
      this._password = init.password;
      this._creatures = init.creatures;
      //this._inventory = init.inventory;
    }
  }
  private _id?: string;
  private _nickname: string;
  private _email: string;
  private _password?: string;
  private _creatures: Creature[];
  //private _inventory: any;

  public get id(): string | undefined {
    return this._id;
  }
  public get nickname(): string {
    return this._nickname;
  }
  public set nickname(value: string) {
    if (value === this._nickname) {
      throw NicknameAlredayIsItError;
    }
    this._nickname = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get password(): string | undefined {
    return this._password;
  }
  public get creatures(): Creature[] {
    return this._creatures;
  }
  //public get inventory(): any {
  //  return this._inventory;
  //}

  async changePassword(newPassword: string) {
    if (this._password && (await this.verifyPassword(newPassword))) {
      throw CantChangePasswordError;
    }
    this._password = await this.hashPassword(newPassword);
  }
  async verifyPassword(rawPassword: string) {
    if (this._password) {
      return await bcript.compare(rawPassword, this._password);
    }
    return false;
  }

  addCreature() {
    this._creatures.push();
  }
  removeCreature(index: number | number[]) {
    if (Array.isArray(index)) {
      for (const i of index) {
        this.removeCreatureByIndex(i);
      }
    } else {
      this.removeCreatureByIndex(index);
    }
  }

  private removeCreatureByIndex(index: number) {}

  private async hashPassword(rawPassword: string): Promise<string> {
    return await bcript.hash(rawPassword, await bcript.genSalt());
  }
}
