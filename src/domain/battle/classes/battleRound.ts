import { BattleAction } from "../types/battleAction";

export default class BattleRound {
  constructor() {}
  private _actions: BattleAction[];

  get actions() {
    return this._actions;
  }

  pushAction(action: BattleAction) {
    if (this.actions.find((x) => x.originId === action.originId)) {
      return;
    }
    this._actions.push(action);
  }

  executeRound() {}
}
