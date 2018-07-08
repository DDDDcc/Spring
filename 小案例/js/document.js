// jQuery实现文档加载完成后事件的原理。
/*
 *	封装绑定文档加载完成后的事件处理程序。
 * @callback function 页面文档加载完成后的回调函数
 * */

document.myReady = function(callback){
				//封装标准浏览器和ie浏览器
				if(document.addEventListener){
					document.addEventListener('DOMContentLoaded',callback,false);
				}else if(document.attachEvent){
					//兼容ie8及以下浏览器
					document.attachEvent('onreadystatechage',function(){
						//当文档的状态变为interactive时表示，文档dom对象可以进行访问
						if(document.readyState == "interactive"){
							callback(window.event);
						}else	{
							window.onload = callback;
						}
					});
				}
			};