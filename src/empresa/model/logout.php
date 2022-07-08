<?php

session_start();

session_destroy();

$dados = array(
    'tipo' => 'success',
    'message' => 'Deu certo'
);

echo json_encode($dados);