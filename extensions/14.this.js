/**
 * 函数调用上下文 this 值问题
 *
 * pageHandler 想实现，通过调用 init() 方法来给对应的事件分配处理程序，但会报错；
 * 因为 this 值实际上是 document 而不是 pageHandler，调用 this.doSoth() 方法不存在；
 * 解决方法一用 bind 绑定 pageHandler
 * 解决方法二用 箭头函数 this 是继承的特性
 */

$("#element").click(function () {
  // this element clicked on
  var that = this;

  $(".elements").each(function () {
    // this current element in the loop
    // that element clicked on
  });
});

const pageHandler = {
  id: 2,
  init: function () {
    document
      .addEventListener(
        "click",
        function (event) {
          this.doSth(event.type);
        },
        false
      )
      .bind(this, false);

    document.addEventListener(
      "click",
      (event) => this.doSth(event.type),
      false
    );
  },
  doSth: function (type) {
    console.log(type);
  },
};
