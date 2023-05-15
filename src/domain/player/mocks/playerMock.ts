import { Player } from "../entity/player.entity";

export const playerMock = new Player({
  id: "mongo_db_hash",
  nickname: "teste_player",
  email: "teste@teste.com",
  creatures: [],
});
