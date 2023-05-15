export default class NicknameAlredayIsItError extends Error {
  constructor() {
    super();
    this.name = "NicknameAlredayIsItError";
    this.message = "the nickname alreday is it";
  }
}
