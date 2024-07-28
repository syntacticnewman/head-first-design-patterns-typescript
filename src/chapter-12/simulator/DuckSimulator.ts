import AbstractDuckFactory from '../factory/AbstractDuckFactory';
import CountingDuckFactory from '../factory/CountingDuckFactory';
import Goose from '../class/Goose';
import GooseAdapter from '../adapter/GooseAdapter';
import Quackable from '../interface/Quackable';
import QuackCounter from '../decorator/QuackCounter';

export default class DuckSimulator {
  public static main(): void {
    const simulator: DuckSimulator = new DuckSimulator();
    const duckFactory: AbstractDuckFactory = new CountingDuckFactory();

    simulator.simulate(duckFactory);
  }

  simulate(duckFactory: AbstractDuckFactory): void;
  simulate(duck: Quackable): void;

  simulate(duck: AbstractDuckFactory | Quackable) {
    if (duck instanceof AbstractDuckFactory) {
      const duckFactory = duck;

      const mallardDuck: Quackable = duckFactory.createMallardDuck();
      const redheadDuck: Quackable = duckFactory.createRedheadDuck();
      const duckCall: Quackable = duckFactory.createDuckCall();
      const rubberDuck: Quackable = duckFactory.createRubberDuck();
      const gooseDuck: Quackable = new GooseAdapter(new Goose());

      console.log('Duck Simulator: With Abstract Factory');

      this.simulate(mallardDuck);
      this.simulate(redheadDuck);
      this.simulate(duckCall);
      this.simulate(rubberDuck);
      this.simulate(gooseDuck);

      console.log(QuackCounter.getQuacks() + ' quacks were counted');
    } else {
      duck.quack();
    }
  }
}

// $ npx ts-node DuckSimulator
if (require.main === module) DuckSimulator.main();
