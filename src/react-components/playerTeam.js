import { PlayerTeamAtom } from "recoil-atoms/playerTeam";
import { GamePhaseAtom } from "recoil-atoms/gamePhase";
import { CharacterIcon } from "react-components/characterIcon";
import { useRecoilState } from "recoil";

export function PlayerTeam(props) {
  const [teamState] = useRecoilState(PlayerTeamAtom);
  const [gamePhase] = useRecoilState(GamePhaseAtom);
  return (
    <div className="player-team-container">
      {teamState.map((unit, unitIndex) => (
        <CharacterIcon
          data={{
            active: unitIndex === gamePhase.currentUnit.unitIndex,
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
