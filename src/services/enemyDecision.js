import { GamePhaseService } from "./gamePhase";
import { MoveProcessingService } from "./moveProcessing";
import { GamePhaseAtom, GamePhases } from "recoil-atoms/gamePhase";

const simulateEnemyTurn = (gamePhase, playerTeam, enemyTeam) => {
  const currentUnit = GamePhaseService.getCurrentUnit(
    gamePhase,
    playerTeam,
    enemyTeam
  );

  // select move
  const randomMoveIndex = Math.floor(Math.random() * currentUnit.moves.length);
  gamePhase = Object.assign({}, gamePhase, {
    selectedMoveIndex: randomMoveIndex
  });

  // select target
  // TODO - currently we only handle single target moves
  // TODO -  handle when there are dead units on player's team

  const targetableUnitsIndices = [];
  playerTeam.forEach((unit, index) => {
    if (unit["health"]["current"] > 0) {
      targetableUnitsIndices.push(index);
    }
  });
  const randomTargetIndex =
    targetableUnitsIndices[
      Math.floor(Math.random() * targetableUnitsIndices.length)
    ];
  gamePhase = Object.assign({}, gamePhase, {
    target: {
      type: "ENEMY_UNIT",
      index: randomTargetIndex
    }
  });

  // process move
  const updatedStates = MoveProcessingService.processMove(
    gamePhase,
    playerTeam,
    enemyTeam
  );

  return updatedStates;
};

export const EnemyDecisionService = {
  simulateEnemyTurn
};
