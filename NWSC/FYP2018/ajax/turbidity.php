<?php 

	include "../include/dba.php";

	$query = "SELECT * FROM nwsc_data ORDER BY parameter_id DESC LIMIT 0, 1";

	$result = mysqli_query($conn, $query);

	if (!$result) {
		echo "QUERY FAILED";
	}

	while ($row = mysqli_fetch_array($result)) {
		
		echo $turbidity = $row["turbidity"];
		

	}




 ?>

 