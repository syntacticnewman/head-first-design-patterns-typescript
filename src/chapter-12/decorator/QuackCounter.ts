import Quackable from '../interface/Quackable';

export default class QuackCounter implements Quackable {
  public duck: Quackable;
  static numberOfQuacks: number = 0;

  constructor(duck: Quackable) {
    this.duck = duck;
  }

  public quack(): void {
    this.duck.quack();
    QuackCounter.numberOfQuacks++;
  }

  public static getQuacks(): number {
    return QuackCounter.numberOfQuacks;
  }
}
