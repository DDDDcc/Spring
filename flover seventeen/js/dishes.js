var imgshow = document.getElementById("imgshow");
/*imgshow.style.height = imgshow.offsetWidth + "px";*/
window.onresize = function() {
	var imgW = imgshow.offsetWidth;
	/*imgshow.style.height = imgW + "px";*/
}
/*window.onscorll = function() {
	var h = document.documentElement.scrollTop || document.body.scrollTop;
	var down = document.getElementById("down_img").offsetTop;
	window.onresize = function() {
		if(h >= (down - h)) {
			down_img.style.display = "block";
		}
	}
}*/
/*window.onresize = function() {
	/*var h = document.documentElement.scrollTop || document.body.scrollTop;
	var down = document.getElementById("down_img").offsetTop;
	window.onscorll = function() {
		var h = document.documentElement.scrollTop || document.body.scrollTop;
		if(h >= (dowm-h)) {
			down_img.style.display = "block";
		}
	}
	
}*/