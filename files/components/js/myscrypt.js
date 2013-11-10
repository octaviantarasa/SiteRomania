$(function(){

	//highlight the current nav
	$("#home a:contains('Home')").parent().addClass('active');
	$("#aboutromania a:contains('About Romania')").parent().addClass('active');
	$("#whattodo a:contains('What to do')").parent().addClass('active');
	$("#destinations a:contains('Destinations')").parent().addClass('active');
	$("#multimedia a:contains('Multimedia')").parent().addClass('active');
	$("#specialinterest a:contains('Special Interest')").parent().addClass('active');
	$("#tripplanner a:contains('Trip Planner')").parent().addClass('active');

	//make menus drop automatically
	$('ul.nav li.dropdown').hover(function(){
		$('.dropdown-menu', this).fadeIn(0);
	}, function(){
		$('.dropdown-menu',this).fadeOut(0);
	});//hover

	//show modals

	$('.modalphotos img').on('click', function(){
		$('#modal').modal({
			show:true,
		})

		var mysrc = this.src.substr(0, this.src.length-7) + '.jpg';
		$('#modalimage').attr('src',mysrc);
		$('#modalimage').on('click',function(){
			$('#modal').modal('hide');
		});
	});

});//jQuery is loaded
