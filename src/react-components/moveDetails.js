import { PlayerTeamAtom } from "recoil-atoms/playerTeam";
import { EnemyTeamAtom } from "recoil-atoms/enemyTeam";
import { GamePhaseAtom, GamePhases } from "recoil-atoms/gamePhase";
import { useRecoilState } from "recoil";
import { safeRecoilUpdate } from "./../util";
import { GamePhaseService } from "./../services/gamePhase";

export function MoveDetails(props) {
  const [gamePhaseState, setGamePhaseState] = useRecoilState(GamePhaseAtom);
  const [enemyTeamState, setEnemyTeamState] = useRecoilState(EnemyTeamAtom);
  const [playerTeamState, setPlayerTeamState] = useRecoilState(PlayerTeamAtom);

  const targetIndex = gamePhaseState.target.index;

  const dismissMoveDetails = safeRecoilUpdate(() => {
    setGamePhaseState((state) => {
      return Object.assign({}, state, {
        phase: "move-select",
        currentUnit: GamePhaseService.getCurrentUnitIdentifiersForNextTurn(
          playerTeamState,
          [] // TODO - handle when current unit is enemyTeam, this should be enemyTeamState after
        )
      });
    });
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
