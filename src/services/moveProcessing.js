// process damage, but not death – returns updated enemy team
const damagePlayer = (team, targetIndex, amount) => {
  return team.map((unit, unitIndex) => {
    if (unitIndex === targetIndex) {
      const remainingHealth = Math.max(unit["health"]["current"] - amount, 0);
      return Object.assign({}, unit, {
        health: { current: remainingHealth, max: unit["health"]["max"] }
      });
    }
    return unit;
  });
};

const processInitiatives = (currentUnitIdentifiers, playerTeam, enemyTeam) => {
  const updatedPlayerTeam = playerTeam.map((unit, unitIndex) => {
    if (unit["health"]["current"] === 0) {
      return Object.assign({}, unit, {
        currentInitiative: 0
      });
    } else if (
      currentUnitIdentifiers["team"] === "player" &&
      currentUnitIdentifiers["unitIndex"] === unitIndex
    ) {
      return Object.assign({}, unit, {
        currentInitiative: unit["initiativeGain"]
      });
    } else {
      return Object.assign({}, unit, {
        currentInitiative: unit["currentInitiative"] + unit["initiativeGain"]
      });
    }
  });

  const updatedEnemyTeam = enemyTeam.map((unit, unitIndex) => {
    if (unit["health"]["current"] === 0) {
      return Object.assign({}, unit, {
        currentInitiative: 0
      });
    } else if (
      currentUnitIdentifiers["team"] === "enemy" &&
      currentUnitIdentifiers["unitIndex"] === unitIndex
    ) {
      return Object.assign({}, unit, {
        currentInitiative: unit["initiativeGain"]
      });
    } else {
      return Object.assign({}, unit, {
        currentInitiative: unit["currentInitiative"] + unit["initiativeGain"]
      });
    }
  });

  return { playerTeam: updatedPlayerTeam, enemyTeam: updatedEnemyTeam };
};

/**
 * Returns updated player team and enemy team
 */
const processMove = (gamePhase, playerTeam, enemyTeam) => {
  const currentUnitIdentifiers = gamePhase["currentUnit"];
  const currentUnit =
    currentUnitIdentifiers["team"] === "player"
      ? playerTeam[currentUnitIdentifiers["unitIndex"]]
      : enemyTeam[currentUnitIdentifiers["unitIndex"]];
  const selectedMoveIndex = gamePhase["selectedMoveIndex"];
  const selectedMove = currentUnit["moves"][selectedMoveIndex];

  // only singleTarget
  for (const step of selectedMove["steps"]) {
    if (step["targetType"] === "SINGLE_TARGET") {
      if (step["abilityType"] === "DAMAGE") {
        const damageAmount = step["amount"];
        if (currentUnitIdentifiers["team"] === "player") {
          enemyTeam = damagePlayer(
            enemyTeam,
            gamePhase["target"]["index"],
            damageAmount
          );
        } else {
          playerTeam = damagePlayer(
            playerTeam,
            gamePhase["target"]["index"],
            damageAmount
          );
        }
        // TODO – process death
        // TODO - process full team death (defeat/victory)
      }
    }
  }
  // TODO - process initiative updates and new currentUnit
  const {
    playerTeam: updatedPlayerTeam,
    enemyTeam: updatedEnemyTeam
  } = processInitiatives(currentUnitIdentifiers, playerTeam, enemyTeam);

  // TODO – process AI moves
  return {
    gamePhase,
    playerTeam: updatedPlayerTeam,
    enemyTeam: updatedEnemyTeam
  };
};

export const MoveProcessingService = {
  processMove
};
