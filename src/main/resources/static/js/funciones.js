function cargar(pagina){
    $('#formularios').load(pagina);
}
//FUNCIONES DE CAJERO
function enviarcajero()
{
		var nombre=$("#txtnombre").val();
		var direccion = $("#txtdireccion").val();
		var telefono = $("#txttelefono").val();
		var correo = $("#txtcorreo").val();
		var contrasena = $("#txtcontrasena").val();

		$.post("registrarcajero.php",{"nombre":nombre,"direccion":direccion,"telefono":telefono,"correo":correo,"contrasena":contrasena},function(respuesta){
			alert(respuesta);
			$("#txtnombre").val("");
			$("#txtdireccion").val("");
			$("#txttelefono").val("");
			$("#txtcorreo").val("");
			$("#txtcontrasena").val("");
			consultacajero();
		});
}
function consultacajero()
{
		var nombre=$("#txtnombre").val();
		$.post("buscarcajero.php",{"nombre":nombre},function(respuesta){
			consulta.innerHTML = respuesta;
			$("#txtnombre").val("");

		});
}
function eliminarcajero(id)
{
	 	var opcion = confirm("Realmente quieres eliminar el registro: "+id);
		if (opcion == true) {
		$.post("eliminarcajero.php",{"id":id},function(respuesta){
			consulta.innerHTML = respuesta;


		});
	}else{

	}
}
function actualizarcajero(id)
{
		$.post("actualizarcajero.php",{"id":id},function(respuesta){
			frm.innerHTML = respuesta;


		});
}
function enviaracajero(id)
{
		var nombre=$("#txtnombre").val();
		var direccion = $("#txtdireccion").val();
		var telefono = $("#txttelefono").val();
		var correo = $("#txtcorreo").val();
		var contrasena = $("#txtcontrasena").val();

		$.post("updatecajero.php",{"id":id,"nombre":nombre,"direccion":direccion,"telefono":telefono,"correo":correo,"contrasena":contrasena},function(respuesta){
			frm.innerHTML = respuesta;
		});
}
//FUNCIONES DE CLIENTE
function enviarcliente()
{
		var nombre=$("#txtnombre").val();
		var direccion = $("#txtdireccion").val();
		var telefono = $("#txttelefono").val();
		var correo = $("#txtcorreo").val();

		$.post("registrarcliente.php",{"nombre":nombre,"direccion":direccion,"telefono":telefono,"correo":correo},function(respuesta){
			alert(respuesta);
			$("#txtnombre").val("");
			$("#txtdireccion").val("");
			$("#txttelefono").val("");
			$("#txtcorreo").val("");
			consultarcliente();
		});
}
function consultarcliente()
{
		var nombre=$("#txtnombre").val();
		$.post("buscarcliente.php",{"nombre":nombre},function(respuesta){
			consulta.innerHTML = respuesta;
			$("#txtnombre").val("");

		});
}
function eliminarcliente(id)
{
	 	var opcion = confirm("Realmente quieres eliminar el registro: "+id);
		if (opcion == true) {
		$.post("eliminarcliente.php",{"id":id},function(respuesta){
			consulta.innerHTML = respuesta;


		});
	}else{
		
	}
}
function actualizarcliente(id)
{
		$.post("actualizarcliente.php",{"id":id},function(respuesta){
			frm.innerHTML = respuesta;
		});
}
function enviaracliente(id)
{
		var nombre=$("#txtnombre").val();
		var direccion = $("#txtdireccion").val();
		var telefono = $("#txttelefono").val();
		var correo = $("#txtcorreo").val();

		$.post("updatecliente.php",{"id":id,"nombre":nombre,"direccion":direccion,"telefono":telefono,"correo":correo},function(respuesta){
			frm.innerHTML = respuesta;
		});
}
//FUNCIONES VEHICULO
function enviarvehiculo()
{
		var matricula=$("#txtmatricula").val();
		var color = $("#txtcolor").val();
		var marca = $("#txtmarca").val();
		var modelo = $("#txtmodelo").val();
		var idcliente = $("#txtidcliente").val();

		$.post("registrarvehiculo.php",{"matricula":matricula,"color":color,"marca":marca,"modelo":modelo,"idcliente":idcliente},function(respuesta){
			alert(respuesta);
			$("#txtmatricula").val("");
			$("#txtcolor").val("");
			$("#txtmarca").val("");
			$("#txtmodelo").val("");
			$("#txtidcliente").val("");
			consultarvehiculo();
		});
}
function consultarvehiculo()
{
		var matricula=$("#txtmatricula").val();
		$.post("buscarvehiculo.php",{"matricula":matricula},function(respuesta){
			consulta.innerHTML = respuesta;
			$("#txtmatricula").val("");

		});
}
function eliminarvehiculo(id)
{
	 	var opcion = confirm("Realmente quieres eliminar el registro: "+id);
		if (opcion == true) {
		$.post("eliminarvehiculo.php",{"matricula":id},function(respuesta){
			consulta.innerHTML = respuesta;


		});
	}else{
		
	}
}
function actualizarvehiculo(id)
{
		$.post("actualizarvehiculo.php",{"matricula":id},function(respuesta){
			frm.innerHTML = respuesta;


		});
}
function enviaravehiculo()
{
		var matricula=$("#txtmatricula").val();
		var color = $("#txtcolor").val();
		var marca = $("#txtmarca").val();
		var modelo = $("#txtmodelo").val();
		var idcliente = $("#txtidcliente").val();

		$.post("updatevehiculo.php",{"matricula":matricula,"color":color,"marca":marca,"modelo":modelo,"idcliente":idcliente},function(respuesta){
			frm.innerHTML = respuesta;
		});
}
//FUNCIONES LAVADOR
function enviarlavador()
{
		var nombre=$("#txtnombre").val();
		var direccion = $("#txtdireccion").val();
		var telefono = $("#txttelefono").val();

		$.post("registrarlavador.php",{"nombre":nombre,"direccion":direccion,"telefono":telefono},function(respuesta){
			alert(respuesta);
			$("#txtnombre").val("");
			$("#txtdireccion").val("");
			$("#txttelefono").val("");
			consultarlavador();
		});
}
function consultarlavador()
{
		var nombre=$("#txtnombre").val();
		$.post("buscarlavador.php",{"nombre":nombre},function(respuesta){
			consulta.innerHTML = respuesta;
			$("#txtnombre").val("");

		});
}
function eliminarlavador(id)
{
	 	var opcion = confirm("Realmente quieres eliminar el registro: "+id);
		if (opcion == true) {
		$.post("eliminarlavador.php",{"idlavador":id},function(respuesta){
			consulta.innerHTML = respuesta;
		});
	}else{
		
	}
}
function actualizarlavador(id)
{
		$.post("actualizalavador.php",{"idlavador":id},function(respuesta){
			frm.innerHTML = respuesta;
		});
}
function enviaralavador(id)
{
		var nombre=$("#txtnombre").val();
		var direccion = $("#txtdireccion").val();
		var telefono = $("#txttelefono").val();

		$.post("updatelavador.php",{"idlavador":id,"nombre":nombre,"direccion":direccion,"telefono":telefono},function(respuesta){
			frm.innerHTML = respuesta;
		});
}
//FUNCIONES SERVICIOS
function enviarsevicio()
{
		var nombre=$("#txtnombre").val();
		var costo = $("#txtcosto").val();
		$.post("registrarservicio.php",{"nombre":nombre,"costo":costo},function(respuesta){
			alert(respuesta);
			$("#txtnombre").val("");
			$("#txtcosto").val("");
			consultaservicio();
		});
}
function consultaservicio()
{
		var nombre=$("#txtnombre").val();
		$.post("buscarservicio.php",{"servicio":nombre},function(respuesta){
			consulta.innerHTML = respuesta;
			$("#txtnombre").val("");

		});
}
function eliminarservicio(id)
{
	 	var opcion = confirm("Realmente quieres eliminar el registro: "+id);
		if (opcion == true) {
		$.post("eliminarservicio.php",{"id":id},function(respuesta){
			consulta.innerHTML = respuesta;
		});
	}else{
		
	}
}
function actualizarservicio(id)
{
		$.post("actualizarservicio.php",{"id":id},function(respuesta){
			frm.innerHTML = respuesta;
		});
}
function enviaraservicio(id)
{
		var nombre=$("#txtnombre").val();
		var costo = $("#txtcosto").val();
alert(id+nombre+costo);
		$.post("updateservicio.php",{"id":id,"servicio":nombre,"costo":costo},function(respuesta){
			frm.innerHTML = respuesta;
		});
}
//FUNCIONES ASIGNAR
function enviarasignacion()
{
		var fecha=$("#txtfecha").val();
		var idvehiculo = $("#txtidvehiculo").val();
		var idlavador = $("#txtidlavador").val();
		var idservicio = $("#txtidservicio").val();


		$.post("registrarasignacion.php",{"fecha":fecha,"idvehiculo":idvehiculo,"idlavador":idlavador,"idservicio":idservicio},function(respuesta){
			alert(respuesta);
			consultaasignacion();
		});
}
function consultaasignacion()
{
		var fecha=$("#txtfecha").val();
		var idvehiculo = $("#txtidvehiculo").val();

		$.post("buscarasignacion.php",{"fecha":fecha,"idvehiculo":idvehiculo},function(respuesta){
			consulta.innerHTML = respuesta;
		});
}
function enviartiket()
{
		var fecha=$("#txtfecha").val();
		var idvehiculo = $("#txtidvehiculo").val();

		$.post("generartiket.php",{"fecha":fecha,"idvehiculo":idvehiculo},function(respuesta){
			consulta.innerHTML = respuesta;
		});
}
function imprimirtiket(consulta) {
     var consulta2=document.getElementById(consulta).innerHTML;
     var contenidoOriginal= document.body.innerHTML;

     document.body.innerHTML = consulta2;

     window.print();

     document.body.innerHTML = contenidoOriginal;
}
/*function eliminarservicio(id)
{
	 	var opcion = confirm("Realmente quieres eliminar el registro: "+id);
		if (opcion == true) {
		$.post("eliminarservicio.php",{"id":id},function(respuesta){
			consulta.innerHTML = respuesta;
		});
	}else{
		
	}
}
function actualizarservicio(id)
{
		$.post("actualizarservicio.php",{"id":id},function(respuesta){
			frm.innerHTML = respuesta;
		});
}
function enviaraservicio(id)
{
		var nombre=$("#txtnombre").val();
		var costo = $("#txtcosto").val();
alert(id+nombre+costo);
		$.post("updateservicio.php",{"id":id,"servicio":nombre,"costo":costo},function(respuesta){
			frm.innerHTML = respuesta;
		});
}*/