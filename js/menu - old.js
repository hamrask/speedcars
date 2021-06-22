//MENU RIGHT SCRIPTS



$('.menu_btn_1').click(function (event, handler) {
	event.stopPropagation();
	if ($('.main_menu_slide').hasClass('main_menu_active')) {
		$('.menu_btn_2').click();
	}
	$('.right_slide_menu').toggleClass('menu_slide_right');
	$(".banner").toggleClass('slide_left');
	$(".header").toggleClass('slide_left');
	$(".Header_fixed").toggleClass('slide_left');
	$(".menu_btn_1").toggleClass('close_btn');
	$("body").toggleClass('fixed_height');
	$(".top_sectIoN").toggleClass('banner_overlay');
	$(".page").toggleClass('Page_slide_left');
		



});
$('.right_slide_menu a').click(function () {

	if ($('.main_menu_slide').hasClass('main_menu_active')) {
		$('.menu_btn_2').click();
	}
	$('.right_slide_menu').toggleClass('menu_slide_right');
	$(".banner").toggleClass('slide_left');
	$(".header").toggleClass('slide_left');
	$(".Header_fixed").toggleClass('slide_left');
	$(".menu_btn_1").toggleClass('close_btn');
	$("body").toggleClass('fixed_height');
	$(".top_sectIoN").toggleClass('banner_overlay');
	$(".page").toggleClass('Page_slide_left');
	


});


//MENU RIGHT SCRIPTS

$('body').click(function () {
	$('.main_menu_slide').removeClass('main_menu_active');


});

// MAIN MENU SCRIPTS
$('.menu_btn_2').click(function (event, handler) {

	event.stopPropagation();

	if ($('.right_slide_menu').hasClass('menu_slide_right'))
		$('.menu_btn_1').click();
      $('.Header_fixed').toggleClass('Header_fixed-transparent');
	$('.main_menu_slide').toggleClass('main_menu_active');
	



});

//HOVER EFFECT
$('.main_menu_Innner ul li .animation_fade').hover(function () {

	$('.main_menu_Innner ul li .animation_fade').not(this).toggleClass('opacity_MInus');

});



$('.has_sub').hover(function () {


	$('.menu_sub .animation_fade').removeClass('opacity_MInus');

});

//HOVER EFFECT






//SUBMENU HANDLE FOR MOBILE ONLY   - In DESKTOP SUBMENU HANDLE WITH CSS (no js for Desktop)

if (document.documentElement.clientWidth < 980) {

	$('.has_sub').click(function (event, handler) {
		event.stopPropagation();

		var thismenu = $(this).find('.menu_sub');
		$('.main_menu_Innner').find('.subMenu_open').not(thismenu).removeClass('subMenu_open');
		$(this).find('.menu_sub').toggleClass('subMenu_open');

	});


}

//SUBMENU HANDLE FOR MOBILE ONLY  ENDS  - In DESKTOP SUBMENU HANDLE WITH CSS (no js for Desktop)


// MAIN MENU SCRIPTS
