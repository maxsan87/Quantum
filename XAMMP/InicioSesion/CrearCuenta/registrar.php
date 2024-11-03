<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Quantum</title>
    <link rel="icon" href="Icon.ico">
</head>
<body>
<?php
$conexion=mysqli_connect("localhost","root","","quantum") or die("Problemas con la conexión");
$id_cargo = 2;

$query = "INSERT INTO usuarios (nombre, usuario, contraseña, id_cargo) VALUES ('$_REQUEST[usuario]', '$_REQUEST[usuario]', '$_REQUEST[contraseña]', '$id_cargo')";
mysqli_query($conexion, $query) or die("Problemas en el select".mysqli_error($conexion));

mysqli_close($conexion);
    ?>
    <form action="../index.php" method="post">
<h1><img src="Iconn.png" alt="" class="icon">Cuenta creada exitosamente!</h1>
        <button type="submit">Volver</button>
</form>
</body>
</html>