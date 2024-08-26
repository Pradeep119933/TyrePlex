$(function(){
	$('a.mobile-trigger').on('click', function(){
		$('body').toggleClass('mobile-open');
	})
});	

	$('.Fullmenu-bar .close_nav').on('click', function() {
		$('.Fullmenu-bar').removeClass('full_menu');
		$('body').removeClass('mobile-open');
	})

$(function(){
    $('.dropdown-main').on('click', function(){
        var $currentMenu = $(this).find('.drop-down-menu');
        $('.dropdown-main').not($(this)).find('.drop-down-menu').removeClass('plus-open');        
        $currentMenu.toggleClass('plus-open');
    });
});	

$(function(){
    $('.dropdown-main').on('click', function(){
        var $this = $(this);
        
        if ($this.hasClass('plus-open')) {
            $this.removeClass('plus-open');
        } else {
            $('.dropdown-main').removeClass('plus-open');
            $this.addClass('plus-open');
        }
    });
});


if( $(window).width() < 991 ){
	$(document).click(function(e){
	  if(!$(e.target).is('a.mobile-trigger, a.mobile-trigger *, .Fullmenu-bar, .Fullmenu-bar *, a.mobile-trigger-c, a.mobile-trigger-c * ')){
		$('.Fullmenu-bar').removeClass('full_menu');
		$('body').removeClass('mobile-open');
	  }
	});
};



$(function(){
    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        if(currentScroll > 0) {
            $('header').addClass('sticky-bg');
        } else {
            $('header').removeClass('sticky-bg');
        }
    });

});

