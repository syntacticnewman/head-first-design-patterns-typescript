import AbstractDuckFactory from '../factory/AbstractDuckFactory';
import CountingDuckFactory from '../factory/CountingDuckFactory';
import Flock from '../composite/Flock';
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

      const redheadDuck: Quackable = duckFactory.createRedheadDuck();
      const duckCall: Quackable = duckFactory.createDuckCall();
      const rubberDuck: Quackable = duckFactory.createRubberDuck();
      const gooseDuck: Quackable = new GooseAdapter(new Goose());

      console.log('Duck Simulator: With Composite - Flocks');

      const flockOfDucks: Flock = new Flock();

      flockOfDucks.add(redheadDuck);
      flockOfDucks.add(duckCall);
      flockOfDucks.add(rubberDuck);
      flockOfDucks.add(gooseDuck);

      const flockOfMallards: Flock = new Flock();

      const mallardOne: Quackable = duckFactory.createMallardDuck();
      const mallardTwo: Quackable = duckFactory.createMallardDuck();
      const mallardThree: Quackable = duckFactory.createMallardDuck();
      const mallardFour: Quackable = duckFactory.createMallardDuck();

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
      duck.quack();
    }
  }
}

// $ npx ts-node DuckSimulator
if (require.main === module) DuckSimulator.main();
