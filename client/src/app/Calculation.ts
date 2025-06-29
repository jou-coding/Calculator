export class Calculation {
  private result = 0;

  get() {
    return this.result;
  }

  clear() {
    this.result = 0;
    return this.result;
  }

  add(a: number) {
    this.result = this.result + a;
    return this.result;
  }
  sub(a: number, b: number) {
    return a - b;
  }

  mul(a: number, b: number) {
    return a * b;
  }

  div(a: number, b: number) {
    return a / b;
  }
}
