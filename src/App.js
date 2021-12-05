import "./styles.css";
import { BattleScene } from "./react-components/battleScene";

const MoveSegment = {
  newBuilder: function () {
    return MoveSegment.Builder();
  },
  Builder: class {
    setTarget(team, num) {
      return this;
    }
    setEffect(type, amount) {
      return this;
    }
  }
};

const moves = [
  {
    target: {
      team: "ENEMY",
      num: "1"
    },
    effect: {
      type: "DAMAGE",
      amount: "5"
    }
  }
];

export default function App() {
  return (
    <div className="App">
      <BattleScene />
    </div>
  );
}
