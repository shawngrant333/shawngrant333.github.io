$(window).scroll(function () { 
					 $('[id="head-name"]').add(function () {
											   if (($(this).offset().top - $(window).scrollTop()) < 20)
											   { 
												   $(this).stop().fadeTo(100, 0);
											   }
											   else
											   {
												   $(this).stop().fadeTo('fast', 1);
											   } 
										   }); 
				 });


