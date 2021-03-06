// 事件封装
(function(window) {
	//第一个：封装绑定事件的兼容处理
	var EventUtil = {
		//
		addEvent: function(element, type, handler, isCapture) {
			if(element.addEventListener) {
				//处理第四个参数，保证isCapture一定是boolean类型。
				isCapture = isCapture ? true : false;
				element.addEventListener(type, handler, isCapture);
			} else if(element.addEventListener) {
				element.attachEvent('on' + type, function() {
					return handle.call(element, window.event); //函数调用模式，this ==window
					//所有的事件处理中this ==event.target || event.srcElement
				});
			}
		},
		//获取事件对象 兼容处理
		getEvent: function(e) {
			return e || window.event;
		},
		//获取事件源对象
		getTarget: function(e) {
			return e.target || e.srcElement;
		},
		//阻止事件冒泡
		stopPropagation: function(e) {
			if(e.stopPropagation) {
				e.stopPropagation();
			} else {
				e.cancleBubble = true;
			}
		},
		//阻止默认行为
		preventDefault: function(e) {
			if(e.preventDefault) {
				e.preventDefault();
			} else {
				e.returnValue = false;
			}
		},
	};
	//把我们上面定义的对象赋值给 window的属性；
	window.EventUtil = EventUtil;
})(window || {});