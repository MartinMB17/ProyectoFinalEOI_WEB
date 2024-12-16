'use strict';

/*
function pedirNumero(){
	let x;
	
	do{
		x=+prompt("Dame un número del 1 al 10");
		if(isNaN(x) || x<1 || x>10)
			alert("ERROR!, No me has dado un número del 1 al 10, intentalo otra vez");
	}while(isNaN(x)|| x<1 || x>10);

	return x;

}	

function pedirEstructura(){
	let operacion;
	
	do{
		operacion=prompt("Dame la estructura (LISTA, TABLA o PÁRRAFOS)");
		operacion=operacion.toUpperCase();
		if(operacion!="LISTA" && operacion!="TABLA" 
		&& operacion!="PÁRRAFOS" && operacion!="PARRAFOS")
		alert("ERROR!, estructura no válida, vuelva a intentarlo");
	}while(operacion!="LISTA" && operacion!="TABLA" 
	&& operacion!="PÁRRAFOS" && operacion!="PARRAFOS");		

	return operacion;
}
*/
function reconstruir(nodo,tabla,cantidad){
	let nombre=nodo.nodeName;
	
	nodo.previousElementSibling.style.display="block";
	nodo.previousElementSibling.previousElementSibling.style.display="none";
	nodo.parentNode.removeChild(nodo);
	
	
	
	if(nombre=="TABLE"){
		//document.formulario.estructura.value="LISTA";
		montarEstructura(tabla,cantidad,"LISTA");
	}
	else if(nombre=="UL"){
		//document.formulario.estructura.value="PARRAFOS";
		montarEstructura(tabla,cantidad,"PARRAFOS");
	}
	else if(nombre=="DIV"){
		//document.formulario.estructura.value="TABLA";
		montarEstructura(tabla,cantidad,"TABLA");
	}
}

function montarEstructura(tabla,cantidad,estructura){
	switch(estructura){
		case "PÁRRAFOS": 
		case "PARRAFOS": hacerParrafos(tabla,cantidad);break;
		case "LISTA": hacerLista(tabla,cantidad);break;
		case "TABLA": hacerTabla(tabla,cantidad);break;
	}			
}


function crearNodoPadreHijo(padre, hijo, tabla, cantidad){

	let nodoPadre=document.createElement(padre);
	nodoPadre.onclick=function(){
		reconstruir(this,tabla,cantidad);
	};
	let nodoHijo,nodoTexto, cadena;
	for(let i=1;i<=cantidad;i++){
		nodoHijo=document.createElement(hijo);
		cadena=tabla+"x"+i+"="+(tabla*i);
		nodoTexto=document.createTextNode(cadena);
		nodoHijo.appendChild(nodoTexto);
		nodoPadre.appendChild(nodoHijo);	
	}		
	document.body.children[0].appendChild(nodoPadre);
}


function hacerParrafos(tablaMultiplicar, numeroElementos){
	
	/*document.write("<div style='border:1px solid black;'>");
	for(let i=1;i<=numeroElementos;i++)
		document.write("<p>"+tablaMultiplicar+"x"+i+"="+(tablaMultiplicar*i)+"</p>");
	document.write("</div>");*/
	
	/*
	let nodoDiv=document.createElement("div");
	nodoDiv.style.border="1px solid black";
	let nodoP,nodoTexto, cadena;
	for(let i=1;i<=numeroElementos;i++){
		nodoP=document.createElement("p");
		cadena=tablaMultiplicar+"x"+i+"="+(tablaMultiplicar*i);
		nodoTexto=document.createTextNode(cadena);
		nodoP.appendChild(nodoTexto);
		nodoDiv.appendChild(nodoP);	
	}*/
	crearNodoPadreHijo("div","p", tablaMultiplicar, numeroElementos);
	let nodoDiv=document.querySelector("div");
	nodoDiv.style.border="1px solid black";
	
	
}

function hacerLista(tablaMultiplicar, numeroElementos){
	
	/*document.write("<ul>");
	for(let i=1;i<=numeroElementos;i++)
		document.write("<li>"+tablaMultiplicar+"x"+i+"="+(tablaMultiplicar*i)+"</li>");
	document.write("</ul>");*/

	/*let nodoUl=document.createElement("ul");
	let nodoLi,nodoTexto, cadena;
	for(let i=1;i<=numeroElementos;i++){
		nodoLi=document.createElement("li");
		cadena=tablaMultiplicar+"x"+i+"="+(tablaMultiplicar*i);
		nodoTexto=document.createTextNode(cadena);
		nodoLi.appendChild(nodoTexto);
		nodoUl.appendChild(nodoLi);	
	}*/
	
	crearNodoPadreHijo("ul","li", tablaMultiplicar, numeroElementos);
	
}

function crearNodoTd(cadena,nodoTR){
	
	let nodoTD=document.createElement("td");
	nodoTD.style.border="1px solid black";
	cadena=cadena;
	let nodoTexto=document.createTextNode(cadena);
	nodoTD.appendChild(nodoTexto);
	nodoTR.appendChild(nodoTD);		

}



function hacerTabla(tablaMultiplicar, numeroElementos){
	
	/*document.write("<table>");
	for(let i=1;i<=numeroElementos;i++){
		document.write("<tr>");
		document.write("<td>"+tablaMultiplicar+"x"+i+"</td>"
						+"<td>=</td>"
						+"<td>"+(tablaMultiplicar*i)+"</td>");
		document.write("</tr>")
	}	
	document.write("</table>");*/
	
	
	let nodoTable=document.createElement("table");
	nodoTable.addEventListener("click",function(){
		reconstruir(this,tablaMultiplicar, numeroElementos);
	});
	nodoTable.style.border="1px solid black";
	nodoTable.style.borderCollapse="collapse";
	
	let nodoTR,nodoTD1, nodoTD2, nodoTD3,
	nodoTexto, cadena;
	for(let i=1;i<=numeroElementos;i++){
		nodoTR=document.createElement("tr");
		
		/*nodoTD1=document.createElement("td");
		cadena=tablaMultiplicar+"x"+i;
		nodoTexto=document.createTextNode(cadena);
		nodoTD1.appendChild(nodoTexto);
		nodoTR.appendChild(nodoTD1);				
		
		nodoTD2=document.createElement("td");
		cadena="=";
		nodoTexto=document.createTextNode(cadena);
		nodoTD2.appendChild(nodoTexto);
		nodoTR.appendChild(nodoTD2);

		nodoTD3=document.createElement("td");
		cadena=tablaMultiplicar*i;
		nodoTexto=document.createTextNode(cadena);
		nodoTD3.appendChild(nodoTexto);
		nodoTR.appendChild(nodoTD3);*/				

		cadena=tablaMultiplicar+"x"+i;
		crearNodoTd(cadena,nodoTR);
		cadena="=";
		crearNodoTd(cadena,nodoTR);
		cadena=tablaMultiplicar*i;
		crearNodoTd(cadena,nodoTR);
		
		nodoTable.appendChild(nodoTR);
	}
	
	document.body.children[0].appendChild(nodoTable);
	
}

function cambiarCSS(nodo,color,colorFondo,tamanyo){
	nodo.style.color=color;
	nodo.style.backgroundColor=colorFondo;
	nodo.style.fontSize=tamanyo;	
}

function sinCss(){
	let estructuraNodo=this.nextElementSibling.nextElementSibling;
	let estructura=estructuraNodo.nodeName;
	this.style.display="none";
	this.nextElementSibling.style.display="block";
	cambiarCSS(estructuraNodo,"black","white","12px");		
}

function conCss(){
	let estructuraNodo=this.nextElementSibling;
	let estructura=estructuraNodo.nodeName;
	this.style.display="none";
	this.previousElementSibling.style.display="block";

	if(estructura=="UL")
		cambiarCSS(estructuraNodo,"white","blue","10px");
	else if(estructura=="TABLE")
		cambiarCSS(estructuraNodo,"white","red","5px");
	else if(estructura=="DIV")
		cambiarCSS(estructuraNodo,"yellow","green","12px");
}



function crearBotones(){
	let boton1=document.createElement("input");
	boton1.type="button";
	boton1.value="SIN CSS";
	boton1.style.display="none";
	boton1.onclick=sinCss;
	document.body.children[0].appendChild(boton1);

	let boton2=document.createElement("input");
	boton2.type="button";
	boton2.value="CON CSS";
	boton2.onclick=conCss;
	document.body.children[0].appendChild(boton2);	
	
}


/* PROGRAMA PRINCIPAL */

function arrancar(tabla,cantidad,estructura){

	crearBotones();
	montarEstructura(tabla,cantidad,estructura);

}

function validar(){
	let tabla=document.formulario.tabla.value;
	if(tabla==""){
		alert("Error!, el valor de tabla no puede ser vacío");
		document.formulario.tabla.focus();
		return false;
	}
	if(isNaN(tabla) || tabla<1 || tabla>10){
		alert("Error!, el valor de tabla no es un número entre 1 y 10");
		document.formulario.tabla.focus();
		return false;				
	}
	let cantidad=document.formulario.cantidad.value;
	if(cantidad==""){
		alert("Error!, el valor de cantidad no puede ser vacío");
		document.formulario.cantidad.focus();
		return false;
	}
	if(isNaN(cantidad) || cantidad<1 || cantidad>10){
		alert("Error!, el valor de cantidad no es un número entre 1 y 10");
		document.formulario.tabla.focus();
		return false;				
	}
	let estructura=document.formulario.estructura.value;			
	if(estructura==""){
		alert("Error!, el valor de estructura no puede ser vacío");
		document.formulario.estructura.focus();
		return false;
	}			
	arrancar();
}




