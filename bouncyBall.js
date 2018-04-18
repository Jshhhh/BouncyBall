$(document).ready(function() {
	//on document ready
		//ball starts bounce at level 1
	//run level one bounce function once;
		//set css y axis ball to increment after certain setTimeout interval < 500ms
		//when y increments to ~500 px then start decrement to ~100
		//increment back to 500
	var speed = 1500;
	var interval = setInterval(function() {bounce(speed)}, 10);

	//bounce animation function, speed increases as time decreases
	function bounce(time) {
		$('ellipse').animate({cy: 500}, time)
		$('ellipse').animate({cy: 80}, time);	
	}
	function createBall() {
		$('svg').prepend('<ellipse cx="55" cy="80" rx="45" ry="45" style="fill:green" cursor= "pointer"/>')
	}
	setTimeout(function() {bounce(speed)}, 3000);
	$('ellipse').click(function() {
		clearInterval(interval);
		//$('ellipse').stop(true, true);
		//setTimeout(function() {createBall()}, 6000)
		speed -= 100;
		//setTimeout(function() {bounce(speed)}, 9000);
		console.log(speed);
	});
	
	$('body').click(function() {
		console.log(speed);
	});
	//setTimeout(bounce(3000), 100000) //runs bounce() after X seconds then reverts to original speed for 1 cycle

	//on ball click
		//ball disappears
		//display congratulatory message and "next level: 2"
		//for 3000 ms
		//then begin next level
		//up to 10, then ask if user wants to start again(refresh page or start level 1)

});