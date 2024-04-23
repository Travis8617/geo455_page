var mymap = L.map("map", {
    center: [39.5, -98], 
    zoom: 5
    });

var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
});

grayscale.addTo(mymap);

function getColor(value) {
    return value > 13 ? '#54278f':
           value > 6  ? '#756bb1':
           value > 4  ? '#9e9ac8':
           value > 2  ? '#cbc9e2':
                         '#f2f0f7';
}


function style(feature){
    return {
        fillColor: getColor(feature.properties.pop_den),   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}

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
    style:'green',
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:red">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
});

var range2 = L.geoJson(acerrubr, {
    style:style,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:purple">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
});

var range3 = L.geoJson(cornflor, {
    style:style,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:purple">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
});

var range4 = L.geoJson(pinucont, {
    style:style,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:purple">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
});

var range5 = L.geoJson(pseumenz, {
    style:style,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:purple">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
});

var range6 = L.geoJson(pinutaed, {
    style:style,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:purple">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
});

var range7 = L.geoJson(abiebals, {
    style:style,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:purple">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
});

var range8 = L.geoJson(poputrem, {
    style:style,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:purple">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
});

var range9 = L.geoJson(liqustyr, {
    style:style,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:purple">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
});

var range10 = L.geoJson(queralba, {
    style:style,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:purple">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
}).addTo(mymap);


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

var layerControl = L.control.layers({}, overlays, {collapsed: false}).addTo(mymap);




