<?php
include '../../conexao.php';
header('Content-Type: application/json');

if (isset($_GET['prefixo'])) {
    $prefixo = $_GET['prefixo'];

    $sql = "SELECT v.prefixo, v.setor_id, s.nome AS setor_veiculo
            FROM veiculos v
            LEFT JOIN setor_veiculo s ON v.setor_id = s.id
            WHERE v.prefixo = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $prefixo);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        echo json_encode($row);
    } else {
        echo json_encode(["erro" => "Funcionário não encontrado"]);
    }
}
?>
