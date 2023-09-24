var dice = {
    roll: function (dicenumber) {
        return Math.floor((Math.random() * dicenumber) + 1);
    }
  }
  
  function printNumber(number) {
    document.getElementById("printednum").innerHTML = number;
  }
  
  function changeroll(dicenumber) {
    var result = dice.roll(dicenumber);
    return printNumber(result);
  }
  
  var button4 = document.getElementById('button4');
  var button6 = document.getElementById('button6');
  var button8 = document.getElementById('button8');
  var button10 = document.getElementById('button10');
  var button12 = document.getElementById('button12');
  var button20 = document.getElementById('button20');
  button4.onclick = function() { changeroll(4); };
  button6.onclick = function() { changeroll(6); };
  button8.onclick = function() { changeroll(8); };
  button10.onclick = function() { changeroll(10); };
  button12.onclick = function() { changeroll(12); };
  button20.onclick = function() { changeroll(20); };

  window.onload = function () {
    changeroll(6);
    button6.focus();
};
  