/*
call 与apply 其实就是切换一个上下文对象加上参数去调用方法
call与apply的区别只有call的参数是一个值，apply是一个数组
非立即进行的防抖动函数 n秒内一直触发就一直不会触发
*/

export function debounce(func, wait) {
  let timeout;
  return function () {
    if (timeout) clearTimeout(timeout)
    let context = this;
    let args = arguments;
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }

}

/*
节流函数  在一直触发函数的N秒内只触发一次
*/
export function throttle(func, wait) {
  let previous = 0;
  return function () {
    let now = Date.now();
    let context = this;
    args = arguments;
    if (now - previous > wait) {
      func.apply(context, args)
      previous = now
    }
  }
}

/*
闭包this问题
*/
export function A() {
  let b = 0;
  return function () {
    // console.log(this.b, 'this.b');  printLn(undefined,error)
    console.log(b, 'b')
  }
}