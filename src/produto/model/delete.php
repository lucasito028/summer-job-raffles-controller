<?php 

include('../../../conn/conn.php');


$id = $_REQUEST['ID'];

$sql = "DELETE FROM PRODUTO WHERE ID = $id";

$resultado = $pdo->query($sql);

if($resultado){
    $dados = array(
        "tipo" => "success",
        "message" => "Deu certo"
    );
}else{
    $dados = array(
        "tipo" => "success",
        "message" => "Deu pau na hora de deletar"    
    );
}

echo json_encode($dados);