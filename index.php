<?php

// inclui o arquivo de conexao com o banco
include('conexao.php');

// se usuario (cracha) e senha foram enviados 
if(isset($_POST['usuario']) || isset($_POST['senha'])) {

    // verifica se usuario (cracha) nao esta vazio
    if(strlen($_POST['usuario']) == 0) {
        echo "Preencha seu usuario"; // mensagem de aviso
    } else if(strlen($_POST['senha']) == 0) { // verifica se senha nao esta vazio
        echo "Preencha sua senha"; // mensagem de aviso
    } else {
        // limpa strings antes de serem inseridas na consulta sql
        $cracha = $conn->real_escape_string($_POST['usuario']);
        $senha = $conn->real_escape_string($_POST['senha']);

        // faz a consulta sql
        $sql_code = "SELECT * FROM funcionarios WHERE cracha = '$cracha' AND senha = '$senha'";
        $sql_query = $conn->query($sql_code) or die("Falha na execução do código SQL: " . $conn->error);

        // conta a quantidade de colunas que retorna da consulta
        $quantidade = $sql_query->num_rows;

        // se a quantidade for 1 significa que encontrou o usuario
        if($quantidade == 1) {
            
            // busca uma linha de um conjunto de resultados de uma consulta a um banco de dados e a retorna como um array associativo
            $usuario = $sql_query->fetch_assoc();

            // inicia a sessao
            if(!isset($_SESSION)) {
                session_start();
            }

            // pega as variaveis de sessao
            $_SESSION['id'] = $usuario['id'];
            $_SESSION['nome'] = $usuario['nome'];
            $_SESSION['cracha'] = $usuario['cracha'];

             // guarda o momento que o usuario fez login
            $_SESSION['inicio']  = time();

            // define o tempo de expiracao da sessao (30 minutos)
            $_SESSION['expira']  = $_SESSION['inicio'] + 30 * 60;

            // redireciona para o painel
            header("Location: painel.php");
            exit; // encerra o script

        } else {
            echo "Falha ao logar! Usuario ou senha incorretos";
        }

    }

}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
    <h1>Acesse sua conta</h1>

    <!-- action vazio significa que esta mandando para a propria pagina, POST e o metodo de envio -->
    <form action="" method="POST">
        <p>
            <label for="usuario">Usuario: </label>
            <input type="text" name="usuario" id="usuario">
        </p>
        <p>
            <label for="senha">Senha: </label>
            <input type="password" name="senha" id="senha">
        </p>
        <p>
            <button type="submit">Entrar</button>
        </p>
    </form>
</body>
</html>
