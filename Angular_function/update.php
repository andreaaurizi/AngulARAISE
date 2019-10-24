<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if ((int)$request->id < 1 || trim($request->username) == '' || 
        trim($request->email) =="" || trim($request->password) =="" || 
        trim($request->nome) =="" || trim($request->cognome) ==""  ) {
    return http_response_code(400);
  }

  // Sanitize.
  $id    = mysqli_real_escape_string($con, (int)$request->id);
  $username = mysqli_real_escape_string($con, trim($request->username));
  $email = mysqli_real_escape_string($con, trim($request->email));
  $password = mysqli_real_escape_string($con, trim($request->password));
  $nome = mysqli_real_escape_string($con, trim($request->nome));
  $cognome = mysqli_real_escape_string($con, trim($request->cognome));
  $logged = mysqli_real_escape_string($con, trim($request->logged));
  $status = mysqli_real_escape_string($con, trim($request->status));

  // Update.
  $sql = "UPDATE user SET username='$username', email='$email', password='$password', nome='$nome', cognome='$cognome', logged ='$logged', status='$status' WHERE id = '{$id}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}
?>