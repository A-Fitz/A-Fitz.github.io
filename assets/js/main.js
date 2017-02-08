function hover() {

//Animation when you hover
  $(".portfolio-img").hover(function() {
  if($(this).attr('active')!='1'){
  if(!$(this).find("img[class=hover-main]").is(':animated')) {
  $(this).find("img[class=hover-main]").animate({"margin-top":"0"},200);
  }}},
//Animation on lost focus
  function(){
  if($(this).attr('active')!='1'){
  $(this).find("img[class=hover-main]").stop().animate({"margin-top":"140px"},200);
  }});

}

function SetPortfoioParentHeight(){
   $(".portfolio-item").each(function() 
   {
   max=parseInt($(this).css('margin-top'))+$(this).height();
   if (max > max1) {max1=max};
    }
	);
  $(".portfolio").animate({"height":max1},200);

}


function resetMax() {
//Resetting the maximum
  max1=0;
  $(".portfolio-item").each(function(i){$(this).attr("nn",parseInt(i+1));});
  $(".portfolio-item").each(function() {
  setmargins($(this).attr('nn'));});
  $('.portfolio-item').slice(0,7).css('margin-top',parseInt($('.portfolio-item').first().css('margin-top')));
  
}

function setmargins (nn) {
z=Math.floor((1100+20)/($('.portfolio-item').width()+20));

margintop=0;
marginleft=0;

x=Math.floor((nn-1)/z);
t=nn;
b=(nn-1-x*z)*140+20*(nn-2-x*z)+20;
for (i = 0;i < x; i++){
a=nn-z;
margintop+=parseInt($('.portfolio-item[nn='+a+']').css('height'));
nn=a;

}

margintop+=20*x;
$('.portfolio-item[nn='+t+']').css('margin-top',margintop+'px');
$('.portfolio-item[nn='+t+']').css('margin-left',b+'px');
}

$(function() {
hover();
resetMax();
SetPortfoioParentHeight();

margintop= parseInt($(window).height())/2-350;
$('.mainpreview').css('margin-top',margintop);

 $('.mainprew.close').click(function(){
	$(".all").show();
  });


});

 $(window).resize(function(){
  margintop= parseInt($(window).height())/2-350;
  
  $('.mainpreview').css('margin-top',margintop);
  });
