import CantChangePasswordError from "../errors/cantChangePassword.error";
import NicknameAlredayIsItError from "../errors/nicknameAlredayIsItError.error";
import { playerMock } from "../mocks/playerMock";

describe("player tests", () => {
  it("changeNickName error", () => {
    try {
      playerMock.nickname = playerMock.nickname;
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(NicknameAlredayIsItError);
    }
  });
  it("changeNickName", () => {
    try {
      const newname = "ChageName";
      expect(newname === playerMock.nickname).toBeFalsy();
      playerMock.nickname = newname;
      expect(playerMock.nickname).toBe(newname);
    } catch (error) {
      expect(true).toBeFalsy();
    }
  });
  it("SetFirst password", async () => {
    try {
      expect(playerMock.password).toBeUndefined();
      await playerMock.changePassword("123456");
      expect(playerMock.password).toBeDefined();
    } catch (error) {
      expect(true).toBeFalsy();
    }
  });
  it("changePassword with same password", async () => {
    try {
      expect(playerMock.password).toBeDefined();
      await playerMock.changePassword("123456");
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(CantChangePasswordError);
    }
  });
  it("changePassword with another password", async () => {
    try {
      expect(playerMock.password).toBeDefined();
      const previusHash = playerMock.password;
      await playerMock.changePassword("12345678");
      expect(playerMock.password !== previusHash).toBeTruthy();
    } catch (error) {
      expect(true).toBeFalsy();
    }
  });
  it("verify password sucess", async () => {
    try {
      expect(playerMock.password).toBeDefined();
      const result = await playerMock.verifyPassword("12345678");
      expect(result).toBeTruthy();
    } catch (error) {
      expect(true).toBeFalsy();
    }
  });
  it("verify password error", async () => {
    try {
      expect(playerMock.password).toBeDefined();
      const result = await playerMock.verifyPassword("123456");
      expect(result).toBeFalsy();
    } catch (error) {
      expect(true).toBeFalsy();
    }
  });
});
