import Observer from '../interface/Observer';
import QuackObservable from '../interface/QuackObservable';

export default class Observable implements QuackObservable {
  observers: Observer[] = [];
  duck: QuackObservable;

  constructor(duck: QuackObservable) {
    this.duck = duck;
  }

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.duck);
    }
  }
}
