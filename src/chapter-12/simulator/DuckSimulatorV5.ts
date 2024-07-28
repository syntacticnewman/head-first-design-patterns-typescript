import AbstractDuckFactory from '../factory/AbstractDuckFactory';
import CountingDuckFactory from '../factory/CountingDuckFactory';
import Flock from '../composite/Flock';
import Goose from '../class/Goose';
import GooseAdapter from '../adapter/GooseAdapter';
import Quackable from '../interface/Quackable';
import QuackCounter from '../decorator/QuackCounter';

export default class DuckSimulatorV5 {
  public static main(): void {
    const simulator: DuckSimulatorV5 = new DuckSimulatorV5();
    const duckFactory: AbstractDuckFactory = new CountingDuckFactory();

    simulator.simulate(duckFactory);
  }

  simulate(duckFactory: AbstractDuckFactory): void;
  simulate(duck: Quackable): void;

  simulate(arg: AbstractDuckFactory | Quackable) {
    if (arg instanceof AbstractDuckFactory) {
      const duckFactory = arg;

      const redheadDuck = duckFactory.createRedheadDuck();
      const duckCall = duckFactory.createDuckCall();
      const rubberDuck = duckFactory.createRubberDuck();
      const goose = new GooseAdapter(new Goose());

      console.log('Duck Simulator: With Composite - Flocks');

      const flockOfDucks = new Flock();

      flockOfDucks.add(redheadDuck);
      flockOfDucks.add(duckCall);
      flockOfDucks.add(rubberDuck);
      flockOfDucks.add(goose);

      const flockOfMallards = new Flock();

      const mallardOne = duckFactory.createMallardDuck();
      const mallardTwo = duckFactory.createMallardDuck();
      const mallardThree = duckFactory.createMallardDuck();
      const mallardFour = duckFactory.createMallardDuck();

      flockOfMallards.add(mallardOne);
      flockOfMallards.add(mallardTwo);
      flockOfMallards.add(mallardThree);
      flockOfMallards.add(mallardFour);

      flockOfDucks.add(flockOfMallards);

      console.log('Duck Simulator: Whole Flock Simulation');
      this.simulate(flockOfDucks);

      console.log('Duck Simulator: Mallard Flock Simulation');
      this.simulate(flockOfMallards);

      console.log('The ducks quacked ' + QuackCounter.getQuacks() + ' times');
    } else {
      const duck = arg;

      duck.quack();
    }
  }
}

// $ npx ts-node DuckSimulatorV5
if (require.main === module) DuckSimulatorV5.main();
