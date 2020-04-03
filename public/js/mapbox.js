/* eslint-disable*/
export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYW5obWluaDEwYTJob2EiLCJhIjoiY2s4ajVtamRmMDhhdzNmbWo2bmRyYXJzbCJ9.qmKp1m3LTwWwgOCiWq0j8Q';

  var map = new mapboxgl.Map({
    container: 'map', //id map
    style: 'mapbox://styles/mapbox/streets-v11',
    scrollZoom: false
    // center: [-118.1614973, 34.0333814],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      elment: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 40
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 230,
      bottom: 130,
      left: 100,
      right: 100
    }
  });
};
