<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletando os dados do formulário
    $Usuario = $_POST['Usuario'];
    $Senha = $_POST['Senha'];
    $Email = $_POST['Email'];

    // Aqui você pode adicionar código para salvar esses dados em um banco de dados

    // Exibindo os dados inseridos
    echo "<h2>Dados do Usuário Cadastrado:</h2>";
    echo "Nome de Usuário: " . htmlspecialchars($Usuario) . "<br>";
    echo "Senha: " . htmlspecialchars($Senha) . "<br>";
    echo "Email: " . htmlspecialchars($Email) . "<br>";
} else {
    echo "Método de requisição inválido.";
}
?>
