function validar(){

	var valor = document.getElementById("numero").value;

	if(valor.length > 2) {

		alert("Voce digitou um numero que tem mais de dois algarismos!");
		return false;
	} else {
		alert("Enviado com suesso!");
		return true;
	}
}