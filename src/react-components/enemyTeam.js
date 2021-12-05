import { EnemyTeamAtom } from "recoil-atoms/enemyTeam";
import { CharacterIcon } from "react-components/characterIcon";
import { useRecoilState } from "recoil";
import { mapClassName } from "./../util";

export function EnemyTeam(props) {
  const [teamState] = useRecoilState(EnemyTeamAtom);
  console.log(teamState);
  return (
    <div className="player-team-container">
      {teamState.map((unit, unitIndex) => (
        <CharacterIcon
          data={{
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
