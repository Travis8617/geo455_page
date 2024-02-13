var mymap = L.map("map").setView([35.611124588490796, -83.55189158204868], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var myIcon1 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon2 = L.icon({
    iconUrl: 'images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon3 = L.icon({
    iconUrl: 'images/icon_3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon4 = L.icon({
    iconUrl: 'images/icon_4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon5 = L.icon({
    iconUrl: 'images/icon_5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon6 = L.icon({
    iconUrl: 'images/icon_6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon7 = L.icon({
    iconUrl: 'images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon8 = L.icon({
    iconUrl: 'images/icon_8.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon9 = L.icon({
    iconUrl: 'images/icon_9.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon10 = L.icon({
    iconUrl: 'images/icon_10.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon11 = L.icon({
    iconUrl: 'images/icon_11.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var Smoky = L.marker([35.611124588490796, -83.55189158204868], {icon: myIcon1}).bindPopup("<b>Smoky Mountains National Park").addTo(mymap);
var Prague = L.marker([50.08247017298937, 14.442954465135362], {icon: myIcon2}).bindPopup("<b>Prague").addTo(mymap);
var Amsterdam = L.marker([52.37521980387181, 4.90183886104311], {icon: myIcon3}).bindPopup("<b>Amsterdam").addTo(mymap);
var Glacier = L.marker([48.75936088906799, -113.7854707984681], {icon: myIcon4}).bindPopup("<b>Glacier Mountains National Park").addTo(mymap);
var Sequoia = L.marker([36.48545347304136, -118.56447800490453], {icon: myIcon5}).bindPopup("<b>Sequoia National Park").addTo(mymap);
var Dublin = L.marker([53.347577233256615, -6.261506412864857], {icon: myIcon6}).bindPopup("<b>Dublin").addTo(mymap);
var Osaka = L.marker([34.67474696091289, 135.50320028512655], {icon: myIcon7}).bindPopup("<b>Osaka").addTo(mymap);
var Cairn = L.marker([57.029598825528005, -3.5615941326100797], {icon: myIcon8}).bindPopup("<b>Cairngorms National Park").addTo(mymap);
var Maldives = L.marker([-0.61171172324242, 73.09184770599632], {icon: myIcon9}).bindPopup("<b>Maldives").addTo(mymap);
var Rome = L.marker([41.90075465743108, 12.49684745577566], {icon: myIcon10}).bindPopup("<b>Rome").addTo(mymap);
var Acadia = L.marker([44.33948945209749, -68.27621330833807], {icon: myIcon11}).bindPopup("<b>Acadia National Park").addTo(mymap);

    