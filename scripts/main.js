/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Franklin-County-Courthouse.jpg'){
		myImage.setAttribute ('src','images/Veterans-Memorial.jpg');

	} else {
		myImage.setAttribute ('src','images/Franklin-County-Courthouse.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome to Franklin County, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome to Franklin County, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}