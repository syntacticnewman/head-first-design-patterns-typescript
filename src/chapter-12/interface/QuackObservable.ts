interface Observer {}

export default interface QuackObservable {
  registerObserver(observer: Observer): void;
  notifyObservers(): void;
}
