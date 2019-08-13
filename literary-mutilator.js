window.onload = function() {

	let highLightButton = document.getElementById('highLighterButton');
	highLightButton.addEventListener('click', function() {
		clickHighlight()
	});

	function clickHighlight() {
		document.getElementById("highlight-me").style.backgroundColor = "red"
	}

	let fontChangingSection = document.getElementById('font-change-button');
	fontChangingSection.addEventListener ("click", function() {
		keyDownChangeFont ()
	});


	function keyDownChangeFont() {
		document.getElementById("change-me").style.fontFamily = "Comic Sans Ms, cursive, sans-serif";
	}

	addEventListener('keyup', function() {
		eraseOnKeyPress ()});

	function eraseOnKeyPress () {
		document.getElementById('holla').remove();
	}

	let truthButton = document.getElementById("truth-button" );
	truthButton.addEventListener("click", function () {
		truthFunction ()
	});

	function truthFunction () {
		let str = document.getElementById("change-me");
		str.replace("an IQ of 140", "never had a job");
	}

	// never mind, i can't figure this out
	// let deleteIndividualWordsByScrolling = document.getElementById("font-changing-button");
	// deleteIndividualWordsByScrolling.addEventListener("scroll", function(){
	// 	individualWordDelete()
	// })
	//
	// function indvidualWordDelete () {
	// 	var words = 0;
	// 	for (var i=0; i<words; i++);
	// 	delete words













	};
