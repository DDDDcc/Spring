//（function(){}）（）组件化互相不污染（影响），可以同时并存
(function(window) {
	var L = window.L ? window.L : {}; //定义了L框架的根
	
	L.Dialog = function(selector) {
		//先判断选择器之前已经创建过了么？如果创建就返回对象。
		if(L.Dialog.cache[selector]){
			return L.Dialog.cache[selector];
		}
		//接收用户传来的选择器
		//1、要有个show方法，弹出对话框
		//2、关闭方法close
		//3、动态解析用户输入的信息。
		var dialogDiv = document.querySelector(selector);
		//判断用户是否输入
		if(!dialogDiv) {
			return null;
		}

		//拿到用户的标题文本
		var title = dialogDiv.getAttribute('title');

		//初始化遮罩层
		var dialogCover = document.createElement('div');
		dialogCover.className = "dialog_cover";
		dialogCover.style.display = "none";
		document.body.appendChild(dialogCover);

		var strHTML = "";
		strHTML += '<div class = "dialog">';
		strHTML += '       <div class = "dialog_h">';
		strHTML += '           <h3>' + title + '</h3>';
		strHTML += '			<i class="btn_close"  id="">x</i>';
		strHTML += '		</div>'
		strHTML += '		<div class="dialog_b">'
		strHTML += dialogDiv.innerHTML;
		strHTML += '        </div>'
		strHTML += '</div>'
		dialogDiv.innerHTML = strHTML;
		//	 	<div class="dialog_cover" id="dialog_cover"></div>
		//			<div class="dialog" id="dialog">
		//				<div class="dialog_h">
		//					<h3>对话框头部</h3>
		//					<i class="btn_close" id="btn_close">x</i>
		//				</div>
		//				<div class="dialog_b">
		//					对话框内部
		//				</div>
		//			</div>

		var dialog = {
			dialogDiv: dialogDiv, //用户的dialog的div
			title: title, //用户的标题
			dialogCover:dialogCover,//遮罩层属性
			show: function() {
				//弹出层
				//显示遮罩层，显示对话框，给关闭按钮绑定点击事件
				this.dialogCover.style.display = "block";
				this.dialogDiv.style.display = "block";
				var self = this;
				var btnClose = dialogDiv.querySelector('.btn_close');
				btnClose.onclick = function() {
					self.close();
				}
				/*var  btnCloseList = document.querySelectorAll('.btn_close');
				for(var i = 0; i<btnCloseList.length;i++){
					btnCloseList[i].onclick = function(){
					self.close();
					};
				}*/

			},

			close: function() {
				//关闭层
				//不显示：遮罩层
				//弹出层
				//显示遮罩层，显示对话框，给关闭按钮绑定点击事件
				this.dialogCover.style.display = "none";
				this.dialogDiv.style.display = "none";
				var self = this;
				var btnClose = dialogDiv.querySelector('.btn_close');
				btnClose.onclick = null;
				/*document.querySelector('.btn_close').onclick = null;*/
			},
		};
		L.Dialog.cache[selector] = dialog;//缓存化模式
		return dialog;
	}
	//在函数上创建一个缓存。放selector对应的dialog对象
	L.Dialog.cache = {};
	window.L = L;
})(window || {});