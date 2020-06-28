function calcular_cajas(){
	var caja = prompt("Por favor ingrese el numero de cajas que desea colocar");
	if (caja != null) {
    	if (caja >0){
    	document.getElementById("cajas").innerHTML ="";
    	for (var i =0; i < caja; i++) {
    		if (caja <8) {
    			document.getElementById("cajas").innerHTML += "<article class='menor8'>Caja " + (i+1) + "</article>";
    	}else{
    		document.getElementById("cajas").innerHTML += "<article class='mayor8'>Caja " + (i+1) + "</article>";
    	}
    	}
	}
  }
  function suma(){
	var suma=0;
	var num=0;
	do{
		num = prompt("Por favor ingrese un numero positivo para sumar y un numero menor a 0 para terminar");
		num = parseFloat(num)
		suma= suma+num;
		document.getElementById("numeroP").innerHTML ="La suma de los numeros que ingreso es: "+suma;
	}while(num>0)
}
  function xd (formulario) {
    var ape=formulario.Apellido.value;
    var nom=formulario.Nombre.value;
    var f=parseInt(formulario.zona.value);
    switch (f) {
            case 1 :
            document.getElementById("mensaje").innerHTML = "Zona: Norte" + "<br/>Votante:" + nom+" "+ ape;
            
            break;

            case 2 :
            document.getElementById("mensaje").innerHTML="Zona: Centro" + "<br/>Votante:" + nom+" "+ ape;
            
            break;

            case 3 :
            document.getElementById("mensaje").innerHTML="Zona: Sur" + "<br/>Votante:" + nom+" "+ ape;
            
            break;
        default:
        window.alert("Atención: No seleccionaste una zona. Intentalo de nuevo por favor.");

            break;
    }
}