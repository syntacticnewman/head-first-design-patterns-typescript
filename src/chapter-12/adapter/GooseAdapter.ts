import Goose from '../class/Goose';
import Observable from '../observer/Observable';
import Observer from '../observer/Observer';
import Quackable from '../interface/Quackable';

export default class GooseAdapter implements Quackable {
  goose: Goose;
  observable: Observable;

  constructor(goose: Goose) {
    this.goose = goose;
    this.observable = new Observable(this);
  }

  public quack(): void {
    this.goose.honk();
    this.notifyObservers();
  }

  public registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer);
  }

  public notifyObservers(): void {
    this.observable.notifyObservers();
  }
}
