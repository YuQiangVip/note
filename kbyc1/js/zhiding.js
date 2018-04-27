var startx, starty, movex, movey, countx = 0,
	county = 0,
	endx, endy;
//手指接触屏幕
document.addEventListener("touchstart", function(e) {
	startx = e.touches[0].pageX;
	starty = e.touches[0].pageY;
}, false);
document.addEventListener("touchmove", function(e) {
	movex = e.touches[0].pageX;
	movey = e.touches[0].pageY;
	countx = movex - startx;
	county = movey - starty;
	setTimeout(function() {
		var sTop = document.documentElement.scrollTop + document.body.scrollTop;
		if(sTop > 300) {
			$("#shanghua").show();
		}
		if(sTop < 250) {
			$("#shanghua").hide();
		}
	}, 500)
}, false);

function scrollTo(ele, speed) {
	$("#shanghua").hide();
	if(!speed) speed = 300;
	if(!ele) {
		$("html,body").animate({
			scrollTop: 0
		}, speed);
	} else {
		if(ele.length > 0) $("html,body").animate({
			scrollTop: $(ele).offset().top
		}, speed);
	}
	return false;
}