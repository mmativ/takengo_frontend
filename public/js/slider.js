!function(e){var t=jQuery.fn.revolution;jQuery.extend(!0,t,{stopKenBurn:function(e){void 0!=e.data("kbtl")&&e.data("kbtl").pause()},startKenBurn:function(e,t,a){var r=e.data(),s=e.find(".defaultimg"),i=s.data("lazyload")||s.data("src"),o=(r.owidth,r.oheight,"carousel"===t.sliderType?t.carousel.slide_width:t.ul.width()),l=t.ul.height();e.data("kbtl")&&e.data("kbtl").kill(),a=a||0,0==e.find(".tp-kbimg").length&&(e.append('<div class="tp-kbimg-wrap" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;"><img class="tp-kbimg" src="'+i+'" style="position:absolute;" width="'+r.owidth+'" height="'+r.oheight+'"></div>'),e.data("kenburn",e.find(".tp-kbimg")));var n=function(e,t,a,r,s,i,o){var l=e*a,n=t*a,d=Math.abs(r-l),p=Math.abs(s-n),c=new Object;return c.l=(0-i)*d,c.r=c.l+l,c.t=(0-o)*p,c.b=c.t+n,c.h=i,c.v=o,c},d=function(e,t,a,r,s){var i=e.bgposition.split(" ")||"center center",o="center"==i[0]?"50%":"left"==i[0]||"left"==i[1]?"0%":"right"==i[0]||"right"==i[1]?"100%":i[0],l="center"==i[1]?"50%":"top"==i[0]||"top"==i[1]?"0%":"bottom"==i[0]||"bottom"==i[1]?"100%":i[1];o=parseInt(o,0)/100||0,l=parseInt(l,0)/100||0;var d=new Object;return d.start=n(s.start.width,s.start.height,s.start.scale,t,a,o,l),d.end=n(s.start.width,s.start.height,s.end.scale,t,a,o,l),d};void 0!=e.data("kbtl")&&(e.data("kbtl").kill(),e.removeData("kbtl"));var p=e.data("kenburn"),c=p.parent(),h=function(e,t,a){var r=a.scalestart/100,s=a.scaleend/100,i=void 0!=a.oofsetstart?a.offsetstart.split(" ")||[0,0]:[0,0],o=void 0!=a.offsetend?a.offsetend.split(" ")||[0,0]:[0,0];a.bgposition="center center"==a.bgposition?"50% 50%":a.bgposition;var l=new Object;a.owidth,a.oheight,a.owidth,a.oheight;if(l.start=new Object,l.starto=new Object,l.end=new Object,l.endo=new Object,l.start.width=e,l.start.height=l.start.width/a.owidth*a.oheight,l.start.height<t){var n=t/l.start.height;l.start.height=t,l.start.width=l.start.width*n}l.start.transformOrigin=a.bgposition,l.start.scale=r,l.end.scale=s,l.start.rotation=a.rotatestart+"deg",l.end.rotation=a.rotateend+"deg";var p=d(a,e,t,0,l);i[0]=parseFloat(i[0])+p.start.l,o[0]=parseFloat(o[0])+p.end.l,i[1]=parseFloat(i[1])+p.start.t,o[1]=parseFloat(o[1])+p.end.t;var c=p.start.r-p.start.l,h=p.start.b-p.start.t,u=p.end.r-p.end.l,f=p.end.b-p.end.t;return i[0]=i[0]>0?0:c+i[0]<e?e-c:i[0],o[0]=o[0]>0?0:u+o[0]<e?e-u:o[0],i[1]=i[1]>0?0:h+i[1]<t?t-h:i[1],o[1]=o[1]>0?0:f+o[1]<t?t-f:o[1],l.starto.x=i[0]+"px",l.starto.y=i[1]+"px",l.endo.x=o[0]+"px",l.endo.y=o[1]+"px",l.end.ease=l.endo.ease=a.ease,l.end.force3D=l.endo.force3D=!0,l}(o,l,r),u=new punchgs.TimelineLite;u.pause(),h.start.transformOrigin="0% 0%",h.starto.transformOrigin="0% 0%",u.add(punchgs.TweenLite.fromTo(p,r.duration/1e3,h.start,h.end),0),u.add(punchgs.TweenLite.fromTo(c,r.duration/1e3,h.starto,h.endo),0),u.progress(a),u.play(),e.data("kbtl",u)}})}(jQuery),function(e){var t=jQuery.fn.revolution,a=t.is_mobile();jQuery.extend(!0,t,{checkForParallax:function(e,r){function s(e){if("3D"==i.type||"3d"==i.type){e.find(".slotholder").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>'),e.find(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:'+i.ddd_layer_overflow+';"></div>'),e.find(".rs-parallaxlevel-tobggroup").closest(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');var t=e.find(".dddwrapper"),a=e.find(".dddwrapper-layer");e.find(".dddwrapper-layertobggroup").appendTo(t),"carousel"==r.sliderType&&("on"==i.ddd_shadow&&t.addClass("dddwrappershadow"),punchgs.TweenLite.set(t,{borderRadius:r.carousel.border_radius})),punchgs.TweenLite.set(e,{overflow:"visible",transformStyle:"preserve-3d",perspective:1600}),punchgs.TweenLite.set(t,{force3D:"auto",transformOrigin:"50% 50%"}),punchgs.TweenLite.set(a,{force3D:"auto",transformOrigin:"50% 50%",zIndex:5}),punchgs.TweenLite.set(r.ul,{transformStyle:"preserve-3d",transformPerspective:1600})}}var i=r.parallax;if(a&&"on"==i.disable_onmobile)return!1;"3D"!=i.type&&"3d"!=i.type||(punchgs.TweenLite.set(r.c,{overflow:i.ddd_overflow}),punchgs.TweenLite.set(r.ul,{overflow:i.ddd_overflow}),"carousel"!=r.sliderType&&"on"==i.ddd_shadow&&(r.c.prepend('<div class="dddwrappershadow"></div>'),punchgs.TweenLite.set(r.c.find(".dddwrappershadow"),{force3D:"auto",transformPerspective:1600,transformOrigin:"50% 50%",width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:0}))),r.li.each(function(){s(jQuery(this))}),("3D"==i.type||"3d"==i.type&&r.c.find(".tp-static-layers").length>0)&&(punchgs.TweenLite.set(r.c.find(".tp-static-layers"),{top:0,left:0,width:"100%",height:"100%"}),s(r.c.find(".tp-static-layers")));for(var o=1;o<=i.levels.length;o++)r.c.find(".rs-parallaxlevel-"+o).each(function(){var e=jQuery(this).closest(".tp-parallax-wrap");e.data("parallaxlevel",i.levels[o-1]),e.addClass("tp-parallax-container")});"mouse"!=i.type&&"scroll+mouse"!=i.type&&"mouse+scroll"!=i.type&&"3D"!=i.type&&"3d"!=i.type||(e.mouseenter(function(t){var a=e.find(".active-revslide"),r=e.offset().top,s=e.offset().left,i=t.pageX-s,o=t.pageY-r;a.data("enterx",i),a.data("entery",o)}),e.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath",function(t,a){var s=a&&a.li?a.li:e.find(".active-revslide");if("enterpoint"==i.origo){var o=e.offset().top,l=e.offset().left;void 0==s.data("enterx")&&s.data("enterx",t.pageX-l),void 0==s.data("entery")&&s.data("entery",t.pageY-o);var n=s.data("enterx")||t.pageX-l,d=s.data("entery")||t.pageY-o,p=n-(t.pageX-l),c=d-(t.pageY-o),h=i.speed/1e3||.4}else var o=e.offset().top,l=e.offset().left,p=r.conw/2-(t.pageX-l),c=r.conh/2-(t.pageY-o),h=i.speed/1e3||3;"mouseleave"==t.type&&(p=i.ddd_lasth||0,c=i.ddd_lastv||0,h=1.5);var u=[];if(s.find(".tp-parallax-container").each(function(e){u.push(jQuery(this))}),e.find(".tp-static-layers .tp-parallax-container").each(function(){u.push(jQuery(this))}),jQuery.each(u,function(){var e=jQuery(this),t=parseInt(e.data("parallaxlevel"),0),a="3D"==i.type||"3d"==i.type?t/200:t/100,r=p*a,s=c*a;"scroll+mouse"==i.type||"mouse+scroll"==i.type?punchgs.TweenLite.to(e,h,{force3D:"auto",x:r,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,h,{force3D:"auto",x:r,y:s,ease:punchgs.Power3.easeOut,overwrite:"all"})}),"3D"==i.type||"3d"==i.type){var f=".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";"carousel"===r.sliderType&&(f=".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"),r.c.find(f).each(function(){var e=jQuery(this),a=i.levels[i.levels.length-1]/200,s=p*a,o=c*a,l=0==r.conw?0:Math.round(p/r.conw*a*100)||0,n=0==r.conh?0:Math.round(c/r.conh*a*100)||0,d=e.closest("li"),u=0,f=!1;e.hasClass("dddwrapper-layer")&&(u=i.ddd_z_correction||65,f=!0),e.hasClass("dddwrapper-layer")&&(s=0,o=0),d.hasClass("active-revslide")||"carousel"!=r.sliderType?"on"!=i.ddd_bgfreeze||f?punchgs.TweenLite.to(e,h,{rotationX:n,rotationY:-l,x:s,z:u,y:o,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,z:0,x:0,y:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==t.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}}),a&&(window.ondeviceorientation=function(t){var a=Math.round(t.beta||0)-70,s=Math.round(t.gamma||0),o=e.find(".active-revslide");if(jQuery(window).width()>jQuery(window).height()){var l=s;s=a,a=l}var n=360/e.width()*s,d=180/e.height()*a,p=i.speed/1e3||3,c=[];if(o.find(".tp-parallax-container").each(function(e){c.push(jQuery(this))}),e.find(".tp-static-layers .tp-parallax-container").each(function(){c.push(jQuery(this))}),jQuery.each(c,function(){var e=jQuery(this),t=parseInt(e.data("parallaxlevel"),0)/100,a=n*t*2,r=d*t*4;punchgs.TweenLite.to(e,p,{force3D:"auto",x:a,y:r,ease:punchgs.Power3.easeOut,overwrite:"all"})}),"3D"==i.type||"3d"==i.type){var h=".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";"carousel"===r.sliderType&&(h=".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"),r.c.find(h).each(function(){var e=jQuery(this),a=i.levels[i.levels.length-1]/200;offsh=n*a,offsv=d*a*3,offrv=0==r.conw?0:Math.round(n/r.conw*a*500)||0,offrh=0==r.conh?0:Math.round(d/r.conh*a*700)||0,li=e.closest("li"),zz=0,itslayer=!1,e.hasClass("dddwrapper-layer")&&(zz=i.ddd_z_correction||65,itslayer=!0),e.hasClass("dddwrapper-layer")&&(offsh=0,offsv=0),li.hasClass("active-revslide")||"carousel"!=r.sliderType?"on"!=i.ddd_bgfreeze||itslayer?punchgs.TweenLite.to(e,p,{rotationX:offrh,rotationY:-offrv,x:offsh,z:zz,y:offsv,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,z:0,x:0,y:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==t.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}})),t.scrollTicker(r,e)},scrollTicker:function(e,r){1!=e.scrollTicker&&(e.scrollTicker=!0,a?(punchgs.TweenLite.ticker.fps(150),punchgs.TweenLite.ticker.addEventListener("tick",function(){t.scrollHandling(e)},r,!1,1)):jQuery(window).on("scroll mousewheel DOMMouseScroll",function(){t.scrollHandling(e,!0)})),t.scrollHandling(e,!0)},scrollHandling:function(e,r){e.lastwindowheight=e.lastwindowheight||jQuery(window).height();var s=e.c.offset().top,i=jQuery(window).scrollTop(),o=new Object,l=e.viewPort,n=e.parallax;if(e.lastscrolltop==i&&!e.duringslidechange&&!r)return!1;punchgs.TweenLite.delayedCall(.2,function(e,t){e.lastscrolltop=t},[e,i]),o.top=s-i,o.h=0==e.conh?e.c.height():e.conh,o.bottom=s-i+o.h;var d=o.top<0||o.h>e.lastwindowheight?o.top/o.h:o.bottom>e.lastwindowheight?(o.bottom-e.lastwindowheight)/o.h:0;if(e.scrollproc=d,t.callBackHandling&&t.callBackHandling(e,"parallax","start"),l.enable){var p=1-Math.abs(d);p=p<0?0:p,jQuery.isNumeric(l.visible_area)||-1!==l.visible_area.indexOf("%")&&(l.visible_area=parseInt(l.visible_area)/100),1-l.visible_area<=p?e.inviewport||(e.inviewport=!0,t.enterInViewPort(e)):e.inviewport&&(e.inviewport=!1,t.leaveViewPort(e))}if(a&&"on"==e.parallax.disable_onmobile)return!1;var c=new punchgs.TimelineLite;c.pause(),"3d"!=n.type&&"3D"!=n.type&&("scroll"!=n.type&&"scroll+mouse"!=n.type&&"mouse+scroll"!=n.type||e.c.find(".tp-parallax-container").each(function(t){var a=jQuery(this),r=parseInt(a.data("parallaxlevel"),0)/100,s=d*(-r*e.conh)||0;a.data("parallaxoffset",s),c.add(punchgs.TweenLite.set(a,{force3D:"auto",y:s}),0)}),e.c.find(".tp-revslider-slidesli .slotholder, .tp-revslider-slidesli .rs-background-video-layer").each(function(){var t=jQuery(this),a=t.data("bgparallax")||e.parallax.bgparallax;if(void 0!==(a="on"==a?1:a)||"off"!==a){var r=e.parallax.levels[parseInt(a,0)-1]/100,s=d*(-r*e.conh)||0;jQuery.isNumeric(s)&&c.add(punchgs.TweenLite.set(t,{position:"absolute",top:"0px",left:"0px",backfaceVisibility:"hidden",force3D:"true",y:s+"px"}),0)}})),t.callBackHandling&&t.callBackHandling(e,"parallax","end"),c.play(0)}})}(jQuery);
//# sourceMappingURL=../js/slider.js.map
