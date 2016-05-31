/*(function(){

var right = document.getElementById('right');
var left = document.getElementById('left');
var li = document.querySelector('.block');
var play = document.querySelector('.play');
var pause = document.querySelector('.pause');
var blockWidth = li.clientWidth+4;
var intervalId;
var j = 0;

left.onclick = function(){
 	j++;
 	if(j>4) j=0;
 	li.style.marginLeft ="-" + blockWidth*j+ 'px';
};

right.onclick = function(){
 	j--;
 	if(j<0) j=4;
 	li.style.marginLeft ="-" + blockWidth*j+ 'px';
};

play.onclick = function(){
	intervalId = setInterval(left.onclick, 1000);
    
};
pause.onclick = function(){
	clearInterval(intervalId);
};

})();*/
//--------------------------------------------------------------
(function(){

var right = document.getElementById('right');
var left = document.getElementById('left');
var li = document.querySelector('.block');
var ul = document.querySelector('.ul');
//var blockWidth = li.clientWidth+4;
var blockWidth = li.clientWidth+4;
var j = 0;
var timer;

left.onclick = function(){
 	j++;
 	if(j>4) j=0;
 	li.style.marginLeft ="-" + blockWidth*j+ 'px';
};

right.onclick = function(){
 	j--;
 	if(j<0) j=4;
 	li.style.marginLeft ="-" + blockWidth*j+ 'px';
};

setInterval(right.onclick, 5000);



})();

$(window).scroll(function() {
var slider = $('#slider');
if ($(this).scrollTop() > slider.height()/2){
$('h2').addClass("animated");	
$('h2').addClass("bounceInDown");
$('h2').removeClass("opacity");
}
});

$(window).scroll(function() {
var slider = $('#slider');
if ($(this).scrollTop() > slider.height()){
$('.bending').addClass("animated");
$('.bending').addClass("bounceInLeft");
$('.bending').removeClass("opacity");

$('.punching').addClass("animated");
$('.punching').addClass("bounceInRight");
$('.punching').removeClass("opacity");

$('.design').addClass("animated");
$('.design').addClass("bounceInLeft");
$('.design').removeClass("opacity");

$('.painting').addClass("animated");
$('.painting').addClass("bounceInRight");
$('.painting').removeClass("opacity");
}
});

$(window).scroll(function() {
var product = $('.product');
if ($(this).scrollTop() > product.height()){
$('.shells').addClass("animated");	
$('.shells').addClass("fadeInRight");
$('.shells').removeClass("opacity");
}
});

$(window).scroll(function() {
var about = $('.about');
if ($(this).scrollTop() > about.height()*2){
$('.all_product').addClass("animated");	
$('.all_product').addClass("fadeInLeft");
$('.all_product').removeClass("opacity");
}
});

