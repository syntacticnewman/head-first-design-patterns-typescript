import AbstractDuckFactory from './AbstractDuckFactory';
import DuckCall from '../class/DuckCall';
import MallardDuck from '../class/MallardDuck';
import Quackable from '../interface/Quackable';
import RedheadDuck from '../class/RedheadDuck';
import RubberDuck from '../class/RubberDuck';

export default class DuckFactory extends AbstractDuckFactory {
  public createMallardDuck(): Quackable {
    return new MallardDuck();
  }

  public createRedheadDuck(): Quackable {
    return new RedheadDuck();
  }

  public createDuckCall(): Quackable {
    return new DuckCall();
  }

  public createRubberDuck(): Quackable {
    return new RubberDuck();
  }
}
