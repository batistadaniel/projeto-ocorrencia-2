<?php
require_once "conexao.php";

header('Content-Type: application/json'); // Garante JSON antes de qualquer saída

try {
    $db = new Database();
    $conn = $db->conn;

    if ($conn->connect_error) {
        http_response_code(500); // erro interno
        echo json_encode(["error" => "Erro de conexão com o banco: " . $conn->connect_error]);
        exit;
    }

    $sql = "SELECT id, nome FROM situacoes ORDER BY nome ASC";
    $result = $conn->query($sql);

    $situacoes = [];

    if ($result && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $situacoes[] = $row;
        }
    }

    echo json_encode($situacoes);
} catch (Exception $e) {
    http_response_code(500); // erro interno
    echo json_encode(["error" => "Erro inesperado: " . $e->getMessage()]);
}
