function mycarousel_initCallback(carousel) {
    $('.slider-nav a').bind('click', function() {
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
        return false;
    });


};

function mycarousel_itemFirstInCallback(carousel, item, idx, state) {
	$('.slider-nav ul li a').removeClass('active');
	$('.slider-nav ul li a').eq(idx-1).addClass('active');
	
};


$(function(){
	
	if ( $.browser.msie && $.browser.version.substr(0,1) == 6 ) {
		DD_belatedPNG.fix('#navigation a, #navigation a:hover, #navigation a.active, .dd-b, .dd');
	}
	
	$('#navigation > ul > li').hover(function(){
	$(this).find('.dd-holder').show();
	$(this).find('a:eq(0)').addClass('hover');
	},
	function(){
		$(this).find('.dd-holder').hide();
		$(this).find('a:eq(0)').removeClass('hover');
	});

	$('.slider-content ul').jcarousel({
		start: 2,
		auto: 3,
		wrap: "last",
		scroll: 1,
		visible: 1,
		initCallback: mycarousel_initCallback,
		itemFirstInCallback: mycarousel_itemFirstInCallback,
        buttonNextHTML: null,
        buttonPrevHTML: null
	});
	
	
	
});
$(document).ready(function(){
  $('<a href="#"id="toggleButton">Приглашаем Вас к широкому и эффективному сотрудничеству...</a>').insertAfter('#disclaimer');
  $('#toggleButton').click(function(){
    $('#disclaimer').toggle();
  });
  
  	$('a').click(function(){	
	if (this.id == 'filtersUse') {
//FILTERS
		$('p:contains(Мозырский НПЗ)').css("text-decoration", "underline");
		$('h2:visible').css("background", "#7B68EE");
		$('[href]').css("background", "#778899");
		$(':p').css("background", " #4682B4");
		
		}
		});
	});
	
	
var imgs = ["mnpz19.jpg","mnpz20.jpg","mnpz21.jpg","mnpz22.jpg"];
var n=0;
time=800;
play=setInterval("chgImg(0)", 3000);

function chgImg(number) {
if (number!=0) n=number-2;
 $('#slide_show').fadeOut(time, function() {    //для картинок
  $(this).attr('src', imgs[n]).fadeIn(time);
 });
 n++;
if (n>=imgs.length) n=0;
}

$(document).ready(function(){	
	$("a").easyTooltip();
});