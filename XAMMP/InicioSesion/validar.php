<?php
$usuario=$_POST['usuario'];
$contraseña=$_POST['contraseña'];
session_start();
$_SESSION['usuario']=$usuario;

$conexion=mysqli_connect("localhost","root","","quantum");

$consulta="SELECT*FROM usuarios where usuario='$usuario' and contraseña='$contraseña'";
$resultado=mysqli_query($conexion,$consulta);

$filas=mysqli_fetch_array($resultado);

if($filas['id_cargo']==1){ //administrador
    header("location:./PaginaDev/index.php");

}else
if($filas['id_cargo']==2){ //cliente
header("location:./TrabajoToledo/index.php");
}
else{
    header("location:error.php");
}
mysqli_free_result($resultado);
mysqli_close($conexion);