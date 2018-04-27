window.onload = function(){
	
	left_scroll();

	}

function left_scroll(moveUl){ 
	//获取移动的Ul
	var moveUl = document.querySelector('.main_left ul');

	//ul父盒子的高度
	var parentHeight = document.querySelector('.main_left').offsetHeight;
	
	var headerHeight = document.querySelector('.header').offsetHeight;

	console.log(headerHeight)
	//ul的高度
	var ulHeight = moveUl.offsetHeight;
	
	//计算移动的距离
	var minDistance = parentHeight - ulHeight - headerHeight;

	var deleDistance = 150;
	var maxDistance = 0;

	var starY = 0,
		moveY = 0,
		endY = 0;

	moveUl.addEventListener('touchstart',function(event){
		startY = event.touches[0].clientY;
	})
	moveUl.addEventListener('touchmove',function(event){
		moveY = event.touches[0].clientY - startY;
		//判断 是够满足移动的条件
		if((moveY+endY)>(maxDistance+deleDistance)){
			moveY = 0 ;
			endY = maxDistance+deleDistance;	
		}else if((moveY+endY)<(minDistance - deleDistance)){
			moveY = 0;
			endY  = minDistance-deleDistance;
		}
		moveUl.style.transition = '';
		moveUl.style.transform = 'translateY('+(moveY+endY)+'px)';
	})
	moveUl.addEventListener('touchend',function(event){
		endY += moveY;

		if(endY >maxDistance){
			endY = maxDistance;
			moveUl.style.transition = 'all .3s';
			moveUl.style.transform = 'translateY('+maxDistance+'px)';
		}else if(endY<minDistance){
			endY = minDistance;
			moveUl.style.transition = 'all .3s';
			moveUl.style.transform = 'translateY('+minDistance+'px)';
		}
	})




	//获取当前按点击的li标签的 索引值 每一个li标签的高度
	var liHeight = document.querySelector('.main_left ul li').offsetHeight;

	var liArr = document.querySelectorAll('.main_left ul li');

	console.log(moveUl);

	for (var i = 0; i < liArr.length; i++) {
		liArr[i].dataset['index'] = i;
	}
	//点击事件
	touchClick(moveUl,function(e){
		console.log('触发了点击事件');
		console.log(e);

		for (var i = 0; i < liArr.length; i++) {
			liArr[i].className = '';
		}
		e.target.parentNode.className = 'current';

		var currentIndex = e.target.parentNode.dataset['index'];

		moveIndex = currentIndex*liHeight*-1;

		if(moveIndex>maxDistance){
			moveIndex = maxDistance;
		}else if(moveIndex<minDistance){
			moveIndex = minDistance;
		}
		moveUl.style.transition = 'all .3s';
		moveUl.style.transform = 'translateY('+moveIndex+'px)';

	})

	}