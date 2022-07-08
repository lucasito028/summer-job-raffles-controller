<?php

include('../../../conn/conn.php');

$requestData = $_REQUEST;

$colunas = $requestData['columns'];

$sql = "select ID, NOME from EMPRESA where 1=1";

$resultado = $pdo->query($sql);

$qtdeLinha = $resultado->rowCount();

$filtro = $requestData['search']['value'];

if(!empty($filtro)){

    $sql .= " and (ID like '$filtro%' ";
    $sql .= " or NOME like '$filtro%') ";
}

$resultado = $pdo->query($sql);
$total = $resultado->rowCount();

$colunaOrdem = $requestData['order'][0]['column'];
$ordem = $colunas[$colunaOrdem]['data'];
$direcao = $requestData['order'][0]['dir'];

$inicio = $requestData['start'];
$tamanho = $requestData['length'];

$sql .= " order by $ordem $direcao limit $inicio, $tamanho ";
$resultado = $pdo->query($sql);
$dados = array();

while($row = $resultado -> fetch(PDO::ATTR_ERRMODE)){
    $dados[] = array_map('utf8_encode', $row);
}

$json_data = array(
    "draw" => intval($requestData['draw']),
    "recordsTotal" => intval($qtdeLinha),
    "recordsFiltered" => intval($total),
    "data" => $dados
);

echo json_encode($json_data);