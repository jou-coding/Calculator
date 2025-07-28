export class Calculation {
    constructor() {
        this.result = 0;
        this.operater = "";
    }
    get() {
        return this.result;
    }
    setOperater(operater) {
        this.operater = operater;
    }
    getOperater() {
        return this.operater;
    }
    clear() {
        this.result = 0;
        return this.result;
    }
    add(a) {
        this.result = this.result + a;
        return this.result;
    }
    sub(a) {
        if (this.result === 0) {
            this.result = a;
            return;
        }
        this.result = this.result - a;
        return this.result;
    }
    mul(a) {
        if (this.result === 0) {
            this.result = a;
            return;
        }
        this.result = this.result * a;
        return this.result;
    }
    div(a) {
        if (this.result === 0) {
            this.result = a;
            return;
        }
        this.result = this.result / a;
        return this.result;
    }
}
