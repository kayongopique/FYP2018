<?php 

	//Initiating the connection to the database
	  $conn = mysqli_connect("localhost", "root", "", "nwsc_db");

	  if(mysqli_connect_error()){

	    die("Connection Failed");

	  }


 ?>