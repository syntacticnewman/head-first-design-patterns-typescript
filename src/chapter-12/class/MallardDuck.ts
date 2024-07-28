import Quackable from '../interface/Quackable';

export default class MallardDuck implements Quackable {
  public quack(): void {
    console.log('Quack');
  }
}
