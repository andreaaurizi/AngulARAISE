<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  if(trim($request->email) === '')
  {
    return http_response_code(400);
  }

  // Sanitize.
  $id = mysqli_insert_id($con);
  $username = mysqli_real_escape_string($con, trim($request->username));
  $email = mysqli_real_escape_string($con, $request->email);
  $password = mysqli_real_escape_string($con, $request->password);
  $nome = mysqli_real_escape_string($con, $request->nome);
  $cognome = mysqli_real_escape_string($con, $request->cognome);
  $clan = mysqli_real_escape_string($con, $request->clan);
  $img_profile = mysqli_real_escape_string($con, $request->img_profile);
  $win = mysqli_real_escape_string($con, $request->win);
  $lost = mysqli_real_escape_string($con, $request->lost);
  $logged = mysqli_real_escape_string($con, $request->logged);
  $status = mysqli_real_escape_string($con, $request->status);


  // Create.
  $sql = "INSERT INTO user (id,username,email, password, nome, cognome, clan, win, lost, logged, img_profile, status ) VALUES (null,'{$username}','{$email}','{$password}','{$nome}','{$cognome}', '{$clan}', '{$win}', '{$lost}', '{$logged}', '{$img_profile}', '{$status}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $user = [
      'username' => $username,
      'email' => $email,
      'password' => $password,
      'nome' => $nome,
      'cognome' => $cognome,
      'clan' => $clan,
      'id'    => $id,
      'win'    => $id,
      'lost'    => $lost,
      'logged'    => $logged,
      'img_profile'    => $img_profile,
      'status'    => $status
    ];
    echo json_encode($user);
  }
  else
  {
    http_response_code(422);
  }
}