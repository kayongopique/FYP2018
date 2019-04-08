$(document).ready(function(){
	$.ajax({
		url : "http://localhost/davine/FYP2018/followersdata.php",
		type : "GET",
		success : function(data){
			console.log(data);

			var id = [];
			var event_follower = [];
			var sensor_follower = [];
			var celsius_follower = [];

			for(var i in data) {
				id.push("value" + data[i].id);
				event_follower.push(data[i].time_stamp);
				sensor_follower.push(data[i].temperature);
				celsius_follower.push(data[i].heart_rate);
			}

			var chartdata = {
				labels: id,
				datasets: [
					{
						label: "event",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(59, 89, 152, 0.75)",
						borderColor: "rgba(59, 89, 152, 1)",
						pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
						pointHoverBorderColor: "rgba(59, 89, 152, 1)",
						data: event_follower
					},
					{
						label: "sensor",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(29, 202, 255, 0.75)",
						borderColor: "rgba(29, 202, 255, 1)",
						pointHoverBackgroundColor: "rgba(29, 202, 255, 1)",
						pointHoverBorderColor: "rgba(29, 202, 255, 1)",
						data: sensor_follower
					},
					{
						label: "celsius",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(211, 72, 54, 0.75)",
						borderColor: "rgba(211, 72, 54, 1)",
						pointHoverBackgroundColor: "rgba(211, 72, 54, 1)",
						pointHoverBorderColor: "rgba(211, 72, 54, 1)",
						data: celsius_follower
					}
				]
			};

			var ctx = $("#mycanvas");

			var LineGraph = new Chart(ctx, {
				type: 'line',
				data: chartdata
			});
		},
		error : function(data) {

		}
	});
});
