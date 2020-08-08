$(document).ready(function(){
	$('.btn-icon-sidebar').on('click', function(){
		if(!$('.aro-sidebar').hasClass('active')){
			$('.aro-sidebar').addClass('active');
			outside('.aro-sidebar', 'active');
		}else{
			$('.aro-sidebar').removeClass('active');
		}
	});

	function showSubMenu(el) {
		if($(el).children('ul').length > 0){
			$(el).children().first().addClass('active');
			$('.active').children('.icon-submenu').css({'transform': 'rotate(90deg)'});
		}
	};

	function hideSubMenu(el) {
		$('.active').children('.icon-submenu').css({'transform': 'rotate(0deg)'});
		$('.aro-sidebar--menu_item').removeClass('active');
	};

	$('.aro-sidebar--menu_li').on('click', function(){
		if(!$(this).children('.aro-sidebar--menu_item').hasClass('active')){
			if($('div').hasClass('active')){
				hideSubMenu(this);

				showSubMenu(this);
			}else{
				showSubMenu(this);
			}
		}else{
			hideSubMenu(this);
		}
	});

	function outside(el, remove){
		$(document).mouseup(function(e){
		    var element = $(el);
		    if(element.hasClass(remove) && $(window).width() <= 980){
			    if(!element.is(e.target) && element.has(e.target).length === 0){
			        $(el).removeClass(remove);
			    }
		    }
		});
	}
})