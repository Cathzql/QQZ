
$(function(){
	$('#dowebok').fullpage({
		
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage', '8thPage'],
		menu: '#menu',
		controlArrows: false,
		scrollingSpeed:400,
		slidesNavigation:true,
		slidesNavPositon:"bottom",
		afterLoad: function(anchorLink, index){
		 	
		 	if(index!=1){
			
				$("#tNav").animate({
					"height": "70px",
				},"slow")
				$("#tNav ul li").animate({
					"fontSize": "16px",
				},"slow")
				$(".phone span").animate({
					"fontSize": "16px"	
				},"slow")
				$("#tNav ul").animate({
					"marginLeft": "40px"	
				},"slow")
		 	}

		 	if(index == 1){
			
			$("#tNav").animate({
				"height": "74px",
			},"slow")
			$("#tNav ul li").animate({
				"fontSize": "20px"	
			},"slow")
			$(".phone span").animate({
					"fontSize": "24px"	
				},"slow")
			$("#tNav ul").animate({
					"marginLeft": "0px"	
				},"slow")
		 }
		},
		
	});
		setInterval(function(){
	        $.fn.fullpage.moveSlideRight();
	    }, 5000)



	
});

// 头顶nav
var page = 0
$("#menu li").on("mouseover",function(){
	page = $(this).index();
	$("#topOne").css({
		"left": parseInt($("#menu li").css("width"))*page
	})
})
$("#menu li").on("mouseout",function(){
	var X = $(".active").position();
	$("#topOne").css({
		"left": X.left
	})
})





// 关于的文章轮播
var now = 0;
$("#aList li").on("click",function(){

	$(this).addClass("acList").siblings().removeClass("acList");
	now = $(this).index();
	
	$("#bgOne").css({
		"top": 42*now
	});
	$("#abInfo").css({
		"left": -480*now
	})
	
});
var timer1 = setInterval(function(){
	now++;
	if(now == $("#abInfo div").size()){
		now = 1;
		$("#abInfo").css({
			"left": 0
		})
	}
		
		$("#aList li").eq(now%3).addClass("acList").siblings().removeClass("acList");
		$("#abInfo").stop().animate({
			"left": -480*now
		})
		if(now == 3){
			$("#bgOne").css({
			"top": 0
		})
		}else{
			$("#bgOne").stop().animate({
			"top" : 42*now
		});
		}
},3000)


// 合作方块
$("#coop").on("mouseenter mouseleave",function(e){
	$("#one").toggle()
});
$("#coop li").on("mouseover",function(e){
	var pos = $(this).position();
	$("#one").css({
		'left': pos.left,
		'top' : pos.top
	})
});

//旁边导航条
var onOff = true;
$("#switch").on('click',function(){
	if(onOff){
		$("#switch").css({
			'background-position':'-32px -640px'
		});
		$("#icons").css({
			'right': -50
		})
		return onOff = !onOff;
	}else{
		$("#switch").css({
			'background-position':'0px -640px'
		});
		$("#icons").css({
			'right': 0
		})
		return onOff = !onOff;
	}
})

$("#up").on('click',function(){
	$.fn.fullpage.moveSectionUp();
})
$("#down").on('click',function(){
	$.fn.fullpage.moveSectionDown();
})



