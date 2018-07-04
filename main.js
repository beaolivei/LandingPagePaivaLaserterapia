function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function scrollByRate(y, rate) 
{
  //calculate the scroll height
  var scrolling = Math.max( document.getElementsByTagName('html')[0].scrollTop, document.body.scrollTop);

  //save the old value as "static" var
  arguments.callee.tmp = arguments.callee.tmp || scrolling + y;

  //make a little scrolling step
  window.scrollBy(0, (arguments.callee.tmp - scrolling) / rate);

  //are we arrived? if no, keep going recursively, else reset the static var
  if(arguments.callee.tmp - scrolling > 100) setTimeout(function() { scrollByRate(y, rate); }, 10);
  else arguments.callee.tmp = undefined;      
}
$(document).ready(function () {
    $('div.bgParallax').each(function () {
        var $obj = $(this);
        $(window).scroll(function () {
            var yPos = -($(window).scrollTop() / $obj.data('speed'));
            var bgpos = '50% ' + yPos + 'px';
            $obj.css('background-position', bgpos);
        });
    });
});