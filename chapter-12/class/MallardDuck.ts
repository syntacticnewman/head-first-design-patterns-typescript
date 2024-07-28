import Quackable from "../interface/Quackable";

export default class MallardDuck implements Quackable {
  public quack() {
    console.log("Quack");
  }
}
