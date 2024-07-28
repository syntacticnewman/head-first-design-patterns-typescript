import Quackable from '../interface/Quackable';

export default class Flock implements Quackable {
  quackers: Quackable[] = [];

  // NOTICE: A quacker can be also a Flock as it implements Quackable.
  public add(quacker: Quackable): void {
    this.quackers.push(quacker);
  }

  public quack(): void {
    for (let quacker of this.quackers) {
      quacker.quack();
    }
  }
}
