import QuackObservable from '../observer/QuackObservable';

export default interface Quackable extends QuackObservable {
  quack(): void;
}
