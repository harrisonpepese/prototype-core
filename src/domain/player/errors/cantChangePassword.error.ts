export default class CantChangePasswordError extends Error {
  constructor() {
    super();
    this.name = "CantChangePasswordError";
    this.message =
      "you can't change the password, the password is invalid or alreday used !";
  }
}
