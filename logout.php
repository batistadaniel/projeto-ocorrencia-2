<?php
// Inicia a sessao para poder acessa-la
session_start();

// destroi todas as variaveis e dados da sessao atual
session_destroy();

// redireciona o usuario de volta para a pagina de login
header("Location: index.php");

// encerra a execucao do script para garantir que nada mais sera executado
exit();