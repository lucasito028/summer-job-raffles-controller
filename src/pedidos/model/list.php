<?php

include('../../../conn/conn.php');


$requestData = $_REQUEST;

session_start();

$id = $_SESSION['ID'];

$colunas = $requestData['columns'];

$sql = "SELECT DATE_FORMAT(p2.DATA, '%d/%m/%Y %H:%i:%s') as DATA, c.ID as 

CLIENTE_ID, c.NOME as CLIENTE, p.ID as PRODUTO_ID, p.NOME as PRODUTO, p2.QTDE FROM

CLIENTE c, PRODUTO p, PEDIDO p2 WHERE p2.CLIENTE_ID = c.ID AND p2.PRODUTO_ID = p.ID  ";

$resultado = $pdo->query($sql);

$qtdeLinha = $resultado->rowCount();

$filtro = $requestData['search']['value'];

if(!empty($filtro)){

    $sql .= " AND (ID LIKE '$filtro%' ";
    $sql .= " OR CLIENTE LIKE '$filtro%') ";
    $sql .= " OR PRODUTO LIKE '$filtro%') ";
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