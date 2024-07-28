import Quackable from "../interface/Quackable";

export default class DuckCall implements Quackable {
  public quack(): void {
    console.log("Kwak");
  }
}
