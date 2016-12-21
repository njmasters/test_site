// Image Switcher Code

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/webpic.jpg') {
      myImage.setAttribute ('src','images/grill.jpg');
    } else {
      myImage.setAttribute ('src','images/webpic.jpg');
    }
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Sound Off Yoga is great, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Sound Off Yoga is great, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

