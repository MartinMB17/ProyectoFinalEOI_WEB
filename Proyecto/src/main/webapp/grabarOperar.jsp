<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>  
<%@ page import="baseDatos.BaseDatos" %>     
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	<script src="js/proyecto.js"></script>
	<link rel="stylesheet" href="css/proyecto.css">
</head>
<body>
	<section>
	<%
		String us=request.getParameter("usuario");
		int t=Integer.parseInt(request.getParameter("tabla"));
		int cant=Integer.parseInt(request.getParameter("cantidad"));
		String estr=request.getParameter("estructura");
		BaseDatos.conectarMysql();
		//out.println(BaseDatos.respuesta);
		int filas=0;
		if(BaseDatos.respuesta=="OK"){
			PreparedStatement preparacion=
					BaseDatos.con.prepareStatement
					("insert into operaciones (usuario,tabla,cantidad,estructura) values (?,?,?,?)");	
			preparacion.setString(1,us);
			preparacion.setInt(2,t);
			preparacion.setInt(3,cant);
			preparacion.setString(4,estr);
			
			filas=preparacion.executeUpdate();
		}
		//out.println("Cantidad de Filas insertadas:"+filas);
		if(filas>0){	
	%>
		<script>
			arrancar(<%=t%>,<%=cant%>,"<%=estr%>");
			alert("Operación realizada correctamente")
		</script>
	<%}else{ %>
		<script>
			arrancar(<%=t%>,<%=cant%>,"<%=estr%>");
			alert("Error!, la inserción ha fallado "+"<%=BaseDatos.respuesta%>")
		</script>
	<%} %>	
	</section>
	<p><a href="index.html">Volver al Index</a></p>
	
</body>
</html>