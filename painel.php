<?php
include('protect.php');

$tempoRestante = $_SESSION['expira'] - time();
date_default_timezone_set('America/Sao_Paulo');
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel BsBus</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-image: url('https://bsbusmobilidade.com.br/way/images/demo/backgrounds/05.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            min-height: 100vh;
            color: #101110ff;
        }

        /* MENU SUPERIOR */
        .menu-topo {
            background-color: #076334ff;
            padding: 15px 0;
            text-align: center;
        }

        .menu-topo ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: inline-flex;
            gap: 40px;
            flex-wrap: wrap;
        }

        .menu-topo ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            font-size: 15px;
            transition: color 0.3s;
        }

        .menu-topo ul li.ativo a,
        .menu-topo ul li a:hover {
            color: #d4ff00; /* Verde-limão */
        }

        /* FAIXA CENTRAL */
        .faixa-central {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 25px 0;
            background-color: rgba(24, 51, 26, 0.8);
        }

        .faixa-central img {
            max-width: 100%;
            height: auto;
        }

        /* CATEGORIAS */
        .categorias {
            text-align: center;
            padding: 25px 0;
            background-color:rgba(24, 51, 26, 0.8);
        }

        .categorias a {
            margin: 0 20px;
            display: inline-block;
            text-decoration: none;
            font-weight: bold;
            color: #003434;
            font-size: 16px;
            padding: 12px 20px;
            border: 2px solid #033e20ff;
            border-radius: 5px;
            background-color: #ffffff;
            transition: all 0.3s ease;
        }

        .categorias a:hover {
            background-color: #003434;
            color: #ffffff;
        }

        /* HEADER - Sessão */
        header {
            position:sticky;
            top:0;
            width: 100%;
            background-color: rgba(0, 32, 63, 0.85);
            padding: 15px 30px;
            font-size: 15px;
            font-weight: 500;
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        header a {
            color: #d4ff00;
            text-decoration: none;
        }

        header a:hover {
            text-decoration: underline;
        }

        .container {
            display: flex;
            min-height: calc(100vh - 60px);
        }

        .sidebar {
            width: 250px;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px;
        }

        .sidebar ul {
            list-style: none;
        }

        .sidebar li {
            margin-bottom: 15px;
        }

        .sidebar a {
            font-weight: bold;
            color: #ffffff;
            transition: color 0.3s;
            text-decoration: none;
        }

        .sidebar a:hover {
            color: #d4ff00;
        }

        .content {
            flex: 1;
            padding: 30px;
            background-color: rgba(255, 255, 255, 0.85);
            overflow-y: auto;
        }

        #nomeFuncionario{
            background-color:#d4ff00;
        }

        /* RESPONSIVO */
        @media (max-width: 768px) {
            .container {
                flex-direction: column;
            }

            .sidebar {
                width: 100%;
            }

            .content {
                padding: 15px;
            }

            header {
                font-size: 14px;
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }

            .menu-topo ul {
                flex-direction: column;
                gap: 15px;
            }

            .categorias a {
                display: block;
                margin: 10px auto;
                width: 80%;
            }

            .faixa-central img {
                width: 90%;
            }
        }
    </style>

    <script>
        let tempo = <?php echo $tempoRestante; ?>;

        function contagemSessao() {
            if (tempo <= 0) {
                window.location.href = "logout.php";
            } else {
                let minutos = Math.floor(tempo / 60);
                let segundos = tempo % 60;
                document.getElementById("sessao").innerText =
                    minutos + "m " + segundos + "s";
                tempo--;
            }
        }

        function relogio() {
            let agora = new Date();
            let h = agora.getHours().toString().padStart(2, "0");
            let m = agora.getMinutes().toString().padStart(2, "0");
            let s = agora.getSeconds().toString().padStart(2, "0");
            let d = agora.toLocaleDateString("pt-BR");
            document.getElementById("hora").innerText = d + " " + h + ":" + m + ":" + s;
        }

        setInterval(contagemSessao, 1000);
        setInterval(relogio, 1000);
    </script>
</head>
<body onload="relogio(); contagemSessao();">

    <!-- HEADER DE SESSÃO -->
    <header>
        <div>
            Olá, <strong><?php echo htmlspecialchars($_SESSION['nome']); ?></strong> |
            Crachá: <strong><?php echo htmlspecialchars($_SESSION['cracha']); ?></strong> |
            Data/hora atual: <span id="hora"></span> |
            Sessão expira em: <span id="sessao"></span>
        </div>
        <div>
            <a href="logout.php">🔓 Sair</a>
        </div>
    </header> 

    <!-- FAIXA CENTRAL COM IMAGEM -->
    <div class="faixa-central">
        <img src="https://bsbusmobilidade.com.br/way/images/demo/faixas4.png" alt="Faixa BsBus">
    </div>

  

  

    <!-- CONTEÚDO -->
    <div class="container">
        <aside class="sidebar">
            <nav>
                <ul>
                    <li><a href="cadastro-ocorrencia.php">➕ Cadastrar Ocorrência</a></li>
                    <li><a href="ocorrencia-cadastrada.php">📋 Ocorrências a Revisar</a></li>
                    <li><a href="ocorrencia-revisada.php">✅ Ocorrências Revisadas</a></li>
                </ul>
            </nav>
        </aside>

        <main class="content">
              <!-- CATEGORIAS -->
    <div class="categorias">
        <a href="cadastro-ocorrencia.php">➕ Cadastrar Ocorrência</a>
        <a href="ocorrencia-cadastrada.php">📋 Ocorrências a Revisar</a>
        <a href="ocorrencia-revisada.php">✅ Ocorrências Revisadas</a>
    </div>

            <?php include "cadastro-ocorrencia.php"; ?>
        </main>
    </div>
</body>
</html>
