<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
  <head>
  	<meta charset="UTF-8">
    <title>EJERCICIO 2</title>
	<link rel="stylesheet" href="css/proyecto.css">
  </head>
  <body>
	<section>
		<form name="formulario" action="grabarOperar.jsp" method="get">
			<fieldset>
				<legend>Tablas de Multiplicar</legend>
				<h1>PROYECTO FINAL</h1>
				<label>
					Usuario:<input type="text" name="usuario">
				</label>
				<label>
					Tabla de Multiplicar:<input size="2" type="text" name="tabla">
				</label>
				<label>
					Cantidad de Números:<input size="2" type="text" name="cantidad">
				</label>	
				<label>
					Estructura:
					<select name="estructura">
						<option value="">-- Elige Estructura --</option>
						<option value="TABLA">TABLA</option>
						<option value="LISTA">LISTA</option>
						<option value="PARRAFOS">PÁRRAFOS</option>
					</select>
				</label>	
				<input name="enviar" type="submit" value="GRABAR">
			</fieldset>
		</form>
	</section>
  </body>
</html>