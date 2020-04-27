//DOM ELEMENTS
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

//Optional: Show AM or PM
const showAmPm = true;

//Show Time
function showTime() {
  let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();

  //Set AM oR PM
  const amPm = hour >= 12 ? 'PM' : 'AM' ;

  //12hr Format
  hour = hour % 12 || 12;

  //Output time
  time.innerHTML = `${hour}<span>:<\span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ' '}`;
  

  setTimeout(showTime, 1000);
}

//Add Zeros
function addZero (n) {
  return (parseInt(n, 10) < 10 ? '0' : '' ) + n;
}

//Set Background and greeting
function setBgGreet() {
  let today = new Date(), 
      hour = today.getHours();

  if (hour < 12) {
     //morning
     document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
     greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    //afternoon
    document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon';
  } else {
    //evening
    document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  } 
}

//Get name 
function getName() {
  if (localStorage.getItem('name') === null ) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

//Set Name
function setName(e) {
  if(e.type === 'keypress') {
    //make sure enter is pressed
    if(e.which == 13 || e.keycode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

//Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null ) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

//Set Focus
function setFocus(e) {
  if(e.type === 'keypress') {
    //make sure enter is pressed
    if(e.which == 13 || e.keycode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener['keypress', setName];
name.addEventListener['blur', setName];
focus.addEventListener['keypress', setFocus];
focus.addEventListener['blur', setFocus];


//Run
showTime();
setBgGreet();
getName();
getFocus();
// setName();
// setFocus();
