// require.config({
// 	paths:{
//         'eventie/eventie':'http://jq22.qiniudn.com/masonry-docs.min',
//         'jquery':'https://cdn.bootcss.com/jquery/1.11.2/jquery'
//         // 'swiper':'../js/swiper'
//     },
//     shim:{//用来配置不符合AMD规范的模块
//         'eventie/eventie':{
//             deps:['jquery']//配置依赖文件
//             // exports:'math'
//         }
//     }
// })

require(['jquery'],function($){
	// console.log(pibu);
	var customization = document.querySelector('.customization');
	var customization1 = document.querySelector('.customization1');
	// console.log($(customization));
	$(customization).mouseenter(function(){
		$(this).children().show();
	})
	$(customization).mouseleave(function(){
		$(this).children().hide();
	})
	$(customization1).mouseenter(function(){
		$(this).children().show();
	})
	$(customization1).mouseleave(function(){
		$(this).children().hide();
	})
	var mark = document.querySelectorAll('.pop-mark');
	var inner = document.querySelector('.inner');
	var carousel1 = document.querySelector('.carousel1');
	var detail = document.querySelectorAll('.detail');
	var Masquerade = document.querySelectorAll('.Masquerade');
	var page = document.querySelectorAll('.page li');
	var index = 0;
	lunbo();
	carousel1.onmouseenter = function(){
		clearInterval(timer);
	}
	carousel1.onmouseleave = function(){
		lunbo();
	}
	function lunbo(){
		timer = setInterval(function(){
			for(var i = 0;i< page.length;i++){
				page[i].style.background = '#ccc';
				index == i;	
			}
			inner.style.left = (-1180 * index) +'px';
			page[index].style.background = '#000';
			index++;
			if(index>2){
				index = 0;
			}	
		},2000)
	}	
	for(var i = 0;i<Masquerade.length; i++){
		Masquerade[i].index = i;
		Masquerade[i].onmouseenter = function(){
			mark[this.index].style.display = 'block';
			detail[this.index].style.display = 'none';
		}
		Masquerade[i].onmouseleave = function(){
			mark[this.index].style.display = 'none';
			detail[this.index].style.display = 'block';
		}
	}
	$('.page li').hover(function(){
		index = $(this).index();
        $('.page li').css('background','#ccc');
		$(this).css('background','#000');
		inner.style.left = (-1180 * index) +'px';
	});
	
	
	$(function(){

	            $.getJSON('../json/aa.json', function(data){
					var uls= document.querySelectorAll('#masonry ul');
	                 console.log(data.items);
	                for(var i = 0; i < data.items.length;i++){
	                	// console.log(data.items[i].pc[0].rating);
	                	var li = document.createElement('li');
	                	li.innerHTML = '<a class="yinxiang box" href="'+'http://chufaba.me' + data.items[i].pc[0].url +'" title="" target="_blanket"><div class="img-cnt"><img src="'+ data.items[i].pc[0].poi_category +'" alt=""><p class="photo-num">'+ data.items[i].pc[0].rating+'p' +'</p></div><div class="txt-cnt"><p class="txt">'+ data.items[i].pc[0].desc +'</p></div><div class="note-bottom"><span class="fl"><i class="icon-location"></i>'+ data.items[i].pc[0].poi_name +'</span><span class="fr">'+ data.items[i].pc[0].username +'</span></div></a>';
			            li.children[0].children[0].children[0].onload = function(){
						//判断ul高度,用来存放ul高度
							var ulHeightArr = [];
							for(var j = 0; j < uls.length; j++){
								ulHeightArr.push(uls[j].offsetHeight);
							}
							var minHeight = ulHeightArr[0];
							var minIndex = 0;
							for(var k = 0; k < ulHeightArr.length;k++){
								if(minHeight > ulHeightArr[k]){
									minHeight = ulHeightArr[k];
									minIndex = k;
								}
							}
							uls[minIndex].appendChild(this.parentNode.parentNode.parentNode);

						}
	               }   
	    		});
			 $('.loadMoreNote').click(function(){
			 	$.getJSON('../json/aa.json', function(data){
					var uls= document.querySelectorAll('#masonry ul');
	                 console.log(data.items);
	                for(var i = 0; i < data.items.length;i++){
	                	// console.log(data.items[i].pc[0].rating);
	                	var li = document.createElement('li');
	                	li.innerHTML = '<a class="yinxiang box" href="'+'http://chufaba.me' + data.items[i].pc[0].url +'" title="" target="_blanket"><div class="img-cnt"><img src="'+ data.items[i].pc[0].poi_category +'" alt=""><p class="photo-num">'+ data.items[i].pc[0].rating+'p' +'</p></div><div class="txt-cnt"><p class="txt">'+ data.items[i].pc[0].desc +'</p></div><div class="note-bottom"><span class="fl"><i class="icon-location"></i>'+ data.items[i].pc[0].poi_name +'</span><span class="fr">'+ data.items[i].pc[0].username +'</span></div></a>';
			            li.children[0].children[0].children[0].onload = function(){
						//判断ul高度,用来存放ul高度
							var ulHeightArr = [];
							for(var j = 0; j < uls.length; j++){
								ulHeightArr.push(uls[j].offsetHeight);
							}
							var minHeight = ulHeightArr[0];
							var minIndex = 0;
							for(var k = 0; k < ulHeightArr.length;k++){
								if(minHeight > ulHeightArr[k]){
									minHeight = ulHeightArr[k];
									minIndex = k;
								}
							}
							uls[minIndex].appendChild(this.parentNode.parentNode.parentNode);

						}
	               }   
	    		});
			 })
	});


var deng = document.querySelector('.deng');
var dengluye = document.querySelector('.dengluye');
var guanbi = document.querySelector('.zhanghu h1 i');
deng.onclick = function(){
	dengluye.style.display = 'block';
}
guanbi.onclick = function(){
	dengluye.style.display = 'none';
}








})