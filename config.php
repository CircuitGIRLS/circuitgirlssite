<?php
 $dbhost = 'localhost';
 $dbUsername = 'root';
 $dbPassword = '';
 $dbName = 'login-circuit';

 $conexao = new mysqli($dbhost,$dbUsername,$dbPassword,$dbName);
 
 //if($conexao->connect_errno)
 //{
   // echo "Erro";
 //}
 //else
 //{
  //  echo "Conexão efetuado com sucesso";
 //}
?>