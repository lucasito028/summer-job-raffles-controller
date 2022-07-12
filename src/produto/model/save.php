<?php

include('../../../conn/conn.php');

session_start();

$requestData = $_REQUEST;

if(empty($requestData['NOME']) || empty($requestData['VALOR'])){

    $dados = array(
        'tipo' => 'error',
        'message' => 'Faltou preencher um dos campos'
    );
}
else {

    $id = isset($requestData['ID']) ? $requestData['ID'] : '';
    $op = isset($requestData['operacao']) ? $requestData['operacao'] : '';

    if($op == 'insert'){
        try{
            $stmt = $pdo->prepare("INSERT INTO CLIENTE (NOME, VALOR, EMPRESA_ID) VALUES (:a, :b, :c)");
            $stmt -> execute(array(
                ':a' => utf8_decode($requestData['NOME']),
                ':b' => $requestData['VALOR'],
                ':c' => $_SESSION['ID']
            ));

            $dados = array(
                'tipo' => 'success',
                'message' => 'Muito deu serto parabens'
            );
        }catch(PDOException $e){
            $dados = array(
                'tipo' => 'error',
                'message' => 'Deu pau ai na hora de inserir'
            );
        }
        
    }else{

        try{
            $stmt = $pdo->prepare("UPDATE CLIENTE SET NOME = :a, VALOR = :b WHERE ID = :id");
            $stmt -> execute(array(
                ':id' => $id,
                ':a' => utf8_decode($requestData['NOME']),
                ':b' => $requestData['VALOR'],
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

