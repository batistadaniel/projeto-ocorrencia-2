<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include('conexao.php');

if(isset($_POST['usuario']) || isset($_POST['senha'])) {
    if(strlen($_POST['usuario']) == 0) {
        $erro = "⚠️ Preencha seu usuário.";
    } else if(strlen($_POST['senha']) == 0) {
        $erro = "⚠️ Preencha sua senha.";
    } else {
        $cracha = $conn->real_escape_string($_POST['usuario']);
        $senha = $conn->real_escape_string($_POST['senha']);

        $sql_code = "SELECT * FROM funcionarios WHERE cracha = '$cracha' AND senha = '$senha'";
        $sql_query = $conn->query($sql_code) or die("Falha na execução do código SQL: " . $conn->error);

        if($sql_query->num_rows == 1) {
            $usuario = $sql_query->fetch_assoc();

            if(!isset($_SESSION)) session_start();

            $_SESSION['id'] = $usuario['id'];
            $_SESSION['nome'] = $usuario['nome'];
            $_SESSION['cracha'] = $usuario['cracha'];
            $_SESSION['inicio']  = time();
            $_SESSION['expira']  = $_SESSION['inicio'] + 30 * 60;

            header("Location: painel.php");
            exit;
        } else {
            $erro = "❌ Usuário ou senha incorretos.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>BsBus Mobilidade</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: Arial, sans-serif;
            background-image: url('https://bsbusmobilidade.com.br/way/images/demo/backgrounds/05.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            min-height: 100vh;
        }

        /* Top bar */
        .top-bar {
            background-color: rgba(5, 43, 9, 0.9);
            color: white;
            display: flex;
            align-items: center;
            padding: 10px 30px;
            font-size: 14px;
            flex-wrap: wrap;
        }

        .top-bar .left span {
            margin-right: 15px;
        }

        .top-bar .right form {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .top-bar input[type="text"],
        .top-bar input[type="password"] {
            padding: 5px;
            font-size: 13px;
            border: none;
            border-radius: 2px;
             background-color: #1a5223ff;
             
        }

        .top-bar button {
            padding: 5px 10px;
            background-color: #1f4f4d;
            border: none;
            color: white;
            cursor: pointer;
            font-weight: bold;
        }

        .top-bar button:hover {
            background-color: #172eb6ff;
        }

        .right {
            margin-left: auto;
        }

        /* Logo + Faixa */
        .logo-section {
            background-color: rgba(197, 214, 197, 0.9);
            padding: 25px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 25px;
        }

        .logo-section img {
            height: 80px;
            width: auto;
        }

        .logo-section .faixa {
            height: 80px;
            width: auto;
        }

        /* Menu */
        .menu {
            background-color: rgba(41, 71, 71, 0.95);
            color: white;
            padding: 15px;
            display: flex;
            justify-content: center;
            font-size: 15px;
            gap: 25px;
            font-weight: bold;
        }

        .menu a {
            color: white;
            text-decoration: none;
        }

        .menu a:hover {
            color: #d4ff00;
        }

        /* Erro */
        .erro {
            text-align: center;
            padding: 10px;
            color: white;
            background-color: #c0392b;
            margin-top: 10px;
            font-weight: bold;
            display:none;
        }

        /* Responsivo */
        @media (max-width: 768px) {
            .top-bar {
                flex-direction: column;
                align-items: flex-start;
            }

            .top-bar .right {
                margin-top: 10px;
                width: 100%;
            }

            .logo-section {
                flex-direction: column;
            }

            .menu {
                flex-direction: column;
                align-items: center;
            }

            .logo-section img {
                height: 60px;
            }
        }
    </style>
</head>

<body>

    <!-- Barra superior -->
    <div class="top-bar">
        <div class="left">
            <span>🏠 BEM-VINDO!</span>
            <span id="data-hora">⌚ Carregando...</span>
        </div>

        <div class="right">
            <form method="POST">
                <span>👤    ÁREA RESTRITA</span>
                <input type="text" name="usuario" placeholder="Usuário" required>
                <input type="password" name="senha" placeholder="Senha" required>
                <button type="submit">Entrar</button>
            </form>
        </div>
    </div>

    <!-- Logo + Ícones -->
    <div class="logo-section">
        <img src="https://bsbusmobilidade.com.br/way/images/demo/bsb4.svg" alt="Logo BsBus">
        <img src="https://bsbusmobilidade.com.br/way/images/demo/faixas4.png" alt="Faixa ícones" class="faixa">
    </div>

    <!-- Menu -->
    <div class="menu">
        <a href="#">INÍCIO</a>
        
    </div>

    <!-- Erro -->
    <?php if (isset($erro)): ?>
        <div class="erro"><?= $erro ?></div>
    <?php endif; ?>

    <!-- Script de hora -->
    <script>
        function atualizarDataHora() {
            const agora = new Date();
            const formatada = agora.toLocaleDateString("pt-BR", {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            document.getElementById("data-hora").innerHTML = `📅 ${formatada.toUpperCase()}`;
        }

        atualizarDataHora();
        setInterval(atualizarDataHora, 60000);
    </script>

</body>
</html>
