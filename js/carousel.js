/**
 * Created by WonYoung on 2016. 9. 10..
 */
var isClicked = false;
var edge = document.getElementById('sliding').scrollWidth;
$('.slide').on('click', function() {
    if (!isClicked) {
        $('#sliding').stop().animate( { scrollLeft : edge }, 1200 );
        isClicked = true;
    } else if (isClicked) {
        $('#sliding').stop().animate( { scrollLeft : 0 }, 1200 );
        isClicked = false;
    }
});
