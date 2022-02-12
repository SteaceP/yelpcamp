mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  // set default settings
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: campground.geometry.coordinates,
  zoom: 10,
}); // set default settings

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
  .setLngLat(campground.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h3>${campground.title}</h3><p>${campground.location}</p>`
    )
  )
  .addTo(map);
