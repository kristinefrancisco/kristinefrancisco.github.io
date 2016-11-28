$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		var width = $(window).width()
		
		if (width >= '880px') {
			$('#small-nav').hide();
		}
	})
	
	$('#burger').click(function() {
		$('#small-nav').slideToggle();
	})
})
