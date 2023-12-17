function EventBus() {
  this.eventList = {}; // 调度中心事件列表

  // 绑定事件
  EventBus.prototype.$on = function (event, callback) {
    if (!this.eventList[event]) {
      this.eventList[event] = [];
    }
    this.eventList[event].push(callback);
  };

  // 发布事件
  EventBus.prototype.$emit = function (event, ...args) {
    if (!this.eventList[event]) {
      throw Error("未注册事件");
    }
    this.eventList[event].forEach((fn) => fn(...args));
  };

  // 解绑事件
  EventBus.prototype.$off = function (event, callback) {
    if (!this.eventList[event]) {
      throw Error("无效事件");
    }
    if (this.eventList[event]) {
    //   let index = this.eventList[event].indexOf(callback);
    // index === -1 ? delete this.eventList[event] : this.eventList[event].splice(index, 1)
    this.eventList[event].indexOf(callback)? delete this.eventList[event] : this.eventList[event].splice(index, 1)
    }
  }
}

// 测试
const publish = new EventBus();
let foo1 = function (args) {
  console.log(args);
};
let foo2 = function (args) {
  console.log(args);
};
let foo3 = function (args) {
  console.log(args);
};
publish.$on("事件1", foo1);
publish.$on("事件2", foo2);
publish.$on("事件3", foo3);

publish.$emit("事件1", Math.random());
publish.$emit("事件2", ["12334", "9877", '7663']);
publish.$emit("事件3", 1234);

publish.$off("事件2", foo2);

publish.$emit("事件1", Math.random());
publish.$emit("事件2", ["12334", "9877"]);
publish.$emit("事件3", 1234);
