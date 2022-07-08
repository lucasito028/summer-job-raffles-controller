<?php 

include('../../../conn/conn.php');

$id = $_REQUEST['ID'];

$sql = "select * from EMPRESA where ID = $id";

$resultado = $pdo->query($sql);

if($resultado){
    $result = array();
    while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
        $result = array_map('utf8_decode', $row);
    }
    $dados = array(
        'tipo' => 'success',
        'message' => '',
        'dados' => $result
    );
}else{
    $dados = array(
        'tipo' => 'error',
        'message' => 'Nada nada nada naada',
        'dados' => array()
    );
}

echo json_encode($dados);