<?php

    session_start();

    if(!isset($_SESSION['ID'])){
        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Você não está autenticado'
        );
    }else{
        $dados = array(
            'tipo' => 'success',
            'mensagem' => 'Seja bem vindo ao sistema!'
        );
    }

    echo json_encode($dados);