$(function(){function e(){$("header").css("height",$(window).height())}$("a[href=#callback]").magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:"my-mfp-zoom-in"}),$(".scroll").click(function(e){e.preventDefault();var t=this.href,a=t.split("#"),n=a[1],o=$("#"+n).offset(),i=o.top;$("html, body").animate({scrollTop:i},1500)}),$(".mouse-icon").click(function(){return $("html, body").animate({scrollTop:$(".service").height()+290},"slow"),!1}),$(".top_wrapper").animated("zoomIn"),$(".reasons .row h2").animated("fadeInLeft"),$(".item").animated("fadeIn"),$(".results .item-circle i").animated("rotateIn"),$(".results .item-circle p").animated("zoomIn"),$("#myForm").validator(),$(".toggle-mnu").click(function(){return $(this).toggleClass("on"),$(".main-mnu").slideToggle(),!1}),e(),$(window).resize(function(){e()}),$(".toggle_mnu").click(function(){$(".sandwich").toggleClass("active")}),$(".top_mnu ul a").click(function(){$(".top_mnu").fadeOut(600),$(".sandwich").toggleClass("active")}).append("<span>"),$(".toggle_mnu").click(function(){$(".top_mnu").is(":visible")?($(".top_text").removeClass("h_opacity"),$(".top_mnu").fadeOut(600),$(".top_mnu li a").removeClass("fadeInUp animated")):($(".top_text").addClass("h_opacity"),$(".top_mnu").fadeIn(600),$(".top_mnu li a").addClass("fadeInUp animated"))}),Modernizr.svg||$("img[src*='svg']").attr("src",function(){return $(this).attr("src").replace(".svg",".png")}),$("form").submit(function(){var e=$(this);return $.ajax({type:"POST",url:"mail.php",data:e.serialize()}).done(function(){$(".success").addClass("visible"),setTimeout(function(){e.trigger("reset"),$(".success").removeClass("visible"),$.magnificPopup.close()},2500)}),!1});try{$.browserSelector(),$("html").hasClass("chrome")&&$.smoothScroll()}catch(t){}$("img, a").on("dragstart",function(e){e.preventDefault()}),$(document).ready(function(){$(".top_line").stickUp({parts:{0:"home",1:"service",2:"reasons",3:"work",4:"results",5:"reviews",6:"contacts"},itemClass:"menuItem",itemHover:"active"})})});var card=$(".card");$(window).on("mousemove",function(e){var t=-($(window).innerWidth()/2-e.pageX)/100,a=($(window).innerHeight()/2-e.pageY)/100;card.attr("style","transform: rotateY("+t+"deg) rotateX("+a+"deg);-webkit-transform: rotateY("+t+"deg) rotateX("+a+"deg);-moz-transform: rotateY("+t+"deg) rotateX("+a+"deg)")}),function(e,t,a){(t[a]=t[a]||[]).push(function(){try{t.yaCounter37668435=new Ya.Metrika({id:37668435,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0})}catch(e){}});var n=e.getElementsByTagName("script")[0],o=e.createElement("script"),i=function(){n.parentNode.insertBefore(o,n)};o.type="text/javascript",o.async=!0,o.src="https://mc.yandex.ru/metrika/watch.js","[object Opera]"==t.opera?e.addEventListener("DOMContentLoaded",i,!1):i()}(document,window,"yandex_metrika_callbacks"),$("#map_canvas").load("test.php",{"choices[]":["Jon","Susan"]});