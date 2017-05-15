var FusionCharts = require("fusioncharts");
require("fusioncharts/fusioncharts.maps")(FusionCharts);
require("fusioncharts/maps/fusioncharts.world")(FusionCharts);


FusionCharts.ready(function(){
	var chart = new FusionCharts ({
		"type": "world",
		"width": "500",
		"height": "300",
		"dataFormat": "json",
		"dataSource": {
			chart:{

			}
		}	
	}).render("mymap");
})