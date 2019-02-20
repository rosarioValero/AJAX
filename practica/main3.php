<?php
header("access-control-allow-origin: *");

$nombre=$_POST["nombre"];
$email=$_POST["email"];
$telefono=$_POST["telefono"];
$puesto=$_POST["puesto"];

$con = mysqli_connect("localhost","root","") or die(mysqli_error());
mysqli_select_db($con,"empresa_practica") or die(mysqli_error());
$query = "INSERT INTO personas VALUES (null, '$nombre', '$email', $telefono, '$puesto')";
mysqli_query($con,$query);
?>