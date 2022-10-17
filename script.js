const Input =  document.querySelector("#input");
var expression = "";

function press (num)  {
  expression += num;
  Input.value = expression;
}

function equal ()  {
  Input.value = eval(expression);
  expression = "";
}

function erase () {
  expression = "";
  Input.value = expression;
} 