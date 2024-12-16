<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>  
<%@ page import="baseDatos.BaseDatos" %>  
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	<link rel="stylesheet" href="css/proyecto.css">
	<style>
		table,td,th{
			border:1px solid black;
		}
		table{
			width:100%;
		}
	</style>
</head>
<body>
	<section>
		<%
		
		/*1- CONECTAR A LA BD*/
		BaseDatos.conectarMysql();
		Connection con=BaseDatos.con;
		
		/*2- RECUPERAR EL USUARIO DE LA PANTALLA DEL INDEX*/
		String usuario=request.getParameter("usuario");
		
		/*3- HACER EL CREATESTATEMENT CON LA SELECT*/
		Statement st;
		st=con.createStatement();
		
		/*4- EJECUTAR LA SELECT CON EXECUTEQUERY
		     LA SELECT TENDRÉIS QUE FILTRAR POR USUARIO (WHERE)
		*/
		ResultSet rs=st.executeQuery("select * from operaciones where usuario = '"+usuario+"'");

		/*5- NEXT(). BUCLE RECORRA LAS FILAS Y LAS MONTE EN UNA LISTA UL*/
		out.println("<table>");
		out.println("<tr><th>ORDEN</th>"+
				"<th>ID</th> "+
			    "<th>USUARIO</th> "+
			    "<th>TABLA</th> "+
			    "<th>CANTIDAD</th> "+
			    "<th colspan='2'>ESTRUCTURA</th>"+
				 "</tr>");
		int id;
		while(rs.next()){
			id=rs.getInt("id");
		
			out.println("<tr><td>"+rs.getRow()+"</td>"+
						"<td><a href='formulario.jsp?id="+id+"'>"+id+"</a></td>"+
					    "<td>"+rs.getString("usuario")+"</td> "+
					    "<td>"+rs.getInt("tabla")+"</td> "+
					    "<td>"+rs.getInt("cantidad")+"</td> "+
					    "<td>"+rs.getString("estructura")+"</td>"+
					    "<td><input type='button' value='BORRAR'></td>"+
						 "</tr>");
		}
		out.println("</table>");
		
		%>
	
	</section>
	<p><a href="index.html">Volver al Index</a></p>
</body>
</html>