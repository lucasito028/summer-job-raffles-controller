<?php

include('../../../conn/conn.php');

session_start();

if(!isset($_REQUEST['ID'])){
    $dados = array(
        'tipo' => 'error',
        'message' => 'deu pau'
    );
}else{
    $dados = array(
        'tipo' => 'success',
        'message' => 'Deu certo'
    );
}

echo json_encode($dados);
