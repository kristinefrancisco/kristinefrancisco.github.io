var map;

function initMap() {
        myMap = new google.maps.Map(document.getElementById('map'), {
          	center: {lat: 40.7127, lng: -74.0059},
          	zoom: 12
        });
        // ADD MARKER
        var marker = new google.maps.Marker({
	 	 	position: {lat: 40.7127, lng: -74.0059},
	  	 	map: myMap,
	  	 	title: 'New York, NY'
		});
        // ZOOM IN ON CLICK
        marker.addListener('click', function() {
          	myMap.setZoom(15);
          	myMap.setCenter(marker.getPosition());
        });
}

// TURN ON MAP
initMap();