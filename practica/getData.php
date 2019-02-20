<?php
header('Content-Type: json');

    $data = array();

    con = mysqli_connect("localhost","root","") or die(mysqli_error());
    mysqli_select_db($con,"empresa_practica") or die(mysqli_error());

    $query = "SELECT * FROM personas";

    if ($query->num_rows > 0) {
        $userData = $query->fetch_assoc();
        $data['status'] = 'ok';
        $data['result'] = $userData;
    } else {
        $data['status'] = 'err';
        $data['result'] = '';
    }

    //retorna como JSON formato
    //creamos json
    $json_string = json_decode($data);
    $file = 'personas.json';
    file_put_contents($file, $json_string); 