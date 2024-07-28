import Quackable from '../interface/Quackable';

export default class Flock implements Quackable {
  quackers: Quackable[] = [];

  public add(quacker: Quackable): void {
    if (Array.isArray(quacker)) {
      this.quackers.push(...quacker);
    } else {
      this.quackers.push(quacker);
    }
  }

  public quack(): void {
    for (const quacker of this.quackers) {
      quacker.quack();
    }
  }
}
