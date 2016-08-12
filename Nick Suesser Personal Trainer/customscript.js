//Fades in Nick Picture in About Page

/* //Changes Picture Opacity When Hovered on in Training Page
 $(document).ready(function() {
    $('.trainImg').hover(function() {
        $(this).animate({opacity:1.5});
    }, function() {
        $(this).stop().animate({opacity:.7});
    });
});  */

//Makes Certs in ABout Page Move When Hovered
$(document).ready(function() {
  $('.certs').hover(function() {
    $(this).animate({paddingTop: '-=15px'}, 'fast');
		}, function() {
    $(this).animate({paddingTop: '15px'}, 'fast');
  });
});

//Makes Services and Quotes in Home Page Move When Hovered
$(document).ready(function() {
  $('.homeServices').hover(function() {
    $(this).animate({paddingTop: '-=15px'}, 'fast');
		}, function() {
    $(this).animate({paddingTop: '15px'}, 'fast');
  });
});

/* 
*  This is for Training Service Page
*  When service title is clicked, title changes color and turns bold, img above opacity to 1
*  Need specific id for each title and img to correspond. 
 */

//finds CSS class clickedH3 and changes font color and weight
$(document).ready(function() {
	$('.trainH3').click(function(){
  $(this).toggleClass('clickedH3');
	});
});

//finds CSS class clickedH3 and changes img opacity to 1	
$(document).ready(function() {
	$('#buildMuscTitle').click(function(){
		$('#buildMuscPic').toggleClass('clickedImgChange');
	});
});

 $(document).ready(function() {
	$('#dropLbsTitle').click(function(){
		$('#dropLbsPic').toggleClass('clickedImgChange');
	});
});

 $(document).ready(function() {
	$('#nutritionTitle').click(function(){
		$('#nutritionPic').toggleClass('clickedImgChange');
	});
});

$(document).ready(function() {
	$('#atHomeTitle').click(function(){
		$('#atHomePic').toggleClass('clickedImgChange');
	});
});

$(document).ready(function() {
	$('#postPregTitle').click(function(){
		$('#postPregPic').toggleClass('clickedImgChange');
	});
});

$(document).ready(function() {
	$('#healthyTitle').click(function(){
		$('#healthyPic').toggleClass('clickedImgChange');
	});
});

$(document).ready(function() {
	$('#athleticTitle').click(function(){
		$('#athleticPic').toggleClass('clickedImgChange');
	});
});

$(document).ready(function() {
	$('#eventTitle').click(function(){
		$('#eventPic').toggleClass('clickedImgChange');
	});
});





	