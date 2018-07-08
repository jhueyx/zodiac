// create zodiac sign attributes
var zodiac = [
	{
		sign: "rat",
		characteristics: "quick-witted, smart, charming, and persuasive",
		image: "img/rat.jpg",
	},
	{
		sign: "ox",
		characteristics: "patient, kind, stubborn, and conservative",
		image: "img/ox.jpg"
	},
	{
		sign: "tiger",
		characteristics: "authoritative, emotional, courageous, and intense",
		image: "img/tiger.jpg"
	},
	{
		sign: "rabbit",
		characteristics: "popular, compassionate, and sincere",
		image: "img/rabbit.jpg"
	},
	{
		sign: "dragon",
		characteristics: "energetic, fearless, warm-hearted, and charismatic",
		image: "img/dragon.jpg"
	},
	{
		sign: "snake",
		characteristics: "charming, gregarious, introverted, generous, and smart",
		image: "img/snake.jpg"
	},
	{
		sign: "horse",
		characteristics: "energetic, independent, impatient, and enjoy traveling",
		image: "img/horse.jpg"
	},
	{
		sign: "goat",
		characteristics: "mild-mannered, shy, kind, and peace-loving",
		image: "img/goat.jpg"
	},
	{
		sign: "monkey",
		characteristics: "fun, energetic, and active",
		image: "img/monkey.jpg"
	},
	{
		sign: "rooster",
		characteristics: " independent, practical, hard-working, and observant",
		image: "img/rooster.jpg"
	},
	{
		sign: "dog",
		characteristics: "patient, diligent, generous, faithful, and kind",
		image: "img/dog.jpg"
	},
	{
		sign: "pig",
		characteristics: "loving, tolerant, honest, and appreciative of luxury",
		image: "img/pig.jpg"
	}
];


//"sign is the variable for what is entered itno the keybox. 



// This is code so the enter key also fires (runs/invokes/instantiates) the function
var btn = document.getElementById('sign');
btn.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		horoscope();
	};
}, false);

// function to determine user horoscope, pulls from what was entered into the search box.  
function horoscope() {
	// store the tag with id="sign" in var sign
	var sign = document.getElementById("sign");

	// confirm the element exists and what value the user submits
	console.log(sign);
	console.log("users value is: " + sign.value);

	// loop through zodiac array one item at a time
	for(var i = 0; i < zodiac.length; i = i + 1) {
		// check what the users value is before using it in a condition
		console.log("users value lowercase is: " + sign.value.toLowerCase());
		// check the current item's sign in the zodiac array
		console.log("current zodiac sign in loop is: " + zodiac[i].sign);

		// if the value the user typed in, changed to all lowercase letters, is equal to one of our signs, then we do something
		if(sign.value.toLowerCase() === zodiac[i].sign) {
			// confirm the if statement ran
			console.log("if statement ran");

			// check some values in the console before updating HTML
			console.log("users typed in: " + sign.value);
			console.log("current image value is: " + zodiac[i].image);
			console.log("current fortune value is: " + zodiac[i].characteristics);

			// get element with id="userSign" and change the text to the user input
			document.getElementById("yourSign").textContent = sign.value;
			// get element with id="icon" and change source attribute to current zodiac image path
			document.getElementById("icon").src = zodiac[i].image;
			// // get element with id="yourHoroscope" and change the content to this concatenated string
			document.getElementById("yourHoroscope").textContent = "Your best attributes are: " + zodiac[i].characteristics;

			// stop the function because we found a match and added the data to the screen!!!
			return;
		};

		// confirm no matches are found if that's the case
		console.log("no matches were found, user failed to type in a correct zodiac sign");

		// if no match is found, do opposite of above, mostly clearing content and img
		document.getElementById("yourSign").textContent = "Not one of the signs. Try again!";
		document.getElementById("yourHoroscope").textContent = "";
		document.getElementById("icon").src = "";
	};
};
