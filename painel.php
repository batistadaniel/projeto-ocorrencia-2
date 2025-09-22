<?php

include('protect.php');

// Calcula o tempo restante da sessao em segundos
$tempoRestante = $_SESSION['expira'] - time();

// Define o fuso horario para Brasilia
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
        // Inicializa a variavel tempo com o tempo restante da sessao vindo do PHP
        let tempo = <?php echo $tempoRestante; ?>;

        // Funcao que atualiza o contador da sessao a cada segundo
        function contagemSessao() {
            if (tempo <= 0) {
                // Se a sessao expirou, redireciona para logout
                window.location.href = "logout.php";
            } else {
                // Calcula minutos e segundos restantes
                let minutos = Math.floor(tempo / 60);
                let segundos = tempo % 60;
                // Atualiza o texto na tela
                document.getElementById("sessao").innerText =
                    minutos + "m " + segundos + "s";
                // Decrementa o tempo
                tempo--;
            }
        }

        // Funcao que atualiza o relogio em tempo real
        function relogio() {
            let agora = new Date();
            let h = agora.getHours().toString().padStart(2, "0");
            let m = agora.getMinutes().toString().padStart(2, "0");
            let s = agora.getSeconds().toString().padStart(2, "0");
            let d = agora.toLocaleDateString("pt-BR");
            document.getElementById("hora").innerText = d + " " + h + ":" + m + ":" + s;
        }

        // Atualiza o contador da sessao a cada segundo
        setInterval(contagemSessao, 1000);

        // Atualiza o relogio a cada segundo
        setInterval(relogio, 1000);
    </script>
</head>
<body onload="relogio(); contagemSessao();">
    <header>
        <!-- Header com nome do usuario, hora atual, tempo de sessao, cracha e link para logout -->
        <p>
            Ola, <?php echo htmlspecialchars($_SESSION['nome']); ?> |
            Data/hora atual: <span id="hora"></span> |
            Sessao expira em: <span id="sessao"></span> |
            Seu crachá: <?php echo htmlspecialgit chars($_SESSION['cracha']); ?> |
            <a href="logout.php">Sair</a>
        </p>
    </header>

</body>
</html>