<?php
include '../../conexao.php';
header('Content-Type: application/json');

if (isset($_GET['linha'])) {
    $linha = $_GET['linha'];

    $sql = "SELECT l.numero_linha, l.setor_id, s.nome AS setor_linha
            FROM linhas l
            LEFT JOIN setor_linha s ON l.setor_id = s.id
            WHERE l.numero_linha = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $linha);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        echo json_encode($row);
    } else {
        echo json_encode(["erro" => "Funcionário não encontrado"]);
    }
}
?>
