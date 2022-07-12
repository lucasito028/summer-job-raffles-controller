<?php

include('../../../conn/conn.php');


$requestData = $_REQUEST;

session_start();

$id = $_SESSION['ID'];

$colunas = $requestData['columns'];

$sql = "SELECT * FROM PRODUTO WHERE EMPRESA_ID = $id AND 1=1 ";

$resultado = $pdo->query($sql);

$qtdeLinha = $resultado->rowCount();

$filtro = $requestData['search']['value'];

if(!empty($filtro)){

    $sql .= " AND (ID LIKE '$filtro%' ";
    $sql .= " OR NOME LIKE '$filtro%') ";
    $sql .= " OR VALOR LIKE '$filtro%') ";
}

$resultado = $pdo->query($sql);
$total = $resultado->rowCount();

$colunaOrdem = $requestData['order'][0]['column'];
$ordem = $colunas[$colunaOrdem]['data'];
$direcao = $requestData['order'][0]['dir'];

$inicio = $requestData['start'];
$tamanho = $requestData['length'];

$sql .= " ORDER BY $ordem $direcao LIMIT $inicio, $tamanho ";
$resultado = $pdo->query($sql);
$dados = array();

while($row = $resultado -> fetch(PDO::FETCH_ASSOC)){
    $dados[] = array_map('utf8_encode', $row);
}

$json_data = array(
    "draw" => intval($requestData['draw']),
    "recordsTotal" => intval($qtdeLinha),
    "recordsFiltered" => intval($total),
    "data" => $dados
);

echo json_encode($json_data);