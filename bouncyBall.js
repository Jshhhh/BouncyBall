$(document).ready(function() {
	//on document ready
		//ball starts bounce at level 1
	//run level one bounce function once;
		//set css y axis ball to increment after certain setTimeout interval < 500ms
		//when y increments to ~500 px then start decrement to ~100
		//increment back to 500
	var speed = 1000;
	function bounce(time) {
		$('ellipse').animate({cy: 500}, time).animate({cy: 80}, time, function() {bounce(time);});
	}
	bounce(speed);
	//setTimeout(bounce(3000), 100000) //runs bounce() after X seconds then reverts to original speed for 1 cycle

	//on ball click
		//ball disappears
		//display congratulatory message and "next level: 2"
		//for 3000 ms
		//then begin next level
		//up to 10, then ask if user wants to start again(refresh page or start level 1)

});