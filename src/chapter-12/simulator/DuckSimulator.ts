import DuckCall from '../class/DuckCall';
import MallardDuck from '../class/MallardDuck';
import Quackable from '../interface/Quackable';
import RedheadDuck from '../class/RedheadDuck';
import RubberDuck from '../class/RubberDuck';

export default class DuckSimulator {
  public static main(): void {
    const simulator = new DuckSimulator();
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

      console.log('Duck Simulator');

      this.simulate(mallardDuck);
      this.simulate(redheadDuck);
      this.simulate(duckCall);
      this.simulate(rubberDuck);
    } else {
      duck.quack();
    }
  }
}

// $ npx ts-node DuckSimulator
if (require.main === module) DuckSimulator.main();
