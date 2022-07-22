<?php

include('../../../conn/conn.php');

session_start();

$id_s = $_SESSION['ID'];

    $requestData = $_REQUEST;

    if(empty($requestData['NOME'])){
        $dados = array(
            "tipo" => 'error',
            "message" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s).'
        );
    }else{
        $ID = isset($requestData['ID']) ? $requestData['ID'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

        if($operacao == 'insert'){
            try{
                $stmt = $pdo->prepare("INSERT INTO CLIENTE (NOME, TELEFONE, EMPRESA_ID) VALUES (:a, :b, :c)");
                $stmt->execute(array(
                    ':a' => utf8_decode($requestData['NOME']),
                    ':b' => $requestData['TELEFONE'],
                    ':c' => $id_s
                ));
                $dados = array(
                    "tipo" => 'success',
                    "message" => 'Registro salvo com sucesso.'
                );
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "message" => 'Não foi possível salvar o registro '.$e
                );
            }
        }else{
            try{
                $stmt = $pdo->prepare("UPDATE CLIENTE SET NOME = :a, TELEFONE = :b WHERE ID = :id");
                $stmt->execute(array(
                    ':id' => $ID,
                    ':a' => utf8_decode($requestData['NOME']),
                    ':b' => $requestData['TELEFONE']
                ));
                $dados = array(
                    "tipo" => 'success',
                    "message" => 'Registro atualizado com sucesso.'
                );
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "message" => 'Não foi possível atualizar o registro '.$e
                );
            }
        }
    }

    echo json_encode($dados);

