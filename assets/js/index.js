$(document).ready(function(){
	function aropex(){
		this.outside = function(el, tg, c){
			$(document).mouseup(function(e){
			    if($(el).hasClass(c)){
				    if(!$(el).is(e.target) && $(el).has(e.target).length < 1){
				    	if(!$(tg).is(e.target) && $(tg).has(e.target).length < 1){
					        $(el).removeClass(c);
					    }
				    }
			    }
			});
		};
		this.event = function(el, outside){
			var event = $(el).data('event');
			if(event == 'dropdown'){
				var target = $(el).data('target');
				if(!$(target).hasClass('active')){
					$(target).addClass('active');
					if(outside){
						this.outside(target, el, 'active');
					}
				}else{
					$(target).removeClass('active');
				}
			}
		};
	}

	let Aropex = new aropex();
	$('.aro-menu').on('click', function(){
		if($(window).width() <= 980){
			Aropex.event(this, true);
		}else{
			Aropex.event(this, false);
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

	$('.clicked').on('click',  function(){
		if($(this).hasClass('aro-alert')){
			$(this).css('display', 'none');
		}
	});

	$('.dropdown').on('click', function(){
		Aropex.event(this, true);
	});
})