/** Helps with determining info on the game phase */

/** Get read-only unit details for current unit */
const getCurrentUnit = (gamePhase, playerTeam, enemyTeam) => {
  const currentUnitIdentifiers = gamePhase["currentUnit"];
  return currentUnitIdentifiers["team"] === "player"
    ? playerTeam[currentUnitIdentifiers["unitIndex"]]
    : enemyTeam[currentUnitIdentifiers["unitIndex"]];
};

const getTargetUnit = (gamePhase, playerTeam, enemyTeam) => {
  const targetIdentifiers = gamePhase["target"];
  return targetIdentifiers["type"] === "ENEMY_UNIT"
    ? enemyTeam[targetIdentifiers["index"]]
    : playerTeam[targetIdentifiers["index"]];
};

const getCurrentUnitIdentifiersForNextTurn = (playerTeam, enemyTeam) => {
  // get highest initiative in both teams
  // get indices for units with highest initiative
  // randomly choose one from those to be current unit
  const allUnits = playerTeam.concat(enemyTeam); // units 0,1,2 are player units, 3,4,5 are enemy units
  const maxInitiative = allUnits.reduce((maxInitiative, unit) => {
    return Math.max(unit.currentInitiative, maxInitiative);
  }, 0);
  const unitCandidates = allUnits
    .map((unit, index) => {
      return {
        initiative: unit.currentInitiative,
        index
      };
    })
    .filter((unit) => {
      return unit.initiative === maxInitiative;
    });
  const randomCandidate =
    unitCandidates[Math.floor(Math.random() * unitCandidates.length)];
  return {
    team: randomCandidate["index"] > 2 ? "enemy" : "player",
    unitIndex: randomCandidate["index"] % 3
  };
};

export const GamePhaseService = {
  getCurrentUnit,
  getTargetUnit,
  getCurrentUnitIdentifiersForNextTurn
};
