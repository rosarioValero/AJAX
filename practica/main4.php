<?php
header("access-control-allow-origin: *");

$con = mysqli_connect("localhost","root","") or die(mysqli_error());
mysqli_select_db($con,"empresa_practica") or die(mysqli_error());

if(!isset($_GET["seleccion"])){
	$query = "SELECT * FROM personas";

	$result = mysqli_query($con,$query);
	$numReg = mysqli_num_rows($result);
	$strHTML = "<table><tr><th>Nombre</th><th>Email</th><th>Telefono</th><th>Puesto</th></tr>";

	for ($i=0; $i<$numReg; $i++) {
		$row = mysqli_fetch_array($result);
		$strHTML .="<tr><td>".$row["nombre"]."</td><td>".$row["email"]."</td><td>".$row["telefono"]."</td><td>".$row["puesto"]."</td></tr>";
	}
	$strHTML .="</table>";
} else {
	$departamento = $_GET["seleccion"];
	$query = "SELECT * FROM personas WHERE puesto IN (SELECT nombre FROM puesto WHERE departamento LIKE '$departamento')";

	$result = mysqli_query($con,$query);
	$numReg = mysqli_num_rows($result);
	$strHTML = "<table><tr><th>Nombre</th><th>Email</th><th>Telefono</th><th>Puesto</th></tr>";

	for ($i=0; $i<$numReg; $i++) {
		$row = mysqli_fetch_array($result);
		$strHTML .="<tr><td>".$row["nombre"]."</td><td>".$row["email"]."</td><td>".$row["telefono"]."</td><td>".$row["puesto"]."</td></tr>";
	}
	$strHTML .="</table>";
}

echo $strHTML;
?>