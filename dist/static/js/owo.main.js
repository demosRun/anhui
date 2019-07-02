// Wed Jul 03 2019 00:25:41 GMT+0800 (GMT+08:00)

"use strict";

// 存储页面基本信息
var owo = {
  // 页面默认入口
  entry: "home",
  // 全局方法变量
  tool: {},
  // 框架状态变量
  state: {}
};
/*
  存储每个页面的函数
  键名：页面名称
  键值：方法列表
*/

owo.script = {
  "home": {
    "template": {
      "nav": {
        "data": {
          "itemLiat": [{
            "url": "http://www.people.com.cn/",
            "name": "首页"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "要闻"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "国资动态"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "企业党建"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "公示公告"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "视频新闻"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "理论学习"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "廉政教育"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "基层传真"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "党史纵览"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "图说党建"
          }]
        },
        "prop": {}
      },
      "44V6SpMv": {
        "data": {
          "swiper": null
        },
        "created": function created() {
          var _this = this;

          this.data.swiper = new Swiper('.swiper-container-p2', {
            mode: 'horizontal',
            autoplay: 5000,
            autoplayDisableOnInteraction: false,
            loop: true,
            slidesPerView: 1,
            mousewheelControl: false,
            onSlideChangeStart: function onSlideChangeStart(swiper) {
              _this.$el.getElementsByClassName('thisp')[0].innerText = swiper.activeLoopIndex + 1;
            }
          });
          this.$el.getElementsByClassName('allp')[0].innerText = this.data.swiper.slides.length;
        },
        "stop": function stop() {
          this.data.swiper.stopAutoplay();
        },
        "start": function start() {
          this.data.swiper.startAutoplay();
        },
        "prev": function prev() {
          this.data.swiper.swipePrev();
        },
        "next": function next() {
          this.data.swiper.swipeNext();
        },
        "prop": {}
      },
      "a5Jkh9zomp95ftbW": {
        "data": {
          "itemLiat": [{
            "name": "雅加达，别说再见",
            "url": "http://www.people.com.cn/",
            "time": "2018-09-03 13:38"
          }, {
            "name": "雅加达亚运夺金练兵兼顾 中国军团提速迈向东京奥运雅加达亚运夺金练兵兼顾 中国军团提速迈向东京奥运雅加达亚运夺金练兵兼顾 中国军团提速迈向东京奥运",
            "url": "http://www.people.com.cn/",
            "time": "2018-09-03 13:38"
          }, {
            "name": "高清：2018年雅加达亚运会 闭幕式盛况",
            "url": "http://www.people.com.cn/",
            "time": "2018-09-03 13:38"
          }]
        },
        "prop": {}
      },
      "paperList": {
        "created": function created() {
          new Swiper(this.$el, {
            "loop": true,
            "autoplay": 3000,
            "slidesPerView": 4
          });
        },
        "data": {
          "swiper": null
        },
        "prop": {}
      }
    }
  },
  "topBar": {
    "prop": {
      "logo": "http://www.people.com.cn/img/2016people/images/rmw_logo.png"
    }
  },
  "mainText": {},
  "imageCard": {},
  "6PJczu": {},
  "show": {},
  "show-2": {}
};

"use strict";

/* 方法合集 */
var _owo = {
  /* 对象合并方法 */
  assign: function assign(a, b) {
    var newObj = {};

    for (var key in a) {
      newObj[key] = a[key];
    }

    for (var key in b) {
      newObj[key] = b[key];
    }

    return newObj;
  },

  /* 运行页面初始化方法 */
  runCreated: function runCreated(pageFunction, entryDom) {
    pageFunction.created.apply(_owo.assign(pageFunction, {
      $el: entryDom,
      data: pageFunction.data,
      activePage: window.owo.activePage
    }));
  },

  /* 注册事件监听 */
  registerEvent: function registerEvent(pageFunction, entryDom) {
    // 判断是否包含事件监听
    if (pageFunction.event) {
      if (!window.owo.state.event) window.owo.state.event = {};

      for (var iterator in pageFunction.event) {
        if (!window.owo.state.event[iterator]) window.owo.state.event[iterator] = [];
        window.owo.state.event[iterator].push({
          dom: entryDom,
          pageName: window.owo.activePage,
          fun: pageFunction.event[iterator],
          script: pageFunction
        });
      }
    }
  }
};

if (!document.getElementsByClassName) {
  /* 解决低版本浏览器没有getElementsByClassName的问题 */
  document.getElementsByClassName = function (className, element) {
    var children = (element || document).getElementsByTagName('*');
    var elements = new Array();

    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      var classNames = child.className.split(' ');

      for (var j = 0; j < classNames.length; j++) {
        if (classNames[j] == className) {
          elements.push(child);
          break;
        }
      }
    }

    return elements;
  };
}
/* 运行页面所属的方法 */


_owo.handlePage = function (pageName, entryDom) {
  _owo.handleEvent(entryDom, null, entryDom);
  /* 判断页面是否有自己的方法 */


  var newPageFunction = window.owo.script[pageName];
  if (!newPageFunction) return; // console.log(newPageFunction)
  // 如果有created方法则执行

  if (newPageFunction.created) {
    _owo.runCreated(newPageFunction, entryDom);
  } // 注册事件监听


  _owo.registerEvent(newPageFunction, entryDom); // 判断页面是否有下属模板,如果有运行所有模板的初始化方法


  for (var key in newPageFunction.template) {
    var templateScript = newPageFunction.template[key];

    if (templateScript.created) {
      // 获取到当前配置页的DOM
      // 待修复,临时获取方式,这种方式获取到的dom不准确
      var domList = document.querySelectorAll('[template="' + key + '"]'); // 有时候在更改html时会将某些块进行删除

      if (domList.length == 0) {
        console.info('无法找到页面组件:' + key);
      } // console.log(domList.length)


      for (var ind = 0; ind < domList.length; ind++) {
        _owo.runCreated(templateScript, domList[ind]); // 注册事件监听


        _owo.registerEvent(templateScript, domList[ind]);
      }
    }
  }
};
/* owo事件处理 */


_owo.handleEvent = function (tempDom, templateName, entryDom) {
  var activePage = window.owo.script[owo.activePage];

  if (tempDom.attributes) {
    for (var ind = 0; ind < tempDom.attributes.length; ind++) {
      var attribute = tempDom.attributes[ind]; // 判断是否为owo的事件
      // ie不支持startsWith

      if (attribute.name[0] == '@') {
        var eventName = attribute.name.slice(1);
        var eventFor = attribute.textContent;

        switch (eventName) {
          case 'show':
            {
              // 初步先简单处理吧
              var temp = eventFor.replace(/ /g, ''); // 取出条件

              var condition = temp.split("==");

              if (activePage.data[condition[0]] != condition[1]) {
                tempDom.style.display = 'none';
              }

              break;
            }

          default:
            {
              // 处理事件 使用bind防止闭包
              tempDom["on" + eventName] = function (event) {
                // 判断页面是否有自己的方法
                var newPageFunction = window.owo.script[window.owo.activePage]; // console.log(this.attributes)

                if (this.templateName !== owo.activePage) {
                  // 如果模板注册到newPageFunction中，那么证明模板没有script那么直接使用eval执行
                  if (newPageFunction.template) {
                    newPageFunction = newPageFunction.template[this.templateName];
                  }
                } // 待优化可以单独提出来
                // 取出参数


                var parameterArr = [];
                var parameterList = this.eventFor.match(/[^\(\)]+(?=\))/g);

                if (parameterList && parameterList.length > 0) {
                  // 参数列表
                  parameterArr = parameterList[0].split(','); // 进一步处理参数

                  for (var i = 0; i < parameterArr.length; i++) {
                    var parameterValue = parameterArr[i].replace(/(^\s*)|(\s*$)/g, ""); // console.log(parameterValue)
                    // 判断参数是否为一个字符串

                    if (parameterValue.charAt(0) === '"' && parameterValue.charAt(parameterValue.length - 1) === '"') {
                      parameterArr[i] = parameterValue.substring(1, parameterValue.length - 1);
                    }

                    if (parameterValue.charAt(0) === "'" && parameterValue.charAt(parameterValue.length - 1) === "'") {
                      parameterArr[i] = parameterValue.substring(1, parameterValue.length - 1);
                    } // console.log(parameterArr[i])

                  }

                  this.eventFor = this.eventFor.replace('(' + parameterList + ')', '');
                } else {
                  // 解决 @click="xxx()"会造成的问题
                  this.eventFor = this.eventFor.replace('()', '');
                } // console.log(newPageFunction)
                // 如果有方法,则运行它


                if (newPageFunction[this.eventFor]) {
                  // 绑定window.owo对象
                  // console.log(tempDom)
                  // 待测试不知道这样合并会不会对其它地方造成影响
                  newPageFunction.$el = entryDom;
                  newPageFunction.$event = event;
                  newPageFunction[this.eventFor].apply(newPageFunction, parameterArr);
                } else {
                  // 如果没有此方法则交给浏览器引擎尝试运行
                  eval(this.eventFor);
                }
              }.bind({
                eventFor: eventFor,
                templateName: templateName
              });
            }
        }
      }
    }
  }

  if (tempDom.children) {
    // console.log(childrenDom)
    // 递归处理所有子Dom结点
    for (var i = 0; i < tempDom.children.length; i++) {
      var childrenDom = tempDom.children[i]; // 每个子节点均要判断是否为模块

      var newTemplateName = templateName;

      if (childrenDom.attributes['template'] && childrenDom.attributes['template'].textContent) {
        newTemplateName = childrenDom.attributes['template'].textContent;
      }

      var _temp = childrenDom.attributes['template'] ? tempDom : entryDom;

      _owo.handleEvent(childrenDom, newTemplateName, _temp);
    }
  } else {
    console.info('元素不存在子节点!');
    console.info(tempDom);
  }
}; // 页面资源加载完毕事件


_owo.ready = function () {
  var page = owo.entry;
  window.owo.activePage = page;
  var entryDom = document.getElementById('o-' + page);

  if (entryDom) {
    _owo.handlePage(page, entryDom);
  } else {
    console.error('找不到页面入口! 设置的入口为: ' + page);
  } // 设置状态为dom准备完毕


  window.owo.state.isRrady = true; // 判断是否有需要运行的其他方法

  if (window.owo.state.created != undefined) {
    window.owo.state.created.forEach(function (element) {
      // 运行对应的方法
      element();
    });
  }
};
/*
 * 传递函数给whenReady()
 * 当文档解析完毕且为操作准备就绪时，函数作为document的方法调用
 */


_owo.whenReady = function () {
  //这个函数返回whenReady()函数
  var funcs = []; //当获得事件时，要运行的函数

  var ready = false; //当触发事件处理程序时,切换为true
  //当文档就绪时,调用事件处理程序

  function handler(e) {
    if (ready) return; //确保事件处理程序只完整运行一次
    //如果发生onreadystatechange事件，但其状态不是complete的话,那么文档尚未准备好

    if (e.type === 'onreadystatechange' && document.readyState !== 'complete') {
      return;
    } //运行所有注册函数
    //注意每次都要计算funcs.length
    //以防这些函数的调用可能会导致注册更多的函数


    for (var i = 0; i < funcs.length; i++) {
      funcs[i].call(document);
    } //事件处理函数完整执行,切换ready状态, 并移除所有函数


    ready = true;
    funcs = null;
  } //为接收到的任何事件注册处理程序


  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', handler, false);
    document.addEventListener('readystatechange', handler, false); //IE9+

    window.addEventListener('load', handler, false);
  } else if (document.attachEvent) {
    document.attachEvent('onreadystatechange', handler);
    window.attachEvent('onload', handler);
  } //返回whenReady()函数


  return function whenReady(fn) {
    if (ready) {
      fn.call(document);
    } else {
      funcs.push(fn);
    }
  };
}(); // 执行页面加载完毕方法


_owo.whenReady(_owo.ready);

function switchPage(oldUrlParam, newUrlParam) {
  var oldPage = oldUrlParam.split('&')[0];
  var newPage = newUrlParam.split('&')[0]; // 查找页面跳转前的page页(dom节点)
  // console.log(oldUrlParam)
  // 如果源地址获取不到 那么一般是因为源页面为首页

  if (oldPage === undefined) {
    oldPage = owo.entry;
  }

  var oldDom = document.getElementById('o-' + oldPage);

  if (oldDom) {
    // 隐藏掉旧的节点
    oldDom.style.display = 'none';
  } // 查找页面跳转后的page


  var newDom = document.getElementById('o-' + newPage); // console.log(newDom)

  if (newDom) {
    // 隐藏掉旧的节点
    newDom.style.display = 'block';
  } else {
    console.error('页面不存在!');
    return;
  }

  window.owo.activePage = newPage;

  _owo.handlePage(newPage, newDom);
}