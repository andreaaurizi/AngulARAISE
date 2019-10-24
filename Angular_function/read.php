<?php
/**
 * Returns the list of users.
 */
require 'database.php';

$users = [];
$sql = "SELECT id, username, email, password, nome, cognome, clan, win, lost, img_profile, logged, status FROM user";


if($result = mysqli_query($con,$sql)){
  $i = 0;
  while($row = mysqli_fetch_assoc($result)) {
    $users[$i]['id']    = $row['id'];
    $users[$i]['username'] = $row['username'];
    $users[$i]['email'] = $row['email'];
    $users[$i]['password'] = $row['password'];
    $users[$i]['nome'] = $row['nome'];
    $users[$i]['cognome'] = $row['cognome'];
    $users[$i]['clan'] = $row['clan'];
    $users[$i]['img_profile'] = $row['img_profile'];
    $users[$i]['win'] = $row['win'];
    $users[$i]['lost'] = $row['lost'];
    $users[$i]['logged'] = $row['logged'];
    $users[$i]['status'] = $row['status'];
    $i++;
  }

  echo json_encode($users);

}else{
    
  http_response_code(404);
}
?>