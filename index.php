<?php
include('conexao.php');

if(isset($_POST['usuario']) || isset($_POST['senha'])) {

    if(strlen($_POST['usuario']) == 0) {
        echo "Preencha seu usuario";
    } else if(strlen($_POST['senha']) == 0) {
        echo "Preencha sua senha";
    } else {
        // Certifique-se de que $mysqli está definido em conexao.php
        $cracha = $conn->real_escape_string($_POST['usuario']);
        $senha = $conn->real_escape_string($_POST['senha']);

        $sql_code = "SELECT * FROM funcionarios WHERE cracha = '$cracha' AND senha = '$senha'";
        $sql_query = $conn->query($sql_code) or die("Falha na execução do código SQL: " . $conn->error);

        $quantidade = $sql_query->num_rows;

        if($quantidade == 1) {
            
            $usuario = $sql_query->fetch_assoc();

            if(!isset($_SESSION)) {
                session_start();
            }

            $_SESSION['id'] = $usuario['id'];
            $_SESSION['nome'] = $usuario['nome'];
            $_SESSION['cracha'] = $usuario['cracha'];

             // Guarda o momento que o usuario fez login
            $_SESSION['inicio']  = time();

            // Define o tempo de expiracao da sessao (30 minutos)
            $_SESSION['expira']  = $_SESSION['inicio'] + 30 * 60;


            header("Location: painel.php");
            exit;

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
    <form action="" method="POST">
        <p>
            <label>Usuario: </label>
            <input type="text" name="usuario" id="usuario">
        </p>
        <p>
            <label>Senha: </label>
            <input type="password" name="senha" id="senha">
        </p>
        <p>
            <button type="submit">Entrar</button>
        </p>
    </form>
</body>
</html>
