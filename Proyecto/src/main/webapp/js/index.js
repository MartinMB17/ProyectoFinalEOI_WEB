	function consultar(){
		let usuario=document.getElementById("usuario").value;

		if(usuario=="")
			alert("Error!, para consultar debe rellenar un usuario");
		else
			location.href="consultar.jsp?usuario="+usuario;		
	}
	window.onload=function(){
		let enlace=document.querySelector("li + li a");	
		enlace.onclick=consultar;
	}