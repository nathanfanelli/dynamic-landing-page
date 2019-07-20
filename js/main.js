// DOM Elements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name')
focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
	let today = new Date(), 
	// let today = new Date(),
	hour = today.getHours(),
	min = today.getMinutes(),
	sec = today.getSeconds();

	// Set AM or PM
	const amPm = hour >= 12 ? 'PM' : 'AM';

	// 12hr Format
	hour = hour % 12 || 12;

	// Output Time
	time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

	setTimeout(showTime, 1000);
}

//Add Zero
function addZero(number) {
	return (parseInt(number, 10) < 10 ? '0' : '') + number;
}

// Set background and Greeting 
function setBgGreet() {
	let today = new Date(),
	hour = today.getHours();

	if(hour < 12) {
		//Morning
		document.body.style.backgroundImage = "url('https://suellewellyn2011.files.wordpress.com/2013/07/l.jpg')";
		greeting.textContent = 'Good Morning';
	} else if(hour < 18) {
		//Afteroon
		document.body.style.backgroundImage = "url('https://rickholliday.files.wordpress.com/2014/11/late-afternoon-light-from-baxter-mountain.jpg')";
		greeting.textContent = 'Good Afternoon';
	} else {
		// Evening
		document.body.style.backgroundImage = "url('https://ranchreflections.files.wordpress.com/2013/05/starrynight2.jpg')";
		greeting.textContent = 'Good Evening';
		document.body.style.color = 'white';
	}
}

// Get Name
function getName() {
	if(localStorage.getItem('name') === null) {
		name.textContent = '[Enter Name]';
	} else {
		name.textContent = localStorage.getItem('name');
	}
}

// Set Name
function setName() {
	if(e.type === 'keypress') {
		// Make sure enter is pressed
		if(e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('name', e.target.innerText);
			name.blur();
		}
	} else {
		localStorage.setItem('name', e.target.innerText);
	}
}

// Set Focus
function setFocus(e) {
	if(e.type === 'keypress') {
		// Make sure enter is pressed
		if(e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('focus', e.target.innerText);
			focus.blur();
		}
	} else {
		localStorage.setItem('focus', e.target.innerText);
	}
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus); 

//Run
showTime();
setBgGreet();
getName();

