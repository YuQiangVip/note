//图片上传
//APP端
function resultapp(id) {
	var btnArray = [{
		title: "拍照"
	}, {
		title: "从相册选择"
	}];
	plus.nativeUI.actionSheet({
		title: "选择照片",
		cancel: "取消",
		buttons: btnArray
	}, function(e) {
		var index = e.index;
		switch(index) {
			case 0:
				break;
			case 1:
				var cmr = plus.camera.getCamera();
				cmr.captureImage(function(path) {
					var dd = document.getElementById("imagesnum" + id);
					dd.innerHTML = "";
					dd.innerHTML = '<img src="file://' + plus.io.convertLocalFileSystemURL(path) + '" alt="" width="140px" height="140px" id="img"/><div class="delete_proof" onclick="closeimg(' + id + ')"></div>';;
					//var arr = input.value.split('\\'); //分割图片路径  
					var a = id + 1;
					if(document.getElementById("imagesnum" + a).style != null) {
						document.getElementById("imagesnum" + a).style.display = "block";
					}
				}, function(err) {});
				break;
			case 2:
				// 相册多选
				plus.gallery.pick(function(e) { //e.files.length选择的图片数量
					if(e.files.length > 3) {
						mui.toast("图片数量不能多于三张");
						return;
					}
					for(var i in e.files) {
						var b = id + i * 1;
						var dd = document.getElementById("imagesnum" + b);
						dd.innerHTML = "";
						dd.innerHTML = '<img src="' + e.files[i] + '" alt="" width="140px" height="140px" id="img"/><div class="delete_proof" onclick="closeimg(' + id + ')"></div>'; //显示图片  
						var a = b + 1;
						if(document.getElementById("imagesnum" + a).style != null) {
							document.getElementById("imagesnum" + a).style.display = "block";
						}
						alert(e.files[i])
					}
				}, function(e) {
					//mui.toast("取消选择图片");
				}, {
					filter: "image",
					multiple: true
				});
				//相册单选
				/*plus.gallery.pick(function(path) {
					var dd = document.getElementById("imagesnum"+id);
					dd.innerHTML = "";
					dd.innerHTML = '<img src="' + path + '" alt="" width="140px" height="140px" id="img"/>'; //显示图片  
					var a = id + 1;
					if(document.getElementById("imagesnum" + a).style != null) {
						document.getElementById("imagesnum" + a).style.display = "block";
					}
				}, function(err) {}, null);*/
				break;
		}
	});
}

//H5浏览器端--单张图片上传
/*var result = document.getElementById("result");
var input = document.getElementById("file_input");
if(typeof FileReader === 'undefined') {
	result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
	input.setAttribute('disabled', 'disabled');
} else {
	input.addEventListener('change', readFile, false);
}
function onFile() {
	document.getElementById('doc').click(); //打开<input type="file" id="file_input" />  
}
function readFile() {
	var file = this.files[0];
	var fsize = parseInt((file.size) / 1024); //计算图片大小，默认是B，转换成KB  
	if(!/image\/\w+/.test(file.type)) {
		alert("请确保文件为图像类型");
		return false;
	}
	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function(e) {
		inImgs.innerHTML = '<img src="' + this.result + '" alt=""/>'; //显示图片  
		var arr = input.value.split('\\'); //分割图片路径  
		document.getElementById('result').style.display = "block";
		//取数组最后部分 - 图片名字.jpg  document.getElementById('txtImgSrc').innerHTML = arr[arr.length - 1]; 
		//显示图片名字加图片大小  document.getElementById('txtImgSrc').innerHTML = arr[arr.length - 1] + "<br/>(" + fsize + "kb)"; 

	}
}*/

//多图片上传预览功能
var imagesnum = 0;

function onFile(id) {
	imagesnum = id;
	document.getElementById('doc').click(); //打开<input type="file" id="file_input" />  
}

function setImagePreviews(avalue) {
	var docObj = document.getElementById("doc");
	var fileList = docObj.files;
	for(var i = 0; i < fileList.length; i++) {
		var b = imagesnum + i;
		var dd = document.getElementById("inImgs" + b);
		dd.innerHTML = "";
		dd.innerHTML = '<img id="img' + b + '" alt=""/><div class="delete_proof" onclick="closeimg(' + b + ')"></div>';
		var imgObjPreview = document.getElementById("img" + b);
		if(docObj.files && docObj.files[i]) {
			//火狐下，直接设img属性
			//imgObjPreview.style.display = 'block';
			//imgObjPreview.style.width = '30px';
			//imgObjPreview.style.height = '30px';
			//imgObjPreview.style.margin = '5px';
			//imgObjPreview.style.borderRadius = '5px';
			//imgObjPreview.style.float = 'left';
			//imgObjPreview.src = docObj.files[0].getAsDataURL();
			imgObjPreview.src = window.URL.createObjectURL(docObj.files[i]);
		} else {
			//IE下，使用滤镜
			docObj.select();
			var imgSrc = document.selection.createRange().text;
			var localImagId = document.getElementById("img" + i);
			//必须设置初始大小
			localImagId.style.width = "160px";
			localImagId.style.height = "130px";
			imgObjPreview.style.margin = '5px';
			imgObjPreview.style.borderRadius = '5px';
			//图片异常的捕捉，防止用户修改后缀来伪造图片
			try {
				localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
				localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
			} catch(e) {
				alert("您上传的图片格式不正确，请重新选择!");
				return false;
			}
			imgObjPreview.style.display = 'none';
			document.selection.empty();
		}
		var a = b + 1;
		if(a < 3) {
			document.getElementById("inImgs" + a).style.display = "block";
		}
	}
	return true;
}