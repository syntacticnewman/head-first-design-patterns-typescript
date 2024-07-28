import Quackable from "../interface/Quackable";

export default class RubberDuck implements Quackable {
  public quack() {
    console.log("Squeak");
  }
}
