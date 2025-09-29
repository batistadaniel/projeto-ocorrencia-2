<?php
include '../../conexao.php';
header('Content-Type: application/json');

if (isset($_GET['crachaFuncionario'])) {
    $cracha = $_GET['crachaFuncionario'];

    $sql = "SELECT f.cracha, f.nome, f.setor_id, s.nome AS setor_nome
            FROM funcionarios f
            LEFT JOIN setor_funcionario s ON f.setor_id = s.id
            WHERE f.cracha = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $cracha);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        echo json_encode($row);
    } else {
        echo json_encode(["erro" => "Funcionário não encontrado"]);
    }
}
?>
