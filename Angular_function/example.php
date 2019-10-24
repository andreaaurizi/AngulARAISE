<?php
    
    $db_hostname = 'localhost';
    $db_username = "root";
    $db_username_password = '';
    $db_name = 'angularaise';

    //(1) Connessione con il db
    $db = mysqli_connect($db_hostname,$db_username,$db_username_password,$db_name);

    //(2) Controllo avvenuta connessione
    if(mysqli_connect_errno()){
        echo "Connection failed.".mysql_connection_error();
        exit();      
    }
    
    //(3) Operation on db
    $ret = mysqli_query($db, );

$sql = "SELECT id, username, email, password, nome, cognome FROM users";  

    $list = [];
    while($row = $ret->fetch_assoc())
        array_push($list, $row);
    
    echo json_encode($list);

    //(4) Chiusura del db
    mysqli_close($db);
    
?>
