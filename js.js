function getEl(id){
    var el = document.getElementById(id);
    return el;
}

var firstNameId = 'first-name';
var lastNameId = 'last-name';
var addressId = 'address';
var citiesId = 'cities';
var avatarCoverId = 'avatar-cover';
var avatarId = 'avatar';
var hobbiesId = 'hobbies';

var firstNameEl = getEl(firstNameId);
var lastNameEl = getEl(lastNameId);
var addressEl = getEl(addressId);
var citiesEl = getEl(citiesId);
var avatarCoverEl = getEl(avatarCoverId);
var avatarEl = getEl(avatarId);
var hobbiesEl = getEl(hobbiesId);

hobbiesEl.value = 'Welcome to Silicon Valley!';
firstNameEl.value = 'IT';
lastNameEl.setAttribute('value', 'Kamasutra');
addressEl.value='CALIFORNIA';
lastNameEl.className = 'color-input';
citiesEl.className = 'default-input';
avatarEl.src = 'https://klike.net/uploads/posts/2019-09/1569659669_2.jpg';
/*avatarCoverEl.innerHTML ='JS is Super Cool!';*/

function logValue(id) {
    var el = document.getElementById(id);
    console.log(el.value);
}

/*var firstNameEl = document.getElementById(firstNameId);
alertValues(firstNameEl);

var lastNameEl = document.getElementById(lastNameId);
alertValues(lastNameEl);

var addressEl = document.getElementById(addressId);
alertValues(addressEl);

var citiesEl = document.getElementById(citiesId);
alertValues(citiesEl);

var avatarCoverEl = document.getElementById(avatarCoverId);
alertValues(avatarCoverEl);

var avatarEl = document.getElementById(avatarId);
alertValues(avatarEl);

var hobbiesEl = document.getElementById(hobbiesId);
alertValues(hobbiesEl);*/

logValue(firstNameId);
logValue(lastNameId);
logValue(addressId);
logValue(citiesId);
logValue(hobbiesId);

function getValue(id) {
    var el = document.getElementById(id);
    return el.value;
}
// var firstNameId = 'first-name'; ранее указана
var value = getValue(firstNameId);
window.alert(value);

var value = getValue(lastNameId);
window.alert(value);


function f(x="gold"){
    document.querySelector("h1").style.color = x;
}

/* здесь functioin - это анонимная функция */
document.querySelector('button').addEventListener('click', function(event) {
    console.log(event);
})



