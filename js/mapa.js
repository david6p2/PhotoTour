var map;
var i=0;
var puntos = new Array;
function inicio() {
    var latlng = new google.maps.LatLng(48.85710754499346,2.3512039184570312);
    var opciones = {
        zoom: 10,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("elMapa"), opciones);


    google.maps.event.addListener(map, 'click', 
		function(event) {	
			puntos[i] = event.latLng;
			/*var valores = document.getElementById("valores");
			valores.innerHTML = "";
			var p = document.createElement("p");
			p.innerHTML = "(" + puntos[i].lat() + ", " + puntos[i].lng() + ") " + i;
			valores.appendChild(p);*/
			ponerMarca(event.latLng);
			var consulta = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f14ddb838d90a8af5a03b62d17031f76&min_taken_date=1998-01-01&lat=" + puntos[i].lat() + "&lon="+ puntos[i].lng() +"&radius=10&radius_units=km&per_page=5&format=json&nojsoncallback=1";
			i++;
			$.getJSON(consulta,
				function(data) {
				  	$.each(data.photos.photo, 
					  	function(i,photo){
						  	var imagen = "https://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_q.jpg";
					      	$("<img/>").attr("src", imagen).prependTo("#images");
						}
					);
				}
			);

		}
	);
}

function ponerMarca(loc) {
		var marca = new google.maps.Marker({
			position: loc,
			map: map
		});
		/*var ventana = new google.maps.InfoWindow(
					{ content: loc.toString(),
						size: new google.maps.Size(50,50)
					});
		ventana.open(map,marca);*/
}

function mostrarPuntos(vector) {
	var divVector = document.getElementById("divVector");
	divVector.innerHTML = "";
	for (j=0;j<vector.length;j++){
		var parrafo = document.createElement("p");
		parrafo.innerHTML = vector[j].toString();
		divVector.appendChild(parrafo);
	}
}
