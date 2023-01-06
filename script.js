function sm() {
  symbol.innerHTML = '+';
}
function sb() {
  symbol.innerHTML = '-';
}
function Mt() {
  symbol.innerHTML = '*';
}
function Dv() {
  symbol.innerHTML = '/';
}

function fun() {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var symbol = document.getElementById('symbol');
  if (symbol.innerHTML === '+') {
    document.getElementById('ans').innerHTML = parseInt(num1) + parseInt(num2);
  } else if (symbol.innerHTML === '-') {
    document.getElementById('ans').innerHTML = parseInt(num1) - parseInt(num2);
  } else if (symbol.innerHTML === '*') {
    document.getElementById('ans').innerHTML = parseInt(num1) * parseInt(num2);
  } else if (symbol.innerHTML === '/') {
    document.getElementById('ans').innerHTML = parseInt(num1) / parseInt(num2);
  }
}
