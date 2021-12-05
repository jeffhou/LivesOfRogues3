import { TargetSelection } from "./targetSelection";
import { PlayerTeam } from "./playerTeam";
import { EnemyTeam } from "./enemyTeam";
import { MoveSelection } from "./moveSelection";
import { MoveDetails } from "./moveDetails";

import { useRecoilState } from "recoil";
import { GamePhaseAtom, GamePhases } from "./../recoil-atoms/gamePhase";

export function BattleScene(props) {
  const [gamePhaseState, setGamePhaseState] = useRecoilState(GamePhaseAtom);

  let gamePhaseContentDOM;
  if (gamePhaseState.phase === GamePhases.MOVE_SELECT) {
    gamePhaseContentDOM = (
      <MoveSelection currentUnit={{ name: "Peter the Sacred" }} />
      // TODO – remove currentUnit prop and use recoil atom GamePhase instead
    );
  } else if (gamePhaseState.phase === GamePhases.MOVE_DETAILS) {
    gamePhaseContentDOM = (
      <MoveDetails currentUnit={{ name: "Peter the Sacred" }} />
      // TODO – remove currentUnit prop and use recoil atom GamePhase instead
    );
  } else if (gamePhaseState.phase === GamePhases.TARGET_SELECT) {
    gamePhaseContentDOM = <TargetSelection />;
  }
  return (
    <div className="battle-scene">
      <EnemyTeam />
      {gamePhaseContentDOM}
      <PlayerTeam />
    </div>
  );
}
