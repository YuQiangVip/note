//(function($){
//	$.fn.extend({
//		checkbox : function(){
//			 this.each(function(){	
//				var $this = $(this).find('i');
//				if($this.hasClass("icon-checkboxblank")){
//  				$this.parent().siblings("input").prop("checked","checked");
//  			}else{
//  				$this.parent().siblings("input").removeAttr("checked");
//  			}
//  			$(this).on("click",function(){
//					if($this.hasClass("icon-checkboxblank")){
//						$this.parent().siblings("input").removeAttr("checked");
//						$this.removeClass("icon-checkboxblank").addClass("icon-checkbox-copy");
//					}else{
//						$this.parent().siblings("input").prop("checked","checked");
//						$this.removeClass("icon-checkbox-copy").addClass("icon-checkboxblank");
//					}
//				});	
//			});
//		}
//	});	
//})(jQuery);