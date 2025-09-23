<?php

// inclui arquivo de protecao para evitar que usuario acesse sem estar logado
include('protect.php');

// calcula o tempo restante da sessao em segundos
$tempoRestante = $_SESSION['expira'] - time();

// define o fuso horario para Brasilia
date_default_timezone_set('America/Sao_Paulo');

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel</title>
     <script>
        // inicializa a variavel tempo com o tempo restante da sessao vindo do php
        let tempo = <?php echo $tempoRestante; ?>;

        // funcao que atualiza o contador da sessao a cada segundo
        function contagemSessao() {
            if (tempo <= 0) {
                // se a sessao expirou, redireciona para logout
                window.location.href = "logout.php";
            } else {
                // calcula minutos e segundos restantes
                let minutos = Math.floor(tempo / 60);
                let segundos = tempo % 60;
                // atualiza o texto na tela
                document.getElementById("sessao").innerText =
                    minutos + "m " + segundos + "s";
                // decrementa o tempo
                tempo--;
            }
        }

        // funcao que atualiza o relogio em tempo real
        function relogio() {
            let agora = new Date();
            let h = agora.getHours().toString().padStart(2, "0");
            let m = agora.getMinutes().toString().padStart(2, "0");
            let s = agora.getSeconds().toString().padStart(2, "0");
            let d = agora.toLocaleDateString("pt-BR");
            document.getElementById("hora").innerText = d + " " + h + ":" + m + ":" + s;
        }

        // atualiza o contador da sessao a cada segundo
        setInterval(contagemSessao, 1000);

        // atualiza o relogio a cada segundo
        setInterval(relogio, 1000);
    </script>
</head>
<body onload="relogio(); contagemSessao();">
    <header>
        <!-- header com nome do usuario, hora atual, tempo de sessao, cracha e link para logout -->
        <div class="informacoesSessao" id="informacoesSessao" style="display: flex; justify-content: space-between;">
            <p>
                Ola, <?php echo htmlspecialchars($_SESSION['nome']); ?> |
                Seu crachá: <?php echo htmlspecialchars($_SESSION['cracha']); ?> |
                Data/hora atual: <span id="hora"></span> |
                Sessao expira em: <span id="sessao"></span> 
            </p>
            <p >
                <a href="logout.php">Sair</a>
            </p>
        </div>
    </header>

</body>
</html>