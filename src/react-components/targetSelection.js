import { EnemyTeamAtom } from "recoil-atoms/enemyTeam";
import { PlayerTeamAtom } from "recoil-atoms/playerTeam";
import { GamePhaseAtom } from "recoil-atoms/gamePhase";
import { useRecoilState } from "recoil";
import { GamePhases } from "./../recoil-atoms/gamePhase";
import { safeRecoilUpdate } from "./../util";
import { MoveProcessingService } from "./../services/moveProcessing";

function SelectionArrow(props) {
  return (
    <svg
      className="animated bounce"
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
    >
      <g color={props.color}>
        <path
          d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

function SelectionOption(props) {
  return (
    <div className="selection-button-container" onClick={props.onSelect}>
      <div className="selection-button bounce-hover-container">
        <div className="selection-button-inner-container">
          <SelectionArrow color="#6c081a" />
        </div>
      </div>
    </div>
  );
}

function SelectionOptionPlaceholder() {
  return <div className="selection-button-container"></div>;
}

export function TargetSelection(props) {
  const [gamePhaseState, setGamePhaseState] = useRecoilState(GamePhaseAtom);
  const [enemyTeamState, setEnemyTeamState] = useRecoilState(EnemyTeamAtom);
  const [playerTeamState, setPlayerTeamState] = useRecoilState(PlayerTeamAtom);
  const selectUnitIndex = safeRecoilUpdate((unitIndex) => {
    const updatedGamePhase = Object.assign({}, gamePhaseState, {
      phase: GamePhases.MOVE_DETAILS,
      target: {
        type: "ENEMY_UNIT",
        index: unitIndex
      }
    });
    // process move
    const {
      gamePhase: updatedGamePhaseFromMove,
      playerTeam: updatedPlayerTeamFromMove,
      enemyTeam: updatedEnemyTeamFromMove
    } = MoveProcessingService.processMove(
      updatedGamePhase,
      playerTeamState,
      enemyTeamState
    );

    // update gamePhase
    setGamePhaseState(updatedGamePhaseFromMove);
    setEnemyTeamState(updatedEnemyTeamFromMove);
    setPlayerTeamState(updatedPlayerTeamFromMove);
  });
  return (
    <div className="target-selection-container">
      {enemyTeamState.map((unit, unitIndex) =>
        unit["health"]["current"] === 0 ? (
          <SelectionOptionPlaceholder />
        ) : (
          <SelectionOption
            onSelect={() => selectUnitIndex(unitIndex)}
            key={`selection-option-${unitIndex}`}
          />
        )
      )}
    </div>
  );
}
