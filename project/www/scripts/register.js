$('#goBack').click(function(){		
		history.go(-1);		
})	
$('#home').click(function(){		
	location.href = 'index.html';		
})
//提交表单
$('form').submit(function(event){	
	event.preventDefault();                                //阻止默认提交事件	
	var password =$('input[type=password]').map(function(){//比较密码和确认密码是否相同		
		return $(this).val();	                           //map:遍历出两个密码输入框中的内容
	})	
	if(password[0] != password[1]){		
		$('.modal-body').text('两次输入密码不一样');		
		$('#myModal').modal('show');
		return;		
	}	
	var a = hex_md5($('input[type=password]').val());    	
	$('input[type=hidden]').val(a); 			
	var data =$(this).serialize();                               //用提交表单的元素值，编译成字符串	
	$.post('/user/register',data,function(resData){		
		$('.modal-body').text(resData.message);	                 //提示用户的注册结果	
		$('#myModal').modal('show').on('hide.bs.modal',function(){//'hide.bs.modal'模态消失后我们要做的操作		
			if(resData.code == 3){
				location.href= 'login.html';
			}
		})	
	})	
})
