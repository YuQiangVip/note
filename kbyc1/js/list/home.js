
var gallery = mui('.mui-slider');
    gallery.slider({
    interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
     }); 
   $(document).ready(function () {
      var mySwiper = new Swiper('.swiper-container',{
       loop : true,
       slidesPerView : 'auto',
       loopedSlides :6,
       autoplay: 3000,
       loop : true,
      });
     })   
     $(document).ready(function () {
            var mySwiper = new Swiper('.swiper-container2',{
       loop : true,
       slidesPerView : 'auto',
       loopedSlides :4,
       autoplay: 4000,
       loop : true,
      });
      })
       	
       	
  	
       	
      //点击跳转页面
$(function(){	
//	$("#body_yhq").on("tap",function(){		
//	   mui.openWindow({
//     url:'../home/Coupon_Center.html', 
//     id:'Coupon_Center',      
//       waiting:{
//              autoShow:false
//          }
//	})
//	});
//	$(".more").on("tap",function(){		
//	   mui.openWindow({
//     url:'../home/Classified_list.html', 
//     id:'Classified_list',
//      waiting:{
//              autoShow:false
//          }
//	})
//	});
//	$("#buy_sale").on("tap",function(){		
//	   mui.openWindow({
//     url:'../home/Flash_sale.html', 
//     id:'Flash_sale' ,
//       waiting:{
//              autoShow:false
//          }
//		})
//	});
//	$("#input_text").on("tap",function(){		
//	   mui.openWindow({
//     url:'../home/my_car.html', 
//     id:'my_car' ,
//       waiting:{
//              autoShow:false
//          }
//	})
//	});
//	
	
//	  $(".Recorde").on("tap",function(){		
//	   mui.openWindow({
//     url:'../home/Commodity_details.html', 
//     id:'Commodity_details',
//       waiting:{
//              autoShow:false
//          }     	
//	})
//	});
//	
//	
//	  $("#hander2_left").on("tap",function(){		
//	   mui.openWindow({
//     url:'../home/City.html', 
//     id:'City' ,
//       waiting:{
//              autoShow:false
//          }    	
//	})
//	});
//	
// $("#hander_right").on("tap",function(){		
//	   mui.openWindow({
//     url:'../home/City.html', 
//     id:'City' ,
//       waiting:{
//              autoShow:false
//          }    	
//	})
//	});
//	 $(".service").on("tap",function(){		
//	   mui.openWindow({
//     url:'../home/Service.html', 
//     id:'Service'  ,
//       waiting:{
//              autoShow:false
//          }   	
//	})
//	});
//  $("#body_djq").on("tap",function(){		
//	   mui.openWindow({
//     url:'../home/Move_Topic.html', 
//     id:'Move_Topic' ,
//       waiting:{
//              autoShow:false
//          }    	
//	})
//	});
	
//	  $(".Recommend_top").on("tap",function(){		
//	   mui.openWindow({
//     url:'../home/zepin/indexesList.html', 
//     id:'indexesList' ,
//       waiting:{
//              autoShow:false
//          }    	
//	})
//	});
	
	
	
	
	
	
	//顶部搜索框聚焦失焦事件
	$change=function(i,l){
		$(i).focus(function(){		
	    $(l).css({'left':'20%'}); 
	    $(i).attr('placeholder',"")
	})
    $(i).blur(function(){ 
    	$(l).css({'left':'35%'}); 
	    $(i).attr('placeholder',"请输入商品名称") 
	    $(i).val("")
     })		
	}
	
   $change("#hander2_search","#t");

		$("#hander_search").focus(function(){		
	    $("#g").css({'left':'2%'}); 	 
	    $("#hander2_search ").attr('placeholder'," ")
	  });	
      $("#hander_search").blur(function(){ 
    	$("#g").css({'left':'20%'}); 
	    $("#hander2_search").attr('placeholder',"请输入商品名称") 
	     $("#hander2_search").val("")
      }); 
      
      
      
      })
	

	
	
  window.onscroll = function() {
   var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    
    if(scrollTop>45){
    	
//  	console.log(scrollTop)
    	$("#header").show().css({'position':'fixed','top':'0'});
    }else{
    	$("#header").hide();
     }    	          
    },
  

 
 
	


       	
       	
       	
       	
    $(function(){
   	  	
   	  	  var endtime = new Date("2017/8/01");
            setInterval(function () {
            var nowtime = new Date();
            var time = endtime - nowtime;  
            
             if(time <=0){            	
             var hour = 0;
             var minute = 0;
             var seconds = 0;
             
             }else{
             
             var hour = parseInt(time / 1000 / 60 / 60 );
             var minute = parseInt(time / 1000 / 60 % 60);
             var seconds = parseInt(time / 1000 % 60);
              $('.htime').html( hour );
              $('.mtime').html( minute );
              $('.stime').html( seconds);
             }
             }, 1000);
             
             
             
             
          
   	   })

     
       	
//  //返回顶部   	
//
//function scrollTo(ele, speed){
//	if(!speed) speed = 300;
//	if(!ele){
//		$("html,body").animate({scrollTop:0},speed);
//	}else{
//		if(ele.length>0) $("html,body").animate({scrollTop:$(ele).offset().top},speed);
//	}
//	return false;
//}