var today = new Date();
var year = today.getFullYear();
console.log(year);

var current = document.getElementById('date');
console.log(current);
current.textContent = year;