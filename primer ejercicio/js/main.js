document.getElementById("areaForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
  
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);
    
    
    var area = base * altura;
    
 
    document.getElementById("resultado").innerText = "El área del rectángulo es: " + area;
  });
  