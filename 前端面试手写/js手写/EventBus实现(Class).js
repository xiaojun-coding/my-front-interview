class EventBus {
    constructor() {
        this.eventList = {} // 事件调度中心
    }

    /**
     * @description: 事件绑定
     * @param {*} event: 事件类型
     * @param {*} callback： 回调函数
     * @return {*}
     */    
    $on(event, callback) {
        if(!this.eventList[event]) {
            this.eventList[event] = []
        }
        this.eventList[event].push(callback)
    }
    
    /**
     * @description: 事件发布
     * @param {*} event：事件类型
     * @param {array} args: 参数解构
     * @return {*}
     */    
    $emit(event, ...args) {
        if(!this.eventList[event]) {
            throw Error('未注册事件')
        }
        this.eventList[event].forEach(fn=> fn(...args))
    }
    
    /**
     * @description: 事件解绑
     * @param {*} event: 事件类型
     * @param {*} callback: 解绑的回调函数
     * @return {*}
     */    
    $off(event, callback) {
        if(!this.eventList[event]) {
            throw Error('无效事件')
        }
        if(this.eventList[event]) {
            let index = this.eventList[event].indexOf(callback)
            index === -1 ? delete this.eventList[event] : this.eventList[event].splice(index, 1)
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