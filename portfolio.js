$(function handleCarouselClicks(){
	$('.carousel-button').on('click', function(event) {
        const pageCode = $(this).attr('class');
        $(this).css("background-color", "#dcdcdc");
        const otherButtons = $('.carousel-button').not($(this));
        otherButtons.css("background-color", "#129490");
        if(pageCode === 'carousel-button 0'){
            $('#flex-first').removeClass('hidden');
            const otherPages = $('.js-page').not($('#flex-first'));
            otherPages.addClass('hidden');
        } else if (pageCode === 'carousel-button 1'){
            $('#flex-piece-01').removeClass('hidden');
            const otherPages = $('.js-page').not($('#flex-piece-01'));
            otherPages.addClass('hidden');
        } else if (pageCode === 'carousel-button 2'){
            $('#flex-piece-02').removeClass('hidden');
            const otherPages = $('.js-page').not($('#flex-piece-02'));
            otherPages.addClass('hidden');
        } else if (pageCode === 'carousel-button 3'){
            $('#flex-piece-03').removeClass('hidden');
            const otherPages = $('.js-page').not($('#flex-piece-03'));
            otherPages.addClass('hidden');
        } else if (pageCode === 'carousel-button 4'){
            $('#flex-piece-04').removeClass('hidden');
            const otherPages = $('.js-page').not($('#flex-piece-04'));
            otherPages.addClass('hidden');
        }
    });
});


// $(handleCarouselClicks);