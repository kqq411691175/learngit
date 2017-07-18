$('#goBack').click(function(){			
			history.go(-1);			
})		
$('#register').click(function(){			
	location.href = 'register.html'
})
//提交数据
$('form').submit(function(event){	
	event.preventDefault();//阻止默认提交事件	
	var a = hex_md5($('input[type=password]').val());    
	$('input[type=hidden]').val(a);
	var data = $(this).serialize();
	$.post('/user/login',data,function(resData){		
		$('.modal-body').text(resData.message);
		$('#myModal').modal('show').on('hide.bs.modal',function(){			
			if(resData.code == 3){				
				location.href = 'index.html';
			}			
		})		
	})	
})
