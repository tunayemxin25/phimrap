




/*
     FILE ARCHIVED ON 4:40:17 Mar 14, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 9:32:21 Dec 22, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
jQuery(document).ready(function($) {
// $("ul.shownav").hide();
$("#tabs2").hide();
$("#tabs3").hide();
	$("li.downmenu").mouseover(function(){$(this).removeClass("downmenu").addClass("downmenu_over");$(this).find('ul.shownav').show();return false;	}).mouseout(function(){	$(this).removeClass("downmenu_over").addClass("downmenu");	$(".shownav").hide();return false;});
    var move = -15; var zoom = 1.2; 
	$('.zitem').hover(function() {width = $('.zitem').width() * zoom;height = $('.zitem').height() * zoom;$(this).find('img').stop(false,true).animate({'width':width, 'height':height, 'top':move, 'left':move}, {duration:200});$(this).find('div.caption').stop(false,true).fadeIn(200);},  function() {$(this).find('img').stop(false,true).animate({'width':$('.zitem').width(), 'height':$('.zitem').height(), 'top':'0', 'left':'0'}, {duration:100}); $(this).find('div.caption').stop(false,true).fadeOut(200);});
	$('.zitemList').hover(function() {width = $('.zitemList').width() * zoom; height = $('.zitemList').height() * zoom;$(this).find('img').stop(false,true).animate({'width':width, 'height':height, 'top':move, 'left':move}, {duration:200});$(this).find('div.caption').stop(false,true).fadeIn(200);}, function() {$(this).find('img').stop(false,true).animate({'width':$('.zitemList').width(), 'height':$('.zitemList').height(), 'top':'0', 'left':'0'}, {duration:100}); $(this).find('div.caption').stop(false,true).fadeOut(200);    });
	$('.zitemListall').hover(function() {width = $('.zitemListall').width() * zoom;height = $('.zitemListall').height() * zoom;$(this).find('img').stop(false,true).animate({'width':width, 'height':height, 'top':move, 'left':move}, {duration:200});$(this).find('div.caption').stop(false,true).fadeIn(200);},  function() {$(this).find('img').stop(false,true).animate({'width':$('.zitemListall').width(), 'height':$('.zitemListall').height(), 'top':'0', 'left':'0'}, {duration:100});   $(this).find('div.caption').stop(false,true).fadeOut(200);});

		
		$("#login").hide();
		$("#login_true").hide();
		$("#likeshow").hide();
		$(".like").hide();

		
		$('#baoloiB').click(function(){
		if(loginAlert){
		$("#chiase").hide();
		$("#baoloi").slideToggle();
		}
		else{$.msgbox("<b>bạn vui lòng đăng nhập</b>");}
	
		return false;
		});
		$('#shareB').click(function(){
		$("#baoloi").hide();
		$("#chiase").slideToggle();


		return false;
		});
		
		
		$("#phimchieurap").mouseover(function(){
		$("a.browse").show();
		return false;
		}).mouseout(function(){
		$("a.browse").hide();
		return false;		
		});
			

		/*
		$('#phimbo').mouseover(function(){
		$("#phimleshow").hide();
		$("#likeshow").hide();
		$("#phimboshow").slideToggle();
		return false;
		});
		
		$('#phimle').mouseover(function(){
		$("#phimboshow").hide();
		$("#likeshow").hide();
		$("#phimleshow").slideToggle();
		return false;
		});
		$('#phimlike').mouseover(function(){
		$("#phimboshow").hide();
		$("#phimleshow").hide();
		$("#likeshow").slideToggle();
		return false;
		});
		$('#trailerphimmn').click(function(){
		$("#trailerphimmn").toggleClass("title_bg_show");
		$("#thongtinphimmn").toggleClass("title_bg_hide");
		$("#thongtinphim").hide();
		$("#trailerphim").show();
		return false;
});

		$('#thongtinphimmn').click(function(){
		$("#thongtinphimmn").toggleClass("title_bg_show");
		$("#trailerphimmn").toggleClass("title_bg_hide");
		$("#trailerphim").hide();
		$("#thongtinphim").show();
		return false;});
		
	
		*/
		/*************************2013****************************/
				$('.find_search').hover(function(){
		$("#buttonsearch").toggleClass("find_search_click");
		return false;});
		
		$("div.nen").mouseover(function(){
    	$(this).removeClass().addClass("thay_mau2");
		return false;

		}).mouseout(function(){
    	$(this).removeClass().addClass("nen");	
		return false;		
		});
		
		/*--------------------------------*/

 });
 
 