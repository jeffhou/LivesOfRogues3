import { PlayerTeamAtom } from "recoil-atoms/playerTeam";
import { EnemyTeamAtom } from "recoil-atoms/enemyTeam";
import { GamePhaseAtom, GamePhases } from "recoil-atoms/gamePhase";
import { useRecoilState } from "recoil";
import { safeRecoilUpdate } from "./../util";

function MoveSelectionOption(props) {
  return (
    <div className="move-selection-option-container" onClick={props.onWoot}>
      <div className="move-selection-option-inner-container">
        <div className="bold line_2">{props.move.name}</div>
        <div>{props.move.description}</div>
      </div>
    </div>
  );
}

export function MoveSelection(props) {
  const [gamePhaseState, setGamePhaseState] = useRecoilState(GamePhaseAtom);
  const [playerTeamState, setPlayerTeamState] = useRecoilState(PlayerTeamAtom);
  const [enemyTeamState, setEnemyTeamState] = useRecoilState(EnemyTeamAtom);

  const moves =
    gamePhaseState.currentUnit.team === "player"
      ? playerTeamState[gamePhaseState.currentUnit.unitIndex].moves
      : enemyTeamState[gamePhaseState.currentUnit.unitIndex].moves;

  const selectMoveIndex = safeRecoilUpdate((moveIndex) => {
    setGamePhaseState((state) => {
      return Object.assign({}, state, {
        phase: GamePhases.TARGET_SELECT,
        selectedMoveIndex: moveIndex
      });
    });
  });

  return (
    <div className="move-selection-container">
      {/* TODO – change this container to a grid so we can do naive iteration */}
      <div>
        <MoveSelectionOption
          move={moves[0]}
          onWoot={() => selectMoveIndex(0)}
        />
        <MoveSelectionOption
          move={moves[1]}
          onWoot={() => selectMoveIndex(1)}
        />
      </div>
      <div>
        <MoveSelectionOption
          move={moves[2]}
          onWoot={() => selectMoveIndex(2)}
        />
        <MoveSelectionOption
          move={moves[3]}
          onWoot={() => selectMoveIndex(3)}
        />
      </div>
    </div>
  );
}
