import Quackable from "../interface/Quackable";

export default class RedheadDuck implements Quackable {
  public quack(): void {
    console.log("Quack");
  }
}
