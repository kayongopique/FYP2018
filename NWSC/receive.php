<?php
$Sender=$_GET['sender'];
$sms=$_GET['sms'];
$explode=explode(" ",$sms);
$conductivity=$explode[2];
$turbidity=$explode[1];
$PH=$explode[0];
include 'config.php';
$q=("insert into nwsc_data (Sender,PH,turbidity, conductivity) values ('$Sender','$PH','$turbidity','$conductivity')");
mysqli_query($con, $q);
?>

