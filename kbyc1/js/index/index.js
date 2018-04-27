


   
 //退出程序
   (function($, doc) {
				$.plusReady(function() {
					var backButtonPress = 0;
					$.back = function(event) {
						backButtonPress++;
						if(backButtonPress > 1) {
							var win = plus.webview.getWebviewById('login.html');
							if(win) {
								window.setTimeout(function() {
									win.close();
								}, 0);
							}
							plus.runtime.quit();
						} else {
							plus.nativeUI.toast('再按一次退出应用');
						}
						setTimeout(function() {
							backButtonPress = 0;
						}, 1000);
						return false;
					};
				});
			}(mui, document));

    
    //底部栏切换
 $(function(){
 	
 		var imgs = ['img/checked/index.png','img/checked/store.png','img/checked/shopping.png',
		"img/checked/my.png"];								 
		$("#footer").on("tap", "a",function(){
			var i=$(this).index();
			$(this).find(".a-img").attr('src',imgs[i]);					
						
		})
 	
 	
 });

   




	
	
	





