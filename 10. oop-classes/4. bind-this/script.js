class Calculator {
  constructor(num1) {
    this.num1 = num1;

    document
      .getElementById("bind")
      .addEventListener("click", this.getNumber.bind(this));
  }

  getNumber() {
    console.log(this.num1);
  }
}

const obj = new Calculator(5);
