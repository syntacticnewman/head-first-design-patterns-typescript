import DuckCall from '../class/DuckCall';
import Goose from '../class/Goose';
import GooseAdapter from '../adapter/GooseAdapter';
import MallardDuck from '../class/MallardDuck';
import Quackable from '../interface/Quackable';
import QuackCounter from '../decorator/QuackCounter';
import RedheadDuck from '../class/RedheadDuck';
import RubberDuck from '../class/RubberDuck';

export default class DuckSimulatorV3 {
  public static main(): void {
    const simulator = new DuckSimulatorV3();
    simulator.simulate();
  }

  simulate(): void;
  simulate(duck: Quackable): void;

  simulate(duck?: Quackable) {
    if (!duck) {
      const mallardDuck = new QuackCounter(new MallardDuck());
      const redheadDuck = new QuackCounter(new RedheadDuck());
      const duckCall = new QuackCounter(new DuckCall());
      const rubberDuck = new QuackCounter(new RubberDuck());
      const goose = new GooseAdapter(new Goose());

      console.log('Duck Simulator: With Decorator');

      this.simulate(mallardDuck);
      this.simulate(redheadDuck);
      this.simulate(duckCall);
      this.simulate(rubberDuck);
      this.simulate(goose);

      console.log('The ducks quacked ' + QuackCounter.getQuacks() + ' times');
    } else {
      duck.quack();
    }
  }
}

// $ npx ts-node DuckSimulatorV3
if (require.main === module) DuckSimulatorV3.main();
