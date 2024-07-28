import DuckCall from '../class/DuckCall';
import Goose from '../class/Goose';
import GooseAdapter from '../adapter/GooseAdapter';
import MallardDuck from '../class/MallardDuck';
import Quackable from '../interface/Quackable';
import QuackCounter from '../decorator/QuackCounter';
import RedheadDuck from '../class/RedheadDuck';
import RubberDuck from '../class/RubberDuck';

export default class DuckSimulator {
  public static main(): void {
    const simulator: DuckSimulator = new DuckSimulator();
    simulator.simulate();
  }

  simulate(): void;
  simulate(duck: Quackable): void;

  simulate(duck?: Quackable) {
    if (!duck) {
      const mallardDuck: Quackable = new QuackCounter(new MallardDuck());
      const redheadDuck: Quackable = new QuackCounter(new RedheadDuck());
      const duckCall: Quackable = new QuackCounter(new DuckCall());
      const rubberDuck: Quackable = new QuackCounter(new RubberDuck());
      const gooseDuck: Quackable = new GooseAdapter(new Goose());

      console.log('Duck Simulator: With Decorator');

      this.simulate(mallardDuck);
      this.simulate(redheadDuck);
      this.simulate(duckCall);
      this.simulate(rubberDuck);
      this.simulate(gooseDuck);

      console.log('The ducks quacked ' + QuackCounter.getQuacks() + ' times');
    } else {
      duck.quack();
    }
  }
}

// $ npx ts-node DuckSimulator
if (require.main === module) DuckSimulator.main();
