$(document).ready(function() {
	// var bgImage = $('.side-menu');
	// $(bgImage).css({
	// 	height: $(window).height()
	// });
	// $('.body-ctr').css({
	// 	'min-height': $(window).height()*2/3
	// });
	$(document).on("click", "a", function(e){
		$(".side-bar-menu-item").removeClass('active');
		$("div[data-sub-menu-close]").removeClass('active');
		if($(this).attr('data-sub-menu-target')){
			var className = $(this).attr('data-sub-menu-target');
			$(".side-bar-menu-item."+className).addClass('active');
			$("div[data-sub-menu-close]").addClass('active');
		}
	});
	$(document).on('click', 'div[data-sub-menu-close]', function(e){
		$(".side-bar-menu-item").removeClass('active');
		$("div[data-sub-menu-close]").removeClass('active');
	})
});