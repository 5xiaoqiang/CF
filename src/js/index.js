require(['jquery'],function($){
	// console.log($);
	var customization = document.querySelector('.customization');
	var customizationOne = customization.querySelector('div');
	var customization1 = document.querySelector('.customization1');
	var customizationTwo = customization1.querySelector('div');
	console.log($(customization));
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














})