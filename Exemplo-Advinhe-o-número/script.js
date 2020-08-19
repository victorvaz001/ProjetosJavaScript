function verificar() {

	//innerHTML -> pega conteudo dentro da div
	n1 = document.getElementById("n1").innerHTML;
	n2 = document.getElementById("n2").value;

	if(n1 == n2){
		alert("Você acertou o número!");
	} else {
		alert("Você errou!");
	}

	//depois de verificar, será resetado o numero
	resetar();
}

function resetar() {

	//reseta o campo, tira os valores
	document.getElementById("n2").value = "";

	//gera um número aleatorio, de zero a 100, floor -> aredonda o numero
	var r = Math.floor(Math.random() * 100);


	//coloca no n1 o numero gerado
	document.getElementById("n1").innerHTML = r;
}