(function($){
	"use strict";

	var tnMaps = window.tnMaps = {};

	tnMaps.mapShown = false;
	tnMaps.mapCenter = new google.maps.LatLng(33.609663,-117.7295662);

	tnMaps.mapOptions = function(){

		return {
			center: tnMaps.mapCenter,
			zoom: 12,
  			mapTypeId: google.maps.MapTypeId.ROADMAP
		} 
	}; 

	tnMaps.mainMarkerOptions = function(){

		return {
			position: tnMaps.mapCenter,
			title: "Arthritis and Rheumatic Disease Center"
		};

	};

	$(document).ready(function(){

		var mapModal = document.getElementById("jsMapModal");
		var mapContainer = document.getElementById("mapContainer");
		var options = tnMaps.mapOptions();
		var markerOptions = tnMaps.mainMarkerOptions();
		

		// Resize the map container when the modal is shown
		// to make the map fill properly.
		$("#jsMapModal").on("shown.bs.modal", function(){
			if(!tnMaps.mapShown){
				console.log("shown has fired");
				mapContainer.style.width = "100%";
				// Create the map object
				tnMaps.map = new google.maps.Map(mapContainer, options);
				tnMaps.mapShown = true;
				// Add marker
				tnMaps.mainMarker = new google.maps.Marker(markerOptions);
				tnMaps.mainMarker.setMap(tnMaps.map);
			}
		});
	});

}(jQuery));