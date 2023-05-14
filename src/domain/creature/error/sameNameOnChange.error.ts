export default class CreatureSameNameOnchangeError extends Error {
  constructor() {
    super();
    this.name = "CreatureSameNameOnchangeError";
    this.message = "the name of creatural alreday is it";
  }
}
