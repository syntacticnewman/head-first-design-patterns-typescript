import DuckCall from "../class/DuckCall";
import Goose from "../class/Goose";
import GooseAdapter from "../adapter/GooseAdapter";
import MallardDuck from "../class/MallardDuck";
import Quackable from "../interface/Quackable";
import RedheadDuck from "../class/RedheadDuck";
import RubberDuck from "../class/RubberDuck";

export default class DuckSimulatorV2 {
  public static main(): void {
    const simulator = new DuckSimulatorV2();
    simulator.simulate();
  }

  simulate(): void;
  simulate(duck: Quackable): void;

  simulate(duck?: Quackable) {
    if (!duck) {
      const mallardDuck = new MallardDuck();
      const redheadDuck = new RedheadDuck();
      const duckCall = new DuckCall();
      const rubberDuck = new RubberDuck();
      const goose = new GooseAdapter(new Goose());

      console.log("Duck Simulator");

      this.simulate(mallardDuck);
      this.simulate(redheadDuck);
      this.simulate(duckCall);
      this.simulate(rubberDuck);
      this.simulate(goose);
    } else {
      duck.quack();
    }
  }
}

// $ npx ts-node DuckSimulatorV1
if (require.main === module) DuckSimulatorV2.main();
