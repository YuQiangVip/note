;function($){
	$.fn.extend({
		sendcode:function(){
			
		}
	});
}
//$('#send_codes').click(resetCode)
////发送验证码后的倒计时
//function resetCode() {
//  $('#time').empty();
//  $('#send_codes').hide();
//  // $('#wait_second').html('59');
//  $('#time').show();
//  var second = 60;
//  $('#time').html(second + 's后重发');
//  var timer = null;
//  timer = setInterval(function() {
//      second -= 1;
//      if (second > 0) {
//          $('#time').html(second + 's后重发');
//      } else {
//          clearInterval(timer);
//          $('#time').hide();
//          $('#send_codes').show();
//      }
//  }, 1000);
//}