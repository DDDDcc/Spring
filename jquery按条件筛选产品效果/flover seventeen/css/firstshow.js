var headimg = document.getElementsByClassName("head_show");
headimg.style.height = headimg.offsetWidth + "px";
window.onresize = function() {
	var imgW = headimg.offsetWidth;
	headimg.style.height = imgW + "px";
}
/*var textshow = document.getElementById("textshow");
textshow.style.height = textshow.offsetWidth*0.5 + "px";
window.onresize = function() {
	var textshowW = textshow.offsetWidth;
	textshow.style.height =textshowW*0.5 + "px";
}*/
var rowimg = document.getElementById("rowimg");
rowimg.style.height = rowimg.offsetWidth + "px";
window.onresize = function() {
	var rowimgW = rowimg.offsetWidth;
	rowimg.style.height = rowimgW + "px";
}

var listShowImg = document.getElementById("listShowImg");
listShowImg.style.height = listShowImg.offsetWidth*0.7035 + "px";
window.onresize = function() {
	var listShowImgW = rowimg.offsetWidth;
	listShowImg.style.height = listShowImgW*0.7035 + "px";
}