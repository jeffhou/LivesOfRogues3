import { EnemyTeamAtom } from "recoil-atoms/enemyTeam";
import { CharacterIcon } from "react-components/characterIcon";
import { useRecoilState } from "recoil";
import { mapClassName } from "./../util";
import { GamePhaseAtom } from "recoil-atoms/gamePhase";

export function EnemyTeam(props) {
  const [teamState] = useRecoilState(EnemyTeamAtom);
  const [gamePhase] = useRecoilState(GamePhaseAtom);
  return (
    <div className="player-team-container">
      {teamState.map((unit, unitIndex) => (
        <CharacterIcon
          data={{
            active:
              unitIndex === gamePhase["currentUnit"]["unitIndex"] &&
              gamePhase["currentUnit"]["team"] !== "player",
            name: unit.name,
            currentHp: unit.health.current,
            maxHp: unit.health.max,
            unit: unit
          }}
          key={`character-icon-${unitIndex}`}
        />
      ))}
    </div>
  );
}
