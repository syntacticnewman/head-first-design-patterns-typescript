import Goose from '../class/Goose';
import Quackable from '../interface/Quackable';

export default class GooseAdapter implements Quackable {
  goose: Goose;

  constructor(goose: Goose) {
    this.goose = goose;
  }

  public quack(): void {
    this.goose.honk();
  }
}
