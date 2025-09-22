<?php

if(!isset($_SESSION)) {
    session_start();
}
// se não estiver logado, manda para login
if(!isset($_SESSION['id'])) {
    header("Location: index.php");
    exit();}

// se a sessão expirou
// if (time() > $_SESSION['expira']) {
//     session_destroy();
//     header("Location: index.php");
//     exit();
// }
?>


