//grab the dom elements
var inputValue = document.querySelector('.inputValue')
var submit = document.querySelector('.submit')
var prior = document.querySelector('.prior')
var temp = document.querySelector('.temp')
var desc = document.querySelector('.desc')
//begin grabbing api stuff
fetch('http://api.openweathermap.org/data/2.5/weather>q='+inputValue.value+'&appid=04d9176cccd2fc24539bd75c11228ee8')
.then(response => response.json())
.then(data => {
//set up values from data
console.log(data);
console.log(inputValue.value);
});
