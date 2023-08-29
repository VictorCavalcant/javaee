/**
 * Confirmação de exclusão de um contato
 * @author Victor Cavalcante Vieira
 * @param idcon
 */

 function confirmar(idcon){
	 let resposta = confirm("Confirma a exclusão deste contato?")
	 if (resposta){
		/*alert(idcon)*/
		window.location.href = "delete?idcon=" + idcon
	 }
 }