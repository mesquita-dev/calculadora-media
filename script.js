function calcular(){
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);
  var n3 = parseFloat(document.getElementById("n3").value);
  var n4 = parseFloat(document.getElementById("n4").value);
 
  var notaFinal = ((n1+n2+n3+n4)/4).toFixed(2);
 
   var resultado
 
   if (notaFinal>=6){
     resultado = "aprovado";
   }
   else{
     resultado = "reprovado";
   }
 
   document.getElementById("resultado").innerHTML = `A sua nota foi de ${notaFinal} e você foi ${resultado}`;
 }
 