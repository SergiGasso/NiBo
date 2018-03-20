<?php
	include("conexion.php");

	if(isset($_POST['titol']) && !empty($_POST['titol']) &&
	isset($_POST['desc']) && !empty($_POST['desc']))
	{
		$con=mysql_connect($host,$user,$pw)) or die("Problema");
		mysql_select_db($db,$con) or die("problema");
		
		$titol = $_POST['titol'];
		$desc=$_POST['desc'];
		
		mysql_query("INSERT INTO post(Titol,Descripcio) VALUES ('$titol','$desc')",$con);
		echo"datos insertados";
	}
	else{
		echo"problemas al insertar datos";
	}
?>