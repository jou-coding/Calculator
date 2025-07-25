export class Calculation {
  private result = 0;
  private operater = "";

  get() {
    return this.result;
  }

  setOperater(operater: string) {
    this.operater = operater;
  }
  getOperater() {
    return this.operater;
  }

  clear() {
    this.result = 0;
    return this.result;
  }

  add(a: number) {
    this.result = this.result + a;
    return this.result;
  }
  sub(a: number) {
    if (this.result === 0) {
      this.result = a;
      return;
    }
    this.result = this.result - a;
    return this.result;
  }

  mul(a: number) {
    this.result = this.result * a;
    return this.result;
  }

  div(a: number) {
    this.result = this.result / a;
    return this.result;
  }
}
