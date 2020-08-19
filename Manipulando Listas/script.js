function adicionarItem(){
	var prod =  document.getElementById("produto").value;

	var listahtml = document.getElementById("lista").innerHTML;


	listahtml = listahtml + "<li>"+prod+"</li>";


	document.getElementById("lista").innerHTML = listahtml;




}

