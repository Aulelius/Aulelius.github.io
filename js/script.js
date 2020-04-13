showsection();
$(window).on('scroll', showsection);
$('button').on('click', function(){
	if(this.id == 'about-btn')$('html').animate({scrollTop:$('.about').position().top}, 1000);
    if(this.id == 'contact-btn')$('html').animate({scrollTop:$('.contact').position().top}, 1000);
    if(this.id == 'board-btn')$('html').animate({scrollTop:$('.board').position().top}, 1000);
    if(this.id == 'main-btn')$('html').animate({scrollTop:$('.header').position().top}, 1000);
});
function showsection(){
	$('.vertical-center').each(function(){
	if($(window).scrollTop()>=$(this).parent().position().top) {
	$(this).animate({opacity: 1}, 1000);
	$(this).animate({top: 0}, 1000);	
	}
	});
	if($(window).scrollTop() < $('.about').position().top)$('.navbar .menu-right li button').css('color', 'white');
    else {
        $('.navbar .menu-right li button').css('color', '#4a4a4a');
        setTimeout(function(){
            $('.bar').each(function(){
               $(this).find('.inner-bar').animate({width: $(this).find('span').text()}, 1000);
            });
        }, 2000);
    }
}


