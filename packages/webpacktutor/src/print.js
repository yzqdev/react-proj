(() => {
  const fn1 = async () => {
    let a = [1, 2, 3, 4, 5, 3, 43, 5, 6, 3, 2, 34, 5, 6];
    console.log(Array.from([...new Set(a)]));
  };
  const fn2 = async () => {
    console.log("f2");
  };
  const f3 = async () => {
    await fn2();
    await fn1();
  };
  console.log([1, 2, 3].findIndex(x => x == 4));

  console.log("abc".padStart(10));

  const alertMe = msg => {
    console.log(msg);
  };
  class Robot {
    constructor(msg) {
      this.message = msg;
    }
    say() {
      alertMe(this.message);
    }
  }
  const marvin = new Robot("hello babel");
  marvin.say();
})();
