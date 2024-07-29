import Observable from '../observer/Observable';
import Observer from '../observer/Observer';
import Quackable from '../interface/Quackable';

export default class RubberDuck implements Quackable {
  observable: Observable;

  constructor() {
    this.observable = new Observable(this);
  }

  public quack(): void {
    console.log('Squeak');
    this.notifyObservers();
  }

  public registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer);
  }

  public notifyObservers(): void {
    this.observable.notifyObservers();
  }

  public toString(): string {
    return 'Rubber Duck';
  }
}
