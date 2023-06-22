<?php

$servername = "localhost";
$username = "root";
$password = "senha";
$dbname = "contacts";

// Conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = $_POST["name"];
    $email = $_POST["email"];
    $birthdate = $_POST["birthdate"];
    $cpf = $_POST["cpf"];
    $phone = $_POST["phone"];

    
    $sql = "INSERT INTO contacts (name, email, birthdate, cpf, phone)
            VALUES ('$name', '$email', '$birthdate', '$cpf', '$phone')";

    if ($conn->query($sql) === TRUE) {
        // Dados inseridos com sucesso
        echo "Dados cadastrados com sucesso!";
    } else {
        
        echo "Erro ao cadastrar os dados: " . $conn->error;
    }
}


$conn->close();
?>
