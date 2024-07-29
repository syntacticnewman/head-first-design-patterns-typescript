import Observer from '../observer/Observer';
import Quackable from '../interface/Quackable';

export default class Flock implements Quackable {
  quackers: Quackable[] = [];

  // NOTE: A `quacker` can also be a `Flock` as it implements the `Quackable` interface.
  // We could implement the logic to flatten the array of `quackers` like `this.quackers.push(...quacker.quackers)`
  // when `quacker` is an instance of `Flock`, but that'll remove the beauty of this pattern.
  public add(quacker: Quackable): void {
    this.quackers.push(quacker);
  }

  public quack(): void {
    for (const quacker of this.quackers) {
      quacker.quack();
    }
  }

  public registerObserver(observer: Observer): void {
    for (const quacker of this.quackers) {
      quacker.registerObserver(observer);
    }
  }

  public notifyObservers(): void {
    for (const quacker of this.quackers) {
      quacker.notifyObservers();
    }
  }
}
