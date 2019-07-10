<template>
  <div>
    <div>
      <el-button>闭包的定义1.其实就是定义能够获取函数内部变量的函数.应用场景:1.保持内部变量不被销毁 2.获取无需更改的函数内部变量</el-button>

    </div>

    <div>
      <el-button>立即函数(function(){})() 自执行 与匿名函数同用可用于闭包</el-button>

    </div>
    <div>
      <el-button>匿名函数可实现闭包,应用场景1.返回值 2.闭包 3.回调函数 4.对象 5.函数表达式</el-button>

    </div>
    <div>
      <el-button>Http-request:1.请求行 2.请求头部 (content-type/accept-encoding/cookies/authorization) 3.空行 4.请求数据
      </el-button>

    </div>
    <div>
      <el-button>Http-respsonse:1.状态行statu 2.响应头部 3.空行 4.响应正文</el-button>
      <el-button>正则表达式三中括号:1.[] 2.{}限定表达符 3.()</el-button>
    </div>
    <!--怎么阻止事件的冒泡-->
    <div @click="divClick">
      <ul @click="ulClick">
        <li @click="liClick">one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </div>
    <div id="test">
      test
    </div>
  </div>
</template>


<script>
import { debounce } from "@/utils/debounce";

function fn() {
  let max = 10;
  return function bar(x) {
    if (x > max) {
      console.log(x + " is the maxier");
    } else {
      console.log(max + " is the maxier");
    }
  };
}

let f1 = fn();
f1(15);

let min = 15;
let fn1 = function(x) {
  if (x < min) {
    console.log(x + " is minier");
  } else {
    console.log(min + " is minier");
  }
};
(function(f) {
  let min = 5;
  f(10);
})(fn1);

//解析url思路，利用a标签的属性获取相关属性；params利用对象
function parseUrl(url) {
  let a = document.createElement("a");
  a.href = url;
  return {
    source: url,
    protocol: a.protocol.replace(":", ""),
    host: a.hostname,
    port: a.port,
    query: a.search,
    param: (function() {
      let item = {};
      let array = a.search.replace(/^\?/, "").split("&");
      for (let i = 0; i < array.length; i++) {
        let newArray = array[i].split("=");
        console.log(newArray);
        item[newArray[0]] = newArray[1];
      }
      return item;
    })()
  };
}

//实现数组的随机排序 Math.floor四舍五入到个位
function makeArrayRandom(Array) {
  let [newArray, item] = [[], null];
  let length = Array.length;
  for (let i = 0; i < length; i++) {
    let itemIndex = Math.floor(Math.random() * Array.length);
    item = Array[itemIndex];
    Array.splice(itemIndex, 1);
    if (newArray.indexOf(item) != 0) {
      newArray[i] = item;
    }
  }
  return newArray;
}

console.log(makeArrayRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(parseUrl("http://abc.com:8080/dir/index.html?id=255&m=hello#top"));

export default {
  name: "knoledege",
  //where vue components manipulate the Dom ;  mounted()
  mounted() {
    //闭包允许内层函数访问父函数的值，但是最终值
    (function() {
      var lists = document.getElementsByTagName("li");
      for (var i = 0, len = lists.length; i < len; i++) {
        debounce(
          (function(index) {
            lists[index].onmouseover = function() {
              console.log(index, " current list index ");
            };
          })(i),
          2000
        );
      }
    })();
  },
  computd: {},
  methods: {
    divClick: () => {
      alert("div");
    },
    ulClick: () => {
      alert("url");
    },
    liClick: e => {
      //阻止冒泡
      window.event ? (event.cancelBubble = true) : e.stopPropagation();

      alert("li");
    }
  }
};
</script>