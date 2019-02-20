<?php 
header("access-control-allow-origin: *");
$departamento = $_GET["puesto"];

$con = mysqli_connect("localhost","root","") or die(mysqli_error());
mysqli_select_db($con,"empresa_practica") or die(mysqli_error());

$query = "SELECT nombre from puesto where departamento LIKE '$departamento'";

$result= mysqli_query($con,$query);
$numReg = mysqli_num_rows($result);
$strHTML = "";

for ($i=0; $i<$numReg; $i++) {
	$row = mysqli_fetch_array($result);
	$strHTML .='<option>'.$row["nombre"].'</option>';
}
echo $strHTML;
?>