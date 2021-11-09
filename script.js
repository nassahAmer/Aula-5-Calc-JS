function calcular(){
  var numero1 = Number(document.getElementById("num1").value)
  var numero2 = Number(document.getElementById("num2").value)

  var operacao = document.getElementById("operacao").value
  var resultado

  if(operacao == "1") resultado = numero1 + numero2
  else if(operacao == "2") resultado = numero1 - numero2
  else if(operacao == "3") resultado = numero1 * numero2
  else if(operacao == "4") resultado = numero1 / numero2
  

  document.getElementById("resultado").value = resultado



}