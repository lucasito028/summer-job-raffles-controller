<?php

include('../../../conn/conn.php');

session_start();

$ep_id = $_SESSION['ID'];

$sql = "SELECT * FROM PEDIDOS WHERE EMPRESA_ID = ".$ep_id." ORDER BY NOMEPRODUTO DESC";

$resultado = $pdo->query($sql);
if($resultado){
    while($row = $resultado -> fetch(PDO::FETCH_ASSOC)){
        $dados[] = array_map('utf8_encode', $row);
}}

echo json_encode($dados);


