/**
 *  Validação de formulário
 * @author Victor Cavalcante
 */

 function validar() {
	 let nome = frmContato.nome.value
	 let fone = frmContato.fone.value
	 if (nome && fone === ""){
		 alert('Os campos Nome e Fone devem ser preenchidos!')	 
	 } else {
		 document.forms["frmContato"].submit()
	 }
 }
 
 
 /*  if (nome === "") {
		 alert('Preencha o campo Nome')
		 frmContato.nome.focus()
		 return false
	 } else if (fone === ""){
		 alert('Preencha o campo Fone')
		 frmContato.fone.focus()
		 return false */ 