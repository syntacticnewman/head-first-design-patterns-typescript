import Observer from '../observer/Observer';
import Quackable from '../interface/Quackable';

export default class QuackCounter implements Quackable {
  duck: Quackable;
  static numberOfQuacks: number = 0;

  constructor(duck: Quackable) {
    this.duck = duck;
  }

  public quack(): void {
    this.duck.quack();
    QuackCounter.numberOfQuacks++;
  }

  public registerObserver(observer: Observer): void {
    this.duck.registerObserver(observer);
  }

  public notifyObservers(): void {
    this.duck.notifyObservers();
  }

  public static getQuacks(): number {
    return QuackCounter.numberOfQuacks;
  }
}
