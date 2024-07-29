import AbstractDuckFactory from './AbstractDuckFactory';
import DuckCall from '../class/DuckCall';
import MallardDuck from '../class/MallardDuck';
import Quackable from '../interface/Quackable';
import QuackCounter from '../decorator/QuackCounter';
import RedheadDuck from '../class/RedheadDuck';
import RubberDuck from '../class/RubberDuck';

export default class CountingDuckFactory extends AbstractDuckFactory {
  public createMallardDuck(): Quackable {
    return new QuackCounter(new MallardDuck());
  }

  public createRedheadDuck(): Quackable {
    return new QuackCounter(new RedheadDuck());
  }

  public createDuckCall(): Quackable {
    return new QuackCounter(new DuckCall());
  }

  public createRubberDuck(): Quackable {
    return new QuackCounter(new RubberDuck());
  }
}
