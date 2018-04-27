/**
 * 
 */


$(function () {

    //加载城市事件
    $('.container').show();
//选择城市 start
    $('body').on('click', '.city-list p', function () {
        alert($(this).html())
    });
    //点击索引查询城市
    $('body').on('click', '.letter a', function () {
    	  
        var s = $(this).html();
        console.log(s);
      $('html,body').animate({scrollTop: $('#' + s + '1').offset().top+'px'}, 300);//点击最后一个滚到#号
      $(window).scrollTop($('#' + s + '1').offset().top);        
       $("#showLetter span").html(s);
       $("#showLetter").show().delay(500).hide(0);
       
    

      
    });
     //中间的标记显示
     $('body').on('onMouse', '.showLetter span', function () {
        $("#showLetter").show().delay(500).hide(0);
    });
    
    
    
   
    
    $("#city_search").focus(function(){		
	    $("#s").css({'left':'5%'}); 	 
	    $("#city_search").attr('placeholder'," ")
	  });	
      $("#city_search").blur(function(){ 
    	$("#s").css({'left':'20%'}); 
	    $("#city_search").attr('placeholder',"输入城市名称或字母查询") 
	     $("#city_search").val("")
      }); 
    
    
    
  
    
 
    

})



  


