var user_lat = 0; 
var user_lon = 0; 
var map; 
var marker; 
var image = 'car.png'; 

function init() { 
    var me = new google.maps.LatLng(user_lat, user_lon); 
    var myOptions = {
        zoom: 12, 
        center: me, 
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }; 
    map = new google.maps.Map(document.getElementById('map'), myOptions); 
    getMyLocation(); 
}

function getMyLocation() { 
    if(navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(function(position) { 
            user_lat = position.coords.latitude; 
            user_lon = position.coords.longitude; 
            createMap(); 
            displayCars(); 
        }); 
    } else { 
        alert("Geolocation isn't supported by your web browser. What a shame!"); 
    }
}

function createMap() { 
    me = new google.maps.LatLng(user_lat, user_lon); 

    //Update map and go there
    map.panTo(me); 

    //Create a marker
    marker = new google.maps.Marker({
        position: me, 
        title: "Here I Am!"
    }); 
    marker.setMap(map); 

    //Open info window on click of marker 
    var infowindow = new google.maps.InfoWindow(); 
    google.maps.event.addListener(marker,'click', function() { 
        infowindow.setContent(marker.title); 
        infowindow.open(map, marker); 
    }); 
}

function displayCars() { 
    xhr = new XMLHttpRequest(); 

    xhr.open("POST", "https://jordan-marsh.herokuapp.com/rides", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    var params = "username=DaPLuvLU" + "&lat=" + String(user_lat) + "&lng=" + String(user_lon);
    xhr.onreadystatechange = function() { 
        if(xhr.readyState == 4 && xhr.status == 200) { 
            jsonData = JSON.parse(xhr.responseText); 
            for (count = 0; count < jsonData.length; count++) { 
                var vehicle = new google.maps.Marker({
                    position: {lat:jsonData[count].lat, lng:jsonData[count].lng}, 
                    map: map, 
                    icon: image
                }); 
                marker.setMap(map); 
            }
            nearestCar(); 
        }
    }; 
    xhr.send(params); 
}

function nearestCar() { 
    //Calculate distance between me and first car in JSONdata (store in shortest distance variable)
    //Calculate distance between me and all other cars in JSONdata --> if we find a shorter distance then shortest distance variable, 
    //update the shortest distance variable --> display this in infowindow 
    var car1 = new google.maps.LatLng(jsonData[0].lat, jsonData[0].lng); 
    var shortest_distance = google.maps.geometry.spherical.computeDistanceBetween(me, car1); 

    for (count = 0; count <jsonData.length; count++){
        var point = new google.maps.LatLng(jsonData[count].lat, jsonData[count].lng); 
        var distance = google.maps.geometry.spherical.computeDistanceBetween(me, point); 
        if(distance < shortest_distance){
            shortest_distance = distance; 
            console.log(shortest_distance);
        }
    }
}















