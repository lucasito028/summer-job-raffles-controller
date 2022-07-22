<?php

include('../../../conn/conn.php');

session_start();

$requestData = $_REQUEST;

if(empty($requestData['CLIENTE_ID']) && empty($requestData['PRODUTO_ID'])){

    $dados = array(
        'tipo' => 'error',
        'message' => 'Faltou preencher um dos campos'
    );
}
else {

    $id = isset($requestData['ID']) ? $requestData['ID'] : '';
    $op = isset($requestData['operacao']) ? $requestData['operacao'] : '';

    $data = date("Y-m-d H:i:s");

    if($op == 'insert'){
        try{
            $stmt = $pdo->prepare("INSERT INTO PEDIDO (CLIENTE_ID, PRODUTO_ID, QTDE, DATA, STATUS ) VALUES (:a, :b, :c, :d, :e)");
            $stmt -> execute(array(
                ':a' => $requestData['CLIENTE_ID'],
                ':b' => $requestData['PRODUTO_ID'],
                ':c' => $requestData['QTDE'],
                ':d' => $data,
                ':e' => 1
            ));

            $dados = array(
                'tipo' => 'success',
                'message' => 'Muito deu serto parabens'
            );
        }catch(PDOException $e){
            $dados = array(
                'tipo' => 'error',
                'message' => 'Deu pau ai na hora de inserir'.$e
            );
        }
        
    }else{

        try{
            $stmt = $pdo->prepare("UPDATE PEDIDO SET PRODUTO_ID = :a, QTDE = :b WHERE ID = :id");
            $stmt -> execute(array(
                ':id' => $id,
                ':a' => $requestData['PRODUTO_ID'],
                ':b' => $requestData['QTDE'],
            ));

            $dados = array(
                'tipo' => 'success',
                'message' => 'Muito deu serto parabens'
            );
            
        }catch(PDOException $e){
            $dados = array(
                'tipo' => 'error',
                'message' => 'Deu pau ai na hora de Updatear'
            );
        }

    }
}

echo json_encode($dados);

