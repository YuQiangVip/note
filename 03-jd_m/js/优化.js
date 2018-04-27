// 加载完毕事件 在该事件中 写的js代码 去获取dom元素 就一定不会出现找不到的问题
window.onload = function(){
	// 顶部的通栏 滚动的效果
	headerScroll();	

	// 倒计时的效果
	cutDownTime();

	// 轮播图的效果
	banner_01();
}

// 通栏方法
/*
	获取 导航栏的 高度

	在onscroll 事件中 去修改颜色
		0-1的透明度
		获取到 滚动的距离
		滚动的距离 /导航栏  0-1的浮点数
		滚动的距离 大于导航栏 >1  如果透明度 >1 变为1

		通过js  修改 顶部通栏的 透明度即可
			为了保证 子元素 能够正常显示 rgba()  hsla();

*/
function headerScroll(){
	//1. 获取一些 必须要知道的 参数
	/*
		导航栏的高度
		顶部的通栏 (为了在 onscroll 事件中 使用 避免 一只获取 造成的 性能浪费(很小))
	*/
	// 距离 顶部的 高度
	// console.log('offsetTop:'+document.querySelector('.jd_nav').offsetTop);
	// 元素自身的 高度
	// console.log('offsetHeight:'+document.querySelector('.jd_nav').offsetHeight);

	// 获取 导航栏
	var navDom = document.querySelector('.jd_nav');
	//  希望获取的是 从顶部 到 导航栏 底部的 距离
	var maxDistance = navDom.offsetTop + navDom.offsetHeight;
	// 获取 顶部的通栏
	// 
	var headerDom = document.querySelector('.jd_header');

	// 2.注册 onscroll 事件 注册给谁
	/*
		
	*/
	window.onscroll = function(){

	
		//var scrollDistance = window.document.body.scrollTop;
		// console.log('123');
		//  获取 滚动的距离 body 是通过 document 点出来的
		// 计算一个 0-1的百分数
		var scrollDistance = document.documentElement.scrollTop;
		// 如果 超过了1 没有意义了 所以 还原为1
		var person = scrollDistance/maxDistance;
		if(person>1){
			person=1;
		}
		// 设置 顶部通栏的透明度
		headerDom.style.backgroundColor = 'rgba(201,21,35,'+person+')'
	}
}

// 倒计时方法
/*
	定义一个 倒计时的 总时间
	获取 想要修改的 li标签

	开启定时器
		判断 是否时间没有了
		递减时间
		修改 对应标签的显示
*/
function cutDownTime() {
	// 定义 总时间 写时间时 建议 这样写
	var totalHour = 3;
		totalSec = totalHour*60*60;
		var liArr = document.querySelectorAll('.main_content:nth-child(1) .content_top li');
		//console.log(liArr);
	var time = setInterval(function(){
		//清楚定时器
		if(totalSec<=0){
			clearInterval(time);
			alert("活动结束啦，请留意下次活动!");
			return;
		}

		totalSec--;

		var hour = Math.floor(totalSec/3600);
		var min = Math.floor((totalSec%3600)/60);
		var second = totalSec%60;
		//console.log(second);
		
		liArr[0].innerHTML = Math.floor(hour/10);
		liArr[1].innerHTML = hour%10;

		liArr[3].innerHTML = Math.floor(min/10);
		liArr[4].innerHTML = min%10;

		liArr[6].innerHTML = Math.floor(second/10);
		liArr[7].innerHTML = second%10;

	},1000);
}
function banner(){//初始版，有bug
	//获取屏幕宽度
	var width = document.body.offsetWidth;
	//获取轮播图的ul
	var moveUl = document.querySelector('.banner_images');

	//多度动画
	moveUl.style.transition = 'all 03';
	//获取索引li标签
	var indexLiArr = document.querySelectorAll('.banner_index li');

	//定义index记录 当前的索引值
	var index = 1;

	//开启定时器
	var timeld = setInterval(function(){
		index++;
		if(index>9){
			index = 1;
			//关闭过度
			moveUl.style.transition = 'none';
		}
		moveUl.style.transform = 'translateX('+index*width*-1+'px)';

		for(var i=0;i<indexLiArr.length;i++){
			indexLiArr[i].className = ''; 
		}
		indexLiArr[index-1].className = 'current';

	},1000)
}

//定时器
function banner_01(){
	var width = document.body.offsetWidth;
	var moveUl = document.querySelector('.banner_images');
	var indexLiArr = document.querySelectorAll('.banner_index li');
	var index = 1;
	var i = moveUl.offsetWidth;
	console.log('答应'+moveUl+i);
	var startTransition = function(){
		moveUl.style.transition = 'all .3s';
	}
	var endTransition = function(){
		moveUl.style.transition = '';
	}
	var moveTransform = function(){
		moveUl.style.transform = 'translateX('+index*width*-1+'px)';
	}

	var timeId = setInterval(function(){
		index++;
		startTransition();
		moveTransform();
	},2000);
	moveUl.addEventListener('webkitTransitionEnd',function () {
		if(index>8){
			index = 1;
			endTransition();
			moveTransform();
		}else if(index<1){
			index = 8;
			endTransition();
			moveTransform();
		}
		for(var i=0;i<indexLiArr.length;i++){
			indexLiArr[i].className = '';
		}
		indexLiArr[index-1].className = 'current';
	})
	var startX = 0;
	var moveX = 0;
	var distance = 0;
	moveUl.addEventListener('touchstart',function(event){
		//关闭定时器
		clearInterval(timeId);
		endTransition();
		startX = event.touches[0].clientX;
	})
	moveUl.addEventListener('touchmove',function(event){
		moveX = event.touches[0].clientX-startX;
		moveUl.style.transform = 'translateX('+(moveX+index*-1*width)+'px)';
	})
	moveUl.addEventListener('touchend',function(event){
		//定义最大偏移值
		var maxDistance = width/3;

		if(Math.abs(moveX)>maxDistance){
			//判读到底是往左走 还是往右走
			if(moveX>0){
				 index--;
			}else{
				index++;
			}
			startTransition();
			moveTransform();
		}else{
			startTransition();
			moveTransform();
		}
		//手指离开 开启定时器
		timeId = setInterval(function(){
		index++;
		startTransition();
		moveTransform();
	},2000);
	})

}