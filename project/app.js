var express = require('express')                   //加载模块
var bodyParser = require('body-parser')            //处理post请求
var fs = require('fs')                             //处理文件
var multer = require('multer')                     //处理文件上传
var cookieParser = require('cookie-parser')        //处理cookie
var app = express()                                //创建服务器对象
app.use(express.static('www'))                     //配置静态文件
app.use(cookieParser())                            //解析cookie
app.use(bodyParser.urlencoded({extended:true}))    //解析post请求参数
var storage = multer.diskStorage({	               //配置储存上传文件的storage
	destination:'www/uploads',	
	filename:function(req,res,callback){
		var petname = req.cookies.petname
		callback('',petname + '.jpg');		
	}	
})
var upload = multer({storage})
/*-----------------------------------------注册的接口------------------------------------*/
app.post('/user/register',function(req,res){	
	fs.exists('users',function(exi){                 //判断有没有装用户的文件
		if(exi){                                     //文件存在 我们直接写入数据			
			writeFile()			
		}
		else{	                                     //文件不存在，我们先创建文件，然后再写入数据					  
			fs.mkdir('users',function(err){
				if(err){                             //创建文件失败					
					res.status(200).json({code:0,message:'系统创建文件夹失败'})					
				}else{                               //创建成功，写入数据					
				writeFile()				
				}				
			})
		}		
	})	
	function writeFile(){                                 //封装一个将用户信息写入本地的方法		
		var filename = 'users/'+req.body.petname + '.txt';//判断用户是否已经注册过		
		fs.exists(filename,function(exi){			
			if(exi){                                      //用户存在，被注册				
				res.status(200).json({code:1,message:'用户存在，请重新注册'})				
			}else{                                        //用户不存在,进行注			
                req.body.ip =req.ip;                      //在req.body中加入ip和time属性	
                req.body.time = new Date();                            
                fs.writeFile(filename,JSON.stringify(req.body),function(err){//将未注册，把用户信息写入到本地
                	if(err){                              //写入失败               		
                		res.status(200).json({code:2,message:'系统写入文件失败'})               		
                	}else{                                //保存成功               		
                		res.status(200).json({code:3,message:'注册成功'})               		
                	}              	
                })
			}			
		})		
	}	
})

/*--------------------------------------------登录接口----------------------------*/

app.post('/user/login',function(req,res){                //根据req.body.petname 去users文件夹中匹配文件	
	var fileName = 'users/'+req.body.petname+'.txt'      //查看uesrs文件夹中是否有当前用户	
	fs.exists(fileName,function(exi){
		if(exi){                                         //文件存在
	    fs.readFile(fileName,function(err,data){         //读取fileName 路径文件 ,进行密码比较
	   		if(err){                                     //系统读取失败  		
	   			res.status(200).json({code:1,message:'系统错误，读取文件失败'})   		
	   		}else{                                       //读取成功，进行密码比较		   		
	   			var user = JSON.parse(data)
		   		if(req.body.password == user.password){  			
		   			var expires = new Date();  			
		   			expires.setMonth(expires.getMonth() + 1)
		   					
		   			res.cookie('petname',req.body.petname,{expires}) //设置保存时间  保存的名字 保存的值 过期时间 			
		   			res.status(200).json({code:3,message:'登录成功'})
		   		}else{                                               //密码错误，登录失败   			
		   			res.status(200).json({code:2,message:'密码错误，请重新输入'})
		   		}   		
		   	}  	
	   	})
		}else{                                                       //文件不存在		
			res.status(200).json({code:0,message:'用户不存在，请先去注册'})		
		}		
	})	
})
app.listen(2000, function(){
	console.log('服务器开启')	
})
