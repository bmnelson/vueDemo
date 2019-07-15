 // 简单的订阅发布模式
 
 const Event = {}

 Event.list = {} // 订阅列表

 Event.on = function (key, fn) {
   if (!Event.list[key]) {
     Event.list[key] = [] // 未有订阅的话先创建个缓存列表
   }
   Event.list[key].push(fn)
 }

 Event.emit = function () {
   let key = Array.prototype.shift.call(arguments)
   let fns = Event.list[key]

   if (!fns || fns.length === 0) {
     return
   } else
     fns.map(fn => {
       fn.apply(this, arguments)
     })
 }

 export default Event