import { LifeBar } from "./lifeBar";
import { mapClassName } from "./../util";
import { FlagsAtom } from "./../recoil-atoms/flags.js";
import { useRecoilState } from "recoil";

export function CharacterIcon(props) {
  const [flags] = useRecoilState(FlagsAtom);

  return (
    <div
      className={mapClassName({
        "character-icon-container": true,
        "current-character": props.data.active,
        "character-icon-dead": props.data.currentHp === 0
      })}
    >
      <div className="character-icon-name">{props.data.name}</div>

      {flags.debug ? (
        <div className="character-icon-debug">
          Initiative:{" "}
          {props.data.unit
            ? JSON.stringify(props.data.unit.currentInitiative)
            : ""}
        </div>
      ) : null}

      <img
        alt="character icon"
        className="character-icon-img"
        src="https://cdna.artstation.com/p/assets/images/images/021/664/504/large/zefeng-yang-finalc.jpg?1572506734"
      />
      <LifeBar current={props.data.currentHp} max={props.data.maxHp} />
    </div>
  );
}
