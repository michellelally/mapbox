import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';


mapboxgl.accessToken = pk.eyJ1IjoibWljaGVsbGVsYWxseSIsImEiOiJja3N1a3U3cm4wMGhnMzNscWpidHRsdnZvIn0.RiZuUfuCiArJgMJQPjGstg;

export default function App() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
    });
});
