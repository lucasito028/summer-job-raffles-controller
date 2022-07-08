<?php

include('../../../conn/conn.php');

session_start();

$requestData = $_REQUEST;

if(empty($requestData['NOME']) && empty($requestData['LOGIN']) && empty($requestData['SENHA'])){

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
            $stmt = $pdo->prepare('insert into EMPRESA (NOME, LOGIN, SENHA) values (:a, :b, :c)');
            $stmt -> execute(array(
                ':a' => utf8_decode($requestData['NOME']),
                ':b' => $requestData['LOGIN'],
                ':c' => md5($requestData['SENHA'])
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
            $stmt = $pdo->prepare("UPDATE EMPRESA SET NOME = :a, LOGIN = :b, SENHA = :c WHERE ID = :id");
            $stmt -> execute(array(
                ':id' => $id,
                ':a' => utf8_decode($requestData['NOME']),
                ':b' => $requestData['LOGIN'],
                ':c' => md5($requestData['SENHA'])
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

