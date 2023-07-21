<?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $first_name = $_POST['name'];
    $last_name = $_POST['surname'];
    $phone = $_POST['tel'];
    $email = $_POST['email'];

    $data = "$first_name\t$last_name\t$phone\t$email\n";

    // Шлях до файлу, в який зберігатимемо дані
    $file_path = 'data.txt';

    $file = fopen($file_path, 'a');

    fwrite($file, $data);

    fclose($file);

  }
?>
