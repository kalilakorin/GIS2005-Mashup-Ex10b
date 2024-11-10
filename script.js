// Step 1 enter your mapbox studio token
mapboxgl.accessToken = 'xxxxxx';

var map = new mapboxgl.Map({
  container: 'map',
  // Step 2 - put in your style that you generated in Lab 1 for the Boulder area
  // e.g. mapbox://styles/user/ck27u9ejp1e291cmo0c78b4e3
  style: 'xxxxxx',
  center:[-105.28391,40.02072],
  // Modify these settings as you see fit!!
  bearing: 0, // bearing in degrees
  pitch: 60, // for 3d perspective
  zoom: 12  //zoom level
});

map.on('load', function () {
    // Add a layer showing the at risk mobilehomes from argis server
    map.addLayer({
        'id': 'mobilehomes-layer',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            // for data url enter the arcgis service with format geojson (f=geojson)
            // and spatial reference 4326 (WGS84 or Geographic) 
            // e.g. replace xxxxxx values below
            'data': 'https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Intersect_of_Intersect_of_MobileHomes_and_Dissolve_Buffer_of_Wildfire_History_and_FloodRisk/FeatureServer/0/query?where=flood_risk+%3D+%27high%27&outSR=xxxxxx&f=xxxxxx'
        },
        'paint': {
          // make circles larger as the user zooms from z12 to z22
          'circle-radius': {
          'base': 1.75,
          'stops': [[12, 2], [22, 180]]
          },
          // use an html color picker to enter a circle color of your choice below using 
          // hexadecimal values e.g. 
          // #000000 for black replace xxxxxx with your value
          'circle-color': 'xxxxxx',
          'circle-stroke-width': 1,
          'circle-stroke-color': '#000'
        }
    });
});


  