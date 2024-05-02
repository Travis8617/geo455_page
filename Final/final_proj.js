var mymap = L.map("map", {
    center: [39.5, -98], 
    zoom: 5
    });






var api_url2 = 'https://firms.modaps.eosdis.nasa.gov/api/country/csv/872e426ef9f441d2fa52c1ad4c89ff80/MODIS_NRT/USA/2';


var json = L.geoJSON(json, {pointToLayer: function(feature, latlng){var markerss = L.marker(latlng, {icon: myIcon});
                                                                       
                                                                       return json;
                                                                       }});
var Cluster = L.markerClusterGroup();


 $.get (api_url2, function(csvString) {

    // Use PapaParse to convert string to array of objects
    var data = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;
     
    // Create marker cluster group
    
     
    // For each row in data, create a marker and add it to the map
    // For each row, columns `Latitude`, `Longitude`, and `Title` are required
    for (var i in data) {
      var row = data[i];

      var marker = L.marker([row.latitude, row.longitude], {icon: myIcon}, {
        opacity: 1
      }).bindPopup("Latitude: " + row.latitude + ", Longitude: " + row.longitude);
      
      
        
        
      json.addLayer(marker);
      Cluster.addLayer(marker);
    }
     
     
     json.addTo(mymap);
     Cluster.addTo(mymap);
     
     
  });













var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(mymap);

var grayscale2 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
});

var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 2,
    maxZoom: 19
}).addTo(mymap);

var grayscale = L.tileLayer('https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 0,
	maxZoom: 22,
	accessToken: 'ZBttPnOvSwPGVLa9GeEapIrLw911i48HPuNS99NTMCJTTd3oaCjDXMUCp1n6ylMP'
});



grayscale.addTo(mymap);



function style1(feature){
    return {
        fillColor: '#b3490a',   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.75
    };
}

function style2(feature){
    return {
        fillColor: '#a17544',   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.75
    };
}

function style3(feature){
    return {
        fillColor: '#7ea8b4',   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.75
    };
}

function style4(feature){
    return {
        fillColor: '#91c07d',   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.75
    };
}

function style5(feature){
    return {
        fillColor: '#6b5440',   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.75
    };
}

function style6(feature){
    return {
        fillColor: '#dfdfdf',   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.75
    };
}

function style7(feature){
    return {
        fillColor: '#d5b740',   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.75
    };
}

function style8(feature){
    return {
        fillColor: '#8e3645',   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.75
    };
}

function style9(feature){
    return {
        fillColor: '#5e4640',   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.75
    };
}

function style10(feature){
    return {
        fillColor: '#845a4b',   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.75
    };
}

//Fire symbol for firepoints
var myIcon = L.icon({
    iconUrl: 'images/fire.png',
    iconSize: [30, 30],
    
})



function highlightFeature(e) {
    // Get access to the feature that was hovered through e.target
    var feature = e.target;

    // Set a thick grey border on the feature as mouseover effect
    // Adjust the values below to change the highlighting styles of features on mouseover
    // Check out https://leafletjs.com/reference-1.3.4.html#path for more options for changing style
    feature.setStyle({
        weight: 2,
        color: '#666',
        fillOpacity: 0.7
    });

    // Bring the highlighted feature to front so that the border doesn’t clash with nearby states
    // But not for IE, Opera or Edge, since they have problems doing bringToFront on mouseover
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}

//var geojson; // define a variable to make the geojson layer accessible for the function to use   


function resetHighlight(e) {
    range1.resetStyle(e.target);
    range2.resetStyle(e.target);
    range3.resetStyle(e.target);
    range4.resetStyle(e.target);
    range5.resetStyle(e.target);
    range6.resetStyle(e.target);
    range7.resetStyle(e.target);
    range8.resetStyle(e.target);
    range9.resetStyle(e.target);
    range10.resetStyle(e.target);

}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature, // Do what defined by the highlightFeature function on mouseover
        mouseout: resetHighlight,    // Do what defined by the resetHighlight function on mouseout
    });
}



var range1 = L.geoJson(acersacc, {
    style:style1,
}).bindPopup(function (layer){
    return '<p>Silver Maple is very similar to the Red Maple tree except that its leaves turn yellow or brown, not red, in the fall. Sometimes the trunks of silver maples are hollow, allowing for animals and birds to live inside of them. It can grow in a USDA Hardiness Zone 3-9. A mature Silver Maple can grow to 50-80 feet high and prefers moist, well drained soils.</p>' + '<a href = "https://en.wikipedia.org/wiki/Acer_saccharinum">Wikipedia</a>' + '<br>' + '<img src="images/Silver-maple.png" width="200" height="auto" align="center" >';    
});

var range2 = L.geoJson(acerrubr, {
    style:style2,
}).bindPopup(function (layer){
    return '<p>Red maples can tolerate a variety of soils, helping it have a wide range. It can grow in a USDA Hardiness Zones 3-9. This shade tree can grow to 40-60 feet high and 40 feet wide when mature. It has a fast growth rate and prefers full sun. It is the state tree of Rhode Island.</p>' + '<a href = "https://en.wikipedia.org/wiki/Acer_rubrum">Wikipedia</a>' + '<br>' + '<img src="images/Sugar-maple.png" width="200" height="auto" align="center" >';       
});

var range3 = L.geoJson(cornflor, {
    style:style3,
}).bindPopup(function (layer){
    return '<p>Flowering dogwood grows glossy red berries that attract birds. It blooms in April and May and does well in acidic, well-drained soil. Flowering dogwood thrives in USDA Hardiness Zones 5-9. It reaches a maximum height of 25 feet and spread of 25 feet at maturity. It is the state tree of Missouri and Virginia, while it is the state flower of North Carolina.</p>' + '<a href = "https://en.wikipedia.org/wiki/Cornus_florida">Wikipedia</a>' + '<br>' + '<img src="images/flowering-dogwood-tree.png" width="200" height="auto" align="center" >';      
});

var range4 = L.geoJson(pinucont, {
    style:style4,
}).bindPopup(function (layer){
    return '<p>lodgepole pine does best in full sun to light shade and adapts to a variety of soils. It begins to bear cones early on from six to 10 years of age. This evergreen grows in USDA Hardiness Zones 4-8. It has a mature height of 70-80 feet and a spread of 20 feet. It has a slow to medium growth rate. </p>' + '<a href = "https://en.wikipedia.org/wiki/Pinus_contorta">Wikipedia</a>' + '<br>' + '<img src="images/lodgepolepine.png" width="200" height="auto" align="center" >';      
});

var range5 = L.geoJson(pseumenz, {
    style:style5,
}).bindPopup(function (layer){
    return '<p>Douglas-fir is written as one word or hyphenated to indicate that it is not a true fir. It is the state tree of Oregon. It is also a popular Christmas tree choice due to its nice shape. It has a USDA Hardiness Zones of 4-6. It can grow to 40-70 feet high and 12-20 feet wide at maturity. It prefers acidic or neutral soils and does not do well in dry, poor soils.</p>' + '<a href = "https://en.wikipedia.org/wiki/Douglas_fir">Wikipedia</a>' + '<br>' + '<img src="images/douglasfir.png" width="200" height="auto" align="center" >';     
});

var range6 = L.geoJson(pinutaed, {
    style:style6,
}).bindPopup(function (layer){
    return '<p>Also known as bull pine or old-field pine, this is one of the fastest growing southern pines and is native to the east coast of North America ranging from New Jersey to Florida to Texas. This pine has a USDA Hardiness Zones of 6-9 and can grow in a variety of soils. It grows 60-90 feet high and 25-35 feet wide at maturity. It is the state tree of Arkansas.</p>' + '<a href = "https://en.wikipedia.org/wiki/Pinus_taeda">Wikipedia</a>' + '<br>' + '<img src="images/loblollypine.png" width="200" height="auto" align="center" >';       
});

var range7 = L.geoJson(abiebals, {
    style:style7,
}).bindPopup(function (layer){
    return '<p>This evergreen has a narrow, spire shape with shiny dark green needles. It is adapted to a number of sites from swamps to rocky mountainsides, but it grows best in cold climates with acidic, moist soil. This tree is a popular choice for Christmas trees. It grows in the USDA Hardiness Zones 3-5. It grows from 45-75 feet high and 20-25 feet wide at maturity. It has a slow growth rate.</p>' + '<a href = "https://en.wikipedia.org/wiki/Abies_balsamea">Wikipedia</a>' + '<br>' + '<img src="images/balsamfir.png" width="200" height="auto" align="center" >';     
});

var range8 = L.geoJson(poputrem, {
    style:style8,
}).bindPopup(function (layer){
    return '<p>Aspen is known as the largest living organism, as it reproduces by sending sprouts from their roots, meaning all the trees in a clone are connected. It is the state tree of Utah. This shade tree thrives in USDA Hardiness Zones 1-7 and grows to a height of 40-50 feet. It spreads 20-30 feet when mature. It is a fast grower and it prefers abundant moisture.</p>' + '<a href = "https://en.wikipedia.org/wiki/Populus_tremuloides">Wikipedia</a>' + '<br>' + '<img src="images/quakingaspen.png" width="300" height="auto" align="center" >';       
});

var range9 = L.geoJson(liqustyr, {
    style:style9,
}).bindPopup(function (layer){
    return '<p>Native to the southeastern United States, this tree has glossy green star-shaped leaves that turn yellow, purple and red in the fall and stay on the tree late into the season. Sweetgum grows in USDA Hardiness Zones 5-9 and has a height of 60-75 feet and 40-50 feet spread when mature. It can grow in various soils but does not tolerate pollution well.</p>' + '<a href = "https://en.wikipedia.org/wiki/Liquidambar_styraciflua">Wikipedia</a>' + '<br>' + '<img src="images/americansweetgum.png" width="300" height="auto" align="center" >';      
});

var range10 = L.geoJson(queralba, {
    style:style10,
}).bindPopup(function (layer){
    return '<p>The white oak grows in Hardiness Zones 3-9 and prefers slightly acidic to neutral well-draining soils. It has a mature height of 50-80 feet and a spread of 50-80.</p>' + '<a href = "https://en.wikipedia.org/wiki/Quercus_subg._Quercus#Section_Quercus">Wikipedia</a>' + '<br>' + '<img src="images/whiteoak.png" width="300" height="auto" align="center" >';       
}).addTo(mymap);

//Fire point creation
var api_url = 'https://firms.modaps.eosdis.nasa.gov/api/area/csv/872e426ef9f441d2fa52c1ad4c89ff80/LANDSAT_NRT/world/2'; //Api link to csv



//Cluster the Fire points

//Scale
L.control.scale({position: 'bottomright', maxWidth: '150', metric: 'True'}).addTo(mymap); 

//Home Button
L.easyButton(('<img src="images/globe.png", height=80%>'), function(btn, map){
    map.setView([39.5, -98], 5);
}, {position: 'topleft'}).addTo(mymap);


//Layer control

var overlays = {
    "Silver Maple/Acer Saccharinum": range1,
    "Red Maple/Acer Rubrum": range2,
    "Flowering Dogwood/Cornus Florida": range3,
    "Lodgepole Pine/Pinus Contorta": range4,
    "Douglas-fir/Pseudotsuga Menziesii": range5,
    "Loblolly Pine/Pinus Taeda": range6,
    "Balsam Fir/Abies Balsamea": range7,
    "Quaking Aspen/Populus Tremuloides": range8,
    "American Sweetgum/Liquidambar Styraciflua": range9,
    "White Oak/Quercus Alba": range10,

};

var basemaps = {
    "Streets": streets,
    "Satellite": satellite,
    "Grayscale": grayscale
};

var layerControl = L.control.layers({}, overlays, {collapsed: false}).addTo(mymap);

var firetoggle = {"Wildfire Points": json, "Wildfire Clustesr": Cluster};
 var fireLayerControl = L.control.layers(firetoggle, {}, {collapsed: false}).addTo(mymap);

var baselayerControl = L.control.layers(basemaps, {}, {collapsed: false}).addTo(mymap);

