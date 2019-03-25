$(function handleCarouselClicks(){
	$('.carousel-button').on('click', function(event) {
        // console.log('clicked on a carousel!');
        // const carouselMain = $('#flex-first');
        const pageCode = $(this).attr('class');
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
        }
    });
});

// $(handleCarouselClicks);