// --- GLOBAL VARIABLES --- //
var $window = $(window);
var classActive = 'is-active';
var classInActive = 'is-inactive';
var class_disabled = 'is-disabled';
var classHover = 'is-hovered';

// --- COMPONENTS, PARTS --- //
$( document ).ready( function(){
	// ---  COMPONENTS --- //
	fn_components_products();
});

//====================================================
//  Function: Products list
//====================================================
function fn_components_products(){
	if ($('.js-products-group').length){
		$('.js-product-trigger').click(function (e) {
			var inst = $(this);
			var productsBlock = inst.closest( '.js-products-group' )

			if (inst.hasClass( classActive )) {
				$( '.js-product-trigger' ).removeClass( classActive ).removeClass( classInActive );
			} else {
				$( '.js-product-trigger' ).removeClass( classActive ).removeClass( classInActive );
				$( '.js-product-trigger' ).addClass( classInActive );
				inst.removeClass( classInActive ).addClass( classActive );

				if ($window.width() < 992){
					$( 'html, body' ).stop().animate({
						scrollTop: $( inst ).offset().top
					});
				}
			}
		});


		$('.js-product-trigger').hover(function (e) {
			var inst = $(this);
			var productsBlock = inst.closest( '.js-products-group' )

			if (!inst.hasClass( classHover ) && !inst.hasClass( classInActive )) {
				$( '.js-product-trigger' ).removeClass( classHover );
				$( '.js-product-trigger' ).addClass( classHover );
				inst.removeClass( classHover );
			}
			return false;
 		}, function() {
			$( '.js-product-trigger').removeClass( classHover );
  		});
	}
}