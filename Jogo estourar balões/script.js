function addBola(){

	//criando uma div e adicionando um atributo bola, <div class="bola"></div>
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");

	//floor para transformar em inteiro e gera um número aleatorio de 0 a 500 e 0 a 400
	var p1 = Math.floor(Math.random() * 500);
	var p2 = Math.floor(Math.random() * 400);
	 bola.setAttribute("style", "left:" + p1 + "px;top:" + p2 + "px;background:" + getRandomColor());
	
	//this passa o proprio objeto
	bola.setAttribute("onclick", "estourar(this)");



	//pega o conteudo do site e adciona um novo
	document.body.appendChild(bola);
}

//remove o elemento da tela
function estourar(elemento) {
	document.body.removeChild(elemento);
}

function iniciar() {
	setInterval(addBola, 1000);
}

//Função para gerar um código hexadecimal alatorio
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}