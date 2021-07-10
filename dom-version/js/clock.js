(function($) {
	function rotate(element, degree) {
		$(element).css('transform', 'rotate(' + degree + 'deg)');
		 /* IE 9 */
		$(element).css('-ms-transform', 'rotate(' + degree + 'deg)');
		/* Firefox */
		$(element).css('-moz-transform', 'rotate(' + degree + 'deg)'); 
		/* Safari and Chrome */
		$(element).css('-webkit-transform', 'rotate(' + degree + 'deg)');
		 /* Opera */
		$(element).css('-o-transform', 'rotate(' + degree + 'deg)');
	};

	$.fn.clock = function() {
		var $clock = $(this);

		$clock.addClass('clock');

		$clock.append('<img class="hour" src="./images/hour.png"/>');
		$clock.append('<img class="minute" src="./images/minute.png"/>');
		$clock.append('<img class="second" src="./images/second.png"/>');

		var $hour = $('.hour');
		var $minute = $('.minute');
		var $second = $('.second');

		$clock.find('img').each(function() {
			$(this).css('left', $clock.height() / 2 - $(this).width() / 2);
			$(this).css('top', $clock.height() / 2 - $(this).height() / 2);
		});

		function setTime() {
			var date = new Date();
			var hours = date.getHours();
			var minutes = date.getMinutes();
			var seconds = date.getSeconds();
			rotate($hour, 360 / 12 * hours + 360 / 12 / 60 * minutes);
			rotate($minute, 360 / 60 * minutes);
			rotate($second, 360 / 60 * seconds);
		}

		setTime();

		setInterval(setTime, 1000);
	}
}) (jQuery);