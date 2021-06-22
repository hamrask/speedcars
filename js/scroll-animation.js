	
		
$(document).ready(function(){
	
	
	var controller = new ScrollMagic.Controller();
	
	$('.fade_up').each(function(){
		
			var ourScene = new ScrollMagic.Scene({
		triggerElement:this,
		
		
		
		
	})
	
	.setClassToggle(this, 'fade_up_on')

	.addTo(controller);
		
		
		
		
		
	});
	
	
	
	
		var controller = new ScrollMagic.Controller();
	
	$('.simple_fade_right').each(function(){
		
			var ourScene = new ScrollMagic.Scene({
		triggerElement:this,
		
		
		
	})
	
	.setClassToggle(this, 'simple_fade_right_on')

	.addTo(controller);
		
		
		
		
		
	});
	
	
	var controller = new ScrollMagic.Controller();
	
	$('.simple_fade').each(function(){
		
			var ourScene = new ScrollMagic.Scene({
		triggerElement:this,
	
		
		
		
	})
	
	.setClassToggle(this, 'simple_fade_on')

	
	
	.addTo(controller);
		
		
		
		
		
	});

	
	
	
	
});






