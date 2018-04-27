window.onload = function(){
	changeMouseOver();
	changeSearchLi();
	changBorColor();
	slideImg();
	slider_sm();
	slider_tv();
	change_li();
}
/*鼠标滑过出现购物车*/
function changeMouseOver(){
	$('.top_car').mouseover(function(){
		$('.car_menu').slideDown('fast');
		$('.top_car a').css({"backgroundColor":"white","color":"#ff6700"});
	})
	$('.top_car').mouseout(function(){
		$('.car_menu').slideUp('fast').stop(true,true);
		$('.top_car a').css({"backgroundColor":"#424242","color":"#b0b0b0"});
	})
}
/*搜索栏菜单LI便签样式*/
function changeSearchLi(){
	/*$('.header_menu_ul a').on('mouseover',function () {
		$('this').next().slideDown().parent('li').siblings("li").find("div").hide();
	})*/
	$(document).on("mouseover",".header_menu_li a", function () {
		console.log($(this).siblings('div'));
		$(this).next().slideDown();
		$(this).parent('li').siblings('li').find(".slideDowner").hide().stop();
	})
	$(document).on("mouseout",".slideDowner", function () {
		$(this).slideUp();
	})
}

/*点击搜索栏，边框变色*/
function changBorColor(){
	var search_input = document.getElementsByClassName('search_input')[0];
		search_btn = document.getElementsByClassName('search_form')[0].getElementsByTagName('input');

	search_input.onfocus = function(){
		for(var i=0;i<search_btn.length;i++){
			search_btn[i].style.borderColor =  '#ff6700';
		}
	}
	search_input.onblur = function(){
		for(var i=0;i<search_btn.length;i++){
			search_btn[i].style.borderColor =  '#e0e0e0';
		}
	}
}
/*主轮播图*/
function slideImg(){
	var index = 0,
	timer = null,
	banner_move = id('banner_move'),
	move_img = banner_move.getElementsByTagName('a'),
	move_li = id('move_li').getElementsByTagName('li');
	move_btn = id('move_btn').getElementsByTagName('a');
	banner_move.onmouseover = function(){
	if(timer)clearInterval(timer);
	}
	banner_move.onmouseout = function () {
	timer = setInterval(function(){
		index++;
		if(index>=move_img.length){
			index = 0;
			}
		changeImg();
		},3000);
	}
	/*开始调用离开事件*/
	banner_move.onmouseout();
	/*back next*/
	move_btn[0].onclick = function(){
		banner_move.onmouseover();
		index--;
		if(index<0){
			index = move_img.length-1;
		}
		changeImg();
	}
	move_btn[1].onclick = function(){
		banner_move.onmouseover();
		index++;
		if(index>=move_img.length){
			index = 0;
		}
		changeImg();
	}
	/*显示隐藏图片*/
	function changeImg(){
	for(var i=0;i<move_img.length;i++){
		move_img[i].style.display = 'none';
		move_li[i].className = '';
	}
	move_img[index].style.display = 'block';
	move_li[index].className = 'active';
	}
}
/*获取id*/
function id(x){
	if(typeof x == 'string') return document.getElementById(x);
	return x;
}
/*sub轮咯图*/
function slider_sm(){
	var back = document.querySelector('.btn_xm_l'),
	next = document.querySelector('.btn_xm_r'),
	more = id('more'),
	btn = more.getElementsByTagName("a"),
	move_dis = document.querySelector('.nav_move').offsetWidth,
	nav_img = document.querySelector('.nav_img');


	var timer = null,
	index = 0;
	/*鼠标滑过清楚定时器*/
	more.onmouseover = function(){
		if(timer){
			clearInterval(timer);
		}
	}
	/*自动轮播*/
	more.onmouseout = function(){
		timer = setInterval(function(){
			index++;
			if(index>=btn.length)index=0;
			change_dis();
		},7000);
	}
	/*自动执行离开事件*/
	more.onmouseout();
	/*点击切换事件*/
	for(var i=0;i<btn.length;i++){
		btn[i].id = i;
		btn[i].onclick = function(){
			index = this.id;
			change_dis();
		}
	}
 	function change_dis(){
	 	nav_img.style.transition = 'all .5s';
		nav_img.style.transform = 'translateX('+index*move_dis*-1+'px)';
	 	}
}

/*tab栏切换文档*/
function slider_tv(){
	var title_right = document.getElementsByClassName('title-right')[0],
		moveLi = title_right.getElementsByTagName('li'),
		tv_navMain1 = document.getElementsByClassName('tv-navMain1');
		//console.log(title_right);

		for(var i=0;i<tv_navMain1.length;i++){
			moveLi[i].index = i;
			moveLi[i].onmouseover = function(){
				for(var j=0;j<tv_navMain1.length;j++){
					tv_navMain1[j].style.display = 'none';
				}
				tv_navMain1[this.index].style.display = 'block';
			}
		}
}

function change_li(){
	var moveLi = document.getElementsByClassName('banner_menu_li');
		children = document.getElementsByClassName('children');

		for(var i=0;i<moveLi.length;i++){
			moveLi[i].index = i;
			moveLi[i].onmouseover = function(){
			for(var j=0;j<children.length;j++){
				children[j].style.display = 'none';
			}
			children[this.index].style.display = 'block';
		}
			moveLi[i].onmouseout = function(){
				children[this.index].style.display = 'none';
			}
		}
}