document.getElementById("add").disabled = true;
document.getElementById("multiplication").disabled = true;
document.getElementById("division").disabled = true;

function calc(btn){
  let display = document.calculator.display.value += btn.value;
  
  let checkBegin0 = /^0\d/.test(display);
  if(checkBegin0 == true){
    let num = display.replace(/^0+/, '');
    document.calculator.display.value = num;
  }
  
  let checkEndSymbol = /\D$/.test(display);
  if(checkEndSymbol==true){
    document.getElementById("add").disabled = true;
    document.getElementById("minus").disabled = true;
    document.getElementById("multiplication").disabled = true;
    document.getElementById("division").disabled = true;
    document.getElementById("point").disabled = true;
  }  
  
  let checkEnd0 = /\D0\d$/.test(display);
  if(checkEnd0==true){
    let num = display.replace(/0\d+$/,"");
    document.calculator.display.value = num;
  }

  let checkEndNum = /\d$/.test(display);
  if(checkEndNum==true){
    document.getElementById("add").disabled = false;
    document.getElementById("minus").disabled = false;
    document.getElementById("multiplication").disabled = false;
    document.getElementById("division").disabled = false;
    document.getElementById("point").disabled = false;
  }
  
  if (btn.value == "AC"){
    document.calculator.display.value = "";
    document.getElementById("multiplication").disabled = true;
    document.getElementById("division").disabled = true;
    document.getElementById("minus").disabled = false;
  }
}

function equalButton(){
  let result = document.calculator.display.value;
  let equal = new Function("return " + result);
  document.calculator.display.value = equal();
}

