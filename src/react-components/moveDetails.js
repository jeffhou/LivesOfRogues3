import { PlayerTeamAtom } from "recoil-atoms/playerTeam";
import { EnemyTeamAtom } from "recoil-atoms/enemyTeam";
import { GamePhaseAtom, GamePhases } from "recoil-atoms/gamePhase";
import { useRecoilState } from "recoil";
import { safeRecoilUpdate } from "./../util";
import { GamePhaseService } from "./../services/gamePhase";
import { EnemyDecisionService } from "./../services/enemyDecision";

export function MoveDetails(props) {
  const [gamePhaseState, setGamePhaseState] = useRecoilState(GamePhaseAtom);
  const [enemyTeamState, setEnemyTeamState] = useRecoilState(EnemyTeamAtom);
  const [playerTeamState, setPlayerTeamState] = useRecoilState(PlayerTeamAtom);

  const targetIndex = gamePhaseState.target.index;

  const dismissMoveDetails = safeRecoilUpdate(() => {
    const nextCurrentUnitIdentifiers = GamePhaseService.getCurrentUnitIdentifiersForNextTurn(
      playerTeamState,
      enemyTeamState // TODO - handle when current unit is enemyTeam, this should be enemyTeamState after
    );

    // TODO - handle for when there's victory / defeat
    if (nextCurrentUnitIdentifiers["team"] === "player") {
      setGamePhaseState((state) => {
        return Object.assign({}, state, {
          phase: "move-select",
          currentUnit: nextCurrentUnitIdentifiers
        });
      });
    } else {
      const updatedGamePhaseState = Object.assign({}, gamePhaseState, {
        currentUnit: nextCurrentUnitIdentifiers
      });
      const updatedStates = EnemyDecisionService.simulateEnemyTurn(
        updatedGamePhaseState,
        playerTeamState,
        enemyTeamState
      );
      setGamePhaseState(updatedStates.gamePhase);
      setEnemyTeamState(updatedStates.enemyTeam);
      setPlayerTeamState(updatedStates.playerTeam);
    }
  });

  const currentUnit = GamePhaseService.getCurrentUnit(
    gamePhaseState,
    playerTeamState,
    enemyTeamState
  );

  const targetUnit = GamePhaseService.getTargetUnit(
    gamePhaseState,
    playerTeamState,
    enemyTeamState
  );

  return (
    <div className="move-details-container" onClick={dismissMoveDetails}>
      <div className="current-unit-name">{currentUnit.name}</div>
      <div className="current-unit-move">
        <strong>{currentUnit.name}</strong> hits{" "}
        <strong>{targetUnit.name}</strong> for{" "}
        <span className="current-unit-move-damage">10 damage</span>!
        {/* TODO – change this to ^^ actual damage  */}
      </div>
      <div className="current-unit-target">
        <div>{targetUnit.name}</div>
      </div>
      <div className="move-details-dismiss-text">click anywhere to dismiss</div>
    </div>
  );
}
