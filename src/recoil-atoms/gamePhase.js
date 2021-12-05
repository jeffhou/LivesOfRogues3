import { atom } from "recoil";

export const GamePhases = {
  MOVE_SELECT: "move-select",
  TARGET_SELECT: "target-select",
  MOVE_DETAILS: "move-details"
};

export const GamePhaseAtom = atom({
  key: "game-phase",
  default: {
    phase: "move-select",
    currentUnit: {
      team: "player",
      unitIndex: 0
    }
  }
});
