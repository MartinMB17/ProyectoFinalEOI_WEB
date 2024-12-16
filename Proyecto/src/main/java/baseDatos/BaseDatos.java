package baseDatos;

import java.sql.*;

public class BaseDatos {
	public static Connection con;
	public static String respuesta;
	
	
	public static void conectarMysql(){
		try{
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			con=DriverManager.getConnection("jdbc:mysql://localhost:3306/proyecto","root","");
			if(con!=null) {
				//return con;
				//return con;
				respuesta="OK";
			}
			else
				respuesta="Algo ha ido mal";
				//return null;
				//System.out.println("No conectado a MYSQL");	
			
		}catch(ClassNotFoundException e){
			respuesta="No existe la clase "+ e.getMessage()+" *** " + e.toString();
		}catch(SQLException e2){
			//System.out.println ("Error "+e2.getMessage());
			respuesta="Error "+e2.getMessage();
		}
		
	}
	
}