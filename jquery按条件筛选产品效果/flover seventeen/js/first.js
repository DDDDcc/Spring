var coimg = document.getElementById("coimg");
coimg.style.height = coimg.offsetWidth + "px";
window.onresize = function() {
	var imgW = coimg.offsetWidth;
	coimg.style.height = imgW + "px";
}
var cotext = document.getElementById("cotext");
cotext.style.height = cotext.offsetWidth*0.5 + "px";
window.onresize = function() {
	var imgW = coimg.offsetWidth;
	cotext.style.height = cotext*0.5 + "px";
}
var rowimg = document.getElementById("rowimg");
rowimg.style.height = rowimg.offsetWidth+ 'px';
window.onresize = function() {
	var imgW = coimg.offsetWidth;
	rowimg.style.height = rowimg + "px";
}
var productimage = document.getElementById("productimage");
productimage.style.height = productimage.offsetWidth*0.7035+ 'px';
window.onresize = function() {
	var imgW = coimg.offsetWidth;
	productimage.style.height = productimage*0.7035 + "px";
}
$(document).ready(function() {
	$(".food_one").click(function() {
		$("#one").show();
		$("#one_image").show();
		$("#two").hide();
		$("#two_image").hide();
		$("#three").hide();
		$("#three_image").hide();
		$("#four").hide();
		$("#four_image").hide();
		$("#five").hide();
		$("#five_image").hide();
	});
	$(".food_two").click(function() {
		$("#one").hide();
		$("#one_image").hide();
		$("#two").show();
		$("#two_image").show();
		$("#three").hide();
		$("#three_image").hide();
		$("#four").hide();
		$("#four_image").hide();
		$("#five").hide();
		$("#five_image").hide();
	});
	$(".food_three").click(function() {
		$("#one").hide();
		$("#one_image").hide();
		$("#two").hide();
		$("#two_image").hide();
		$("#three").show();
		$("#three_image").show();
		$("#four").hide();
		$("#four_image").hide();
		$("#five").hide();
		$("#five_image").hide();
	});
	$(".food_four").click(function() {
		$("#one").hide();
		$("#one_image").hide();
		$("#two").hide();
		$("#two_image").hide();
		$("#three").hide();
		$("#three_image").hide();
		$("#four").show();
		$("#four_image").show();
		$("#five").hide();
		$("#five_image").hide();
	});
	$(".food_five").click(function() {
		$("#one").hide();
		$("#one_image").hide();
		$("#two").hide();
		$("#two_image").hide();
		$("#three").hide();
		$("#three_image").hide();
		$("#four").hide();
		$("#four_image").hide();
		$("#five").show();
		$("#five_image").show();
	});
})