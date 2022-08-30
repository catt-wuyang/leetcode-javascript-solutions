// const promise = new Promise((resolve, reject) => {
//   resolve("ok");
//   reject("no");
// });

// promise.then(
//   (res) => console.log(res),
//   (error) => console.log(error)
// );

// promise.then((res) => console.log(res)).catch((err) => console.log(err));

/**
 * 手写实现 Promise
 */
class MyPromise {
  static PENDING = "pending";
  static FULFILL = "fulfill";
  static REJECT = "reject";

  constructor(func) {
    this.PromiseState = MyPromise.PENDING; // 状态管理
    this.PromiseResult = null; // 结果参数
    this.onFulfillCallbacks = [];
    this.onRejectCallbacks = [];
    try {
      func(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(result) {
    if (this.PromiseState === MyPromise.PENDING) {
      setTimeout(() => {
        this.PromiseState = MyPromise.FULFILL;
        this.PromiseResult = result;
        this.onFulfillCallbacks.forEach((callback) => {
          callback(result);
        });
      }, 0);
    }
  }

  reject(reason) {
    if (this.PromiseState === MyPromise.PENDING) {
      setTimeout(() => {
        this.PromiseState = MyPromise.REJECT;
        this.PromiseResult = reason;
        this.onRejectCallbacks.forEach((callback) => {
          callback(reason);
        });
      }, 0);
    }
  }

  then(onFulfill, onReject) {
    onFulfill = typeof onFulfill === "function" ? onFulfill : (value) => value;
    onReject =
      typeof onReject === "function"
        ? onReject
        : (reason) => {
            throw reason;
          };
    if (this.PromiseState === MyPromise.PENDING) {
      this.onFulfillCallbacks.push(onFulfill);
      this.onRejectCallbacks.push(onReject);
    }

    if (this.PromiseState === MyPromise.FULFILL) {
      setTimeout(() => {
        onFulfill(this.PromiseResult);
      }, 0);
    }

    if (this.PromiseState === MyPromise.REJECT) {
      setTimeout(() => {
        onReject(this.PromiseResult);
      }, 0);
    }
  }
}

const promise1 = new MyPromise((resolve, reject) => {
  resolve("ok~ok");
});
console.log("promise1", promise1);

const promise2 = new MyPromise((resolve, reject) => {
  reject("no~no");
});
console.log("promise2", promise2);

const promise3 = new MyPromise((resolve, reject) => {
  resolve("ok~ok");
  reject("no~no");
});
promise3.then(
  (res) => console.log(res),
  (reason) => console.log(reason)
);
console.log("promise3", promise3);

const promise4 = new MyPromise((resolve, reject) => {
  resolve("ok~ok");
});
promise4.then(null, (reason) => {
  console.log(reason);
});
console.log("promise4", promise4);

console.log(1);
const promise5 = new MyPromise((resolve, reject) => {
  console.log(2);
  resolve("ok~ok");
});
promise5.then(
  (res) => console.log(res),
  (reason) => console.log(reason)
);
console.log(3);
