function sumar() {
    var cantidad= document.getElementById("cant").value;
    var categoria=document.getElementById("cat").value;
    var result = parseFloat(cantidad) * parseFloat (categoria);
 
    document.getElementById("total").innerHTML = result;
 }

