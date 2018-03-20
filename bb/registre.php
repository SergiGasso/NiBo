<?php
	/*include("conexion.php");*/

	$host = "localhost";
	$user = "ninoborracho";
	$pw = "123qwe";
	$db = "ninoborracho";

	if(isset($_POST['titol']) && !empty($_POST['titol']) &&
	isset($_POST['desc']) && !empty($_POST['desc']))
	{
		$titol = $_POST['titol'];
		$desc = $_POST['desc'];
		$con=mysqli_connect($host,$user,$pw) or die("Problema");
		mysqli_select_db($con,$db) or die("problema");
		
		$sql = "INSERT INTO post(Titol,Descripcio) VALUES ('$titol','$desc')";

		
		mysqli_query($con, $sql);
		echo "datos insertados";
	}
	else{
		echo"problemas al insertar datos";
	}
	mysqli_close($con);

?>