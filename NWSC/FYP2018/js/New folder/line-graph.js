
$(document).ready(function(){

	$.ajax({
		url : "http://localhost/FYP2018/ajax_graph/data.php",
		type : "GET",
		success : function(data){
			console.log(data);

			var parameters = {
				temperature : [],
				
				heart_rate : [],
				
				time_stamp : []
			};

			var len = data.length;

			for (var i = 0; i < len; i++) {
				if (data[i].temperature) {
					parameters.temperature.push(data[i].temperature); 
				}
				if (data[i].heart_rate) {
					parameters.heart_rate.push(data[i].heart_rate); 
				}
				if (data[i].time_stamp) {
					parameters.time_stamp.push(data[i].time_stamp); 
				}
				
			}

			console.log(parameters);

			var ctx = $("#myChart");

			//Global Variables
			Chart.defaults.global.defaultFontFamily = 'Lato';
		    Chart.defaults.global.defaultFontSize = 18;
		    Chart.defaults.global.defaultFontColor = '#777';

			var data = {
				//parameters.inserted_time
				labels : parameters.time_stamp,
				datasets : [
					{
						label : "Temperature",
						data : parameters.temperature,
						backgroundColor : "#007bff",
						borderColor : "#007bff",
						fill : false,
						borderWidth: 3
					},
					{
						label : "heart_rate",
						data : parameters.heart_rate,
						backgroundColor : "#28a745",
						borderColor : "#28a745",
						fill : false,
						borderWidth: 3
					},
					
				]
			};

			var options = {
				title : {
					 display : true,
					 position : "top",
					 text : "Patient's Body Parameter Against Time",
					 fontSize : 25,
					 fontColor : "#333"
				},
				legend : {
					display : true,
					position : "bottom",
					labels:{
		              fontColor: '#000'
		            }
				},
				scales: {
	            yAxes: [{
	              scaleLabel: {
	                display: true,
	                labelString: 'Parameters Values',
	                fontSize: 18
	              }
	            }],
	            xAxes: [{
	              scaleLabel: {
	                display: true,
	                labelString: 'Time Delivered',
	                fontSize: 18
	              }
	            }]
	          }
			}


			var chart = new Chart(ctx, {
				type : "line",
				data : data,
				options : options

			});




		},
		error : function(data){
			console.log(data);
		}

	});

});