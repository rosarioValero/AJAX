function seleccionar3() {
	$departamento = document.getElementById("seleccion").value;
	seleccionar2($departamento);
}


function crear() {

	document.getElementById("crearDiv").innerHTML = "<br>Departamento : <select id='seleccion' onclick='seleccionar3()'></select><br>Puesto: <select id='puesto'></select><br><br>Nombre<br><input type='text' name='nombre' id='nombre'><br><br>Email<br><input type='email' name='email' id='email'><br><br>Telefono<br><input type='text' name='telefono' id='telefono'><br><br><button onclick='registro()'>Enviar</button>";

	seleccionar();

}

function seleccionar() {

	var rxmlhttp;
	rxmlhttp = new XMLHttpRequest();

	rxmlhttp.onreadystatechange = function () {
		if (rxmlhttp.readyState == 4 && rxmlhttp.status == 200) {
			document.getElementById("seleccion").innerHTML = rxmlhttp.responseText;
			$departamento = document.getElementById("seleccion").value;
			seleccionar2($departamento);
		}
	}

	rxmlhttp.open("GET", "http://127.0.0.1/AJAX/practica/main2.php", true);
	rxmlhttp.send();


}

function seleccionar2($departamento) {

	var rxmlhttp;
	rxmlhttp = new XMLHttpRequest();

	rxmlhttp.onreadystatechange = function () {
		if (rxmlhttp.readyState == 4 && rxmlhttp.status == 200) {
			document.getElementById("puesto").innerHTML = rxmlhttp.responseText;
		}
	}

	rxmlhttp.open("GET", "http://127.0.0.1/AJAX/practica/main1.php?puesto=" + $departamento, true);
	rxmlhttp.send();
}

function registro3() {
	var rxmlhttp;
	rxmlhttp = new XMLHttpRequest();

	rxmlhttp.onreadystatechange = function () {
		if (rxmlhttp.readyState == 4 && rxmlhttp.status == 200) {
			document.getElementById("seleccion").innerHTML = rxmlhttp.responseText;
		}
	}

	rxmlhttp.open("GET", "http://127.0.0.1/AJAX/practica/main2.php", true);
	rxmlhttp.send();
}

function registro() {
	var sel2 = document.getElementById("puesto").value;
	var inp1 = document.getElementById("nombre").value;
	var inp2 = document.getElementById("email").value;
	var inp3 = document.getElementById("telefono").value;
	var rxmlhttp = new XMLHttpRequest();

	rxmlhttp.onreadystatechange = function() {
		if (rxmlhttp.readyState == 4 && rxmlhttp.status == 200) {
			document.getElementById("crearDiv").innerHTML = 'Guardado con exito';
		}
	}

	rxmlhttp.open("POST", "http://127.0.0.1/AJAX/practica/main3.php",true);

	rxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	rxmlhttp.send("puesto=" + sel2 + "&nombre=" + inp1 + "&email=" + inp2 + "&telefono=" + inp3);
} 




function rellenar() {
	var rxmlhttp;
	rxmlhttp = new XMLHttpRequest();

	rxmlhttp.onreadystatechange = function () {
		if(rxmlhttp.readyState == 4 && rxmlhttp.status == 200) {
			document.getElementById("crearDiv").innerHTML = "<select id='seleccion' onclick='rellenar2()'><br>";
			document.getElementById("tabla").innerHTML = rxmlhttp.responseText;
			registro3();
		}
	}

	rxmlhttp.open("GET","http://127.0.0.1/AJAX/practica/main4.php", true);
	rxmlhttp.send();
}

function rellenar2() {
	$departamento = document.getElementById("seleccion").value;
	var rxmlhttp;
	rxmlhttp = new XMLHttpRequest();

	rxmlhttp.onreadystatechange = function () {
		if (rxmlhttp.readyState == 4 && rxmlhttp.status == 200) {
			document.getElementById("tabla").innerHTML = rxmlhttp.responseText;
			crear_json();
		}
	}

	rxmlhttp.open("GET", "http://127.0.0.1/AJAX/practica/main4.php?seleccion=" + $departamento, true);
	rxmlhttp.send();
}

function crear_json (){
	console.log("prueba");
	$documento = function(){
		$('#tabla').on('click', function(){
			var nombre = $('#nombre').val();
			$.ajax({
				type: 'POST',
				url: 'getData.php',
				dataType: 'json',
				data: {nombre:nombre},
				succes:function(data){
					if(data.status == 'ok'){
						$('#nombre').text(data.result.nombre);
						$('#email').text(data.result.email);
						$('#telefono').text(data.result.telefono);
						$('#puesto').text(data.result.puesto);
					} else {
						alert("Usuario no encontrado.....");
					}
				}
			})
		})
	}
}
