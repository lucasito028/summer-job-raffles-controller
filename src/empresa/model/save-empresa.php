<?php

include('../../../conn/conn.php');

session_start();

$requestData = $_REQUEST;

if(empty($requestData['NOME']) || empty($requestData['TELEFONE'])){

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
            $stmt = $pdo->prepare('insert into CLIENTE (NOMECLIENTE, TELEFONE, EMPRESA_ID) values (:a, :b, :c)');
            $stmt -> execute(array(
                ':a' => utf8_decode($requestData['NOME']),
                ':b' => $requestData['TELEFONE'],
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
            $stmt = $pdo->prepare('update CLIENTE set NOMECLIENTE = :a, TELEFONE = :b, where ID =:id');
            $stmt -> execute(array(
                ':id' => $ID,
                ':a' => utf8_decode($requestData['NOME']),
                ':b' => $requestData['TELEFONE']
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

    }
}

echo json_encode($dados);

