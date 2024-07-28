import AbstractDuckFactory from '../factory/AbstractDuckFactory';
import CountingDuckFactory from '../factory/CountingDuckFactory';
import Goose from '../class/Goose';
import GooseAdapter from '../adapter/GooseAdapter';
import Quackable from '../interface/Quackable';
import QuackCounter from '../decorator/QuackCounter';

export default class DuckSimulatorV4 {
  public static main(): void {
    const simulator: DuckSimulatorV4 = new DuckSimulatorV4();
    const duckFactory: AbstractDuckFactory = new CountingDuckFactory();

    simulator.simulate(duckFactory);
  }

  simulate(duckFactory: AbstractDuckFactory): void;
  simulate(duck: Quackable): void;

  simulate(arg: AbstractDuckFactory | Quackable) {
    if (arg instanceof AbstractDuckFactory) {
      const duckFactory = arg;

      const mallardDuck = duckFactory.createMallardDuck();
      const redheadDuck = duckFactory.createRedheadDuck();
      const duckCall = duckFactory.createDuckCall();
      const rubberDuck = duckFactory.createRubberDuck();
      const goose = new GooseAdapter(new Goose());

      console.log('Duck Simulator: With Abstract Factory');

      this.simulate(mallardDuck);
      this.simulate(redheadDuck);
      this.simulate(duckCall);
      this.simulate(rubberDuck);
      this.simulate(goose);

      console.log(QuackCounter.getQuacks() + ' quacks were counted');
    } else {
      const duck = arg;

      duck.quack();
    }
  }
}

// $ npx ts-node DuckSimulatorV4
if (require.main === module) DuckSimulatorV4.main();
